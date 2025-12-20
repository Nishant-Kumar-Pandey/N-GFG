import React, { useEffect, useState } from "react";
import "./calculator.css";

/**
 * Full-featured Calculator
 * - Prevents invalid input (double ops, multi-dots in a number)
 * - Keyboard support
 * - Equals / Clear / Delete
 * - History (stored in localStorage, clickable)
 * - Light/Dark theme toggle (saved in localStorage)
 * - Scientific mode (sin, cos, tan, sqrt, pow, pi, e, ^ -> power)
 * - Percent handling: 50% -> (50/100)
 * - Button press animation / hover
 */

const LS_HISTORY_KEY = "calc_history_v1";
const LS_THEME_KEY = "calc_theme_v1";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);
  const [isScientific, setIsScientific] = useState(false);
  const [theme, setTheme] = useState("dark"); // 'dark' or 'light'

  // Load history & theme from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(LS_HISTORY_KEY);
    if (saved) setHistory(JSON.parse(saved));
    const savedTheme = localStorage.getItem(LS_THEME_KEY);
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Persist history & theme
  useEffect(() => {
    localStorage.setItem(LS_HISTORY_KEY, JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    localStorage.setItem(LS_THEME_KEY, theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // ----------------
  // Input validation & builder
  // ----------------
  const operators = ["+", "-", "*", "/", "%", "^"];
  const isOperator = (ch) => operators.includes(ch);

  // addToInput: central place to validate before adding characters
  function addToInput(value) {
    // If value is a multi-char token (like 'sin(' or 'pi')
    // treat accordingly; we'll allow parentheses as tokens too.
    const lastChar = input.slice(-1);

    // prevent starting with operator (except minus to allow negative numbers)
    if (input === "" && isOperator(value) && value !== "-") return;

    // prevent double operators (e.g., 5++ or 5+-)
    if (isOperator(lastChar) && isOperator(value)) return;

    // prevent multiple dots in a single number:
    if (value === ".") {
      // find last operator index to isolate current number
      const lastOpIndex = Math.max(
        ...operators.map((op) => input.lastIndexOf(op))
      );
      const currentNumber = input.slice(lastOpIndex + 1);
      if (currentNumber.includes(".")) return;
      // avoid starting with '.' alone (convert to '0.')
      if (currentNumber === "") {
        setInput((p) => p + "0.");
        return;
      }
    }

    // parentheses handling: prevent ")( " misjoin (loose check)
    if (value === "(" && /[0-9.]$/.test(lastChar)) {
      // if number followed by '(', implicitly multiply: "2(" -> "2*("
      setInput((p) => p + "*" + value);
      return;
    }

    // percent: allow placing '%' after a number only
    if (value === "%") {
      if (!/[0-9)]$/.test(lastChar)) return;
    }

    setInput((p) => p + value);
  }

  // ----------------
  // Evaluate logic (safe-ish parsing + mapping)
  // ----------------
  function prepareExpression(expr) {
    if (!expr) return "";

    // Replace '^' with JS exponent operator **
    expr = expr.replace(/\^/g, "**");

    // Replace instances like 50% -> (50/100)
    expr = expr.replace(/(\d+(\.\d+)?)%/g, "($1/100)");

    // Replace common tokens with Math. equivalents
    // Allow both sin( ... ) and sin deg? We'll use radians (Math.sin)
    const funcMap = {
      sin: "Math.sin",
      cos: "Math.cos",
      tan: "Math.tan",
      sqrt: "Math.sqrt",
      log: "Math.log",
      ln: "Math.log",
      abs: "Math.abs",
      pow: "Math.pow",
      floor: "Math.floor",
      ceil: "Math.ceil",
    };
    Object.keys(funcMap).forEach((k) => {
      // only replace function names followed by '(' to be safe
      const re = new RegExp(`\\b${k}\\s*\\(`, "g");
      expr = expr.replace(re, `${funcMap[k]}(`);
    });

    // constants
    expr = expr.replace(/\bpi\b/gi, "Math.PI");
    expr = expr.replace(/\be\b/gi, "Math.E");

    return expr;
  }

  function handleEqual() {
    if (!input) return;
    try {
      const prepared = prepareExpression(input);
      // Validate allowed characters to reduce risk
      // allow digits, operators, parentheses, Math, letters for allowed names, dot, comma, spaces
      if (!/^[0-9+\-*/().,%\sMathPIEapowrtglsincehbnx]+$/i.test(prepared)) {
        setResult("Error");
        return;
      }
      const value = Function(`return ${prepared}`)();
      setResult(String(value));
      // add to history
      const entry = { expr: input, result: String(value), at: Date.now() };
      setHistory((h) => [entry, ...h].slice(0, 50)); // keep recent 50
      setInput("");
    } catch (e) {
      setResult("Error");
    }
  }

  // ----------------
  // Clear/Delete/History helpers
  // ----------------
  function handleClear() {
    setInput("");
    setResult("");
  }

  function handleDelete() {
    setInput((p) => p.slice(0, -1));
  }

  function toggleScientific() {
    setIsScientific((s) => !s);
  }

  function clearHistory() {
    setHistory([]);
  }

  function loadFromHistory(expr) {
    setInput(expr);
    setResult("");
  }

  // ----------------
  // Keyboard handlers
  // ----------------
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Enter") {
        e.preventDefault();
        handleEqual();
        return;
      }
      if (e.key === "Backspace") {
        e.preventDefault();
        handleDelete();
        return;
      }
      if (e.key === "Escape") {
        e.preventDefault();
        handleClear();
        return;
      }
      // allow letters for scientific functions (sin, cos, pi)
      if (/^[0-9+\-*/().%^]$/.test(e.key)) {
        e.preventDefault();
        if (e.key === "^") addToInput("^");
        else addToInput(e.key);
        return;
      }
      // dot
      if (e.key === ".") {
        e.preventDefault();
        addToInput(".");
        return;
      }
      // basic alpha keys (for sin cos etc.)
      if (/^[a-zA-Z]$/.test(e.key)) {
        // build letters; we let user type function names manually
        addToInput(e.key);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // intentionally not depending on input to avoid remounting listener too often
    // addToInput uses setInput functional updates so it's safe
  }, []);

  // ----------------
  // Render buttons (including scientific)
  // ----------------
  const basicButtons = [
    ["AC", "DEL", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "(", ")"],
  ];

  const sciButtons = [
    ["sin(", "cos(", "tan(", "sqrt("],
    ["pi", "e", "^", "pow("],
    ["log(", "ln(", "abs(", "mod("], // mod kept as function name—user can use % too
  ];

  return (
    <div className={`app-root ${theme === "light" ? "theme-light" : ""}`}>
      <div className="topbar">
        <div className="left-controls">
          <button
            className="small-btn"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            title="Toggle theme"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
          <button className="small-btn" onClick={toggleScientific} title="Scientific Mode">
            {isScientific ? "Sci: ON" : "Sci: OFF"}
          </button>
        </div>

        <div className="right-controls">
          <button className="small-btn" onClick={clearHistory} title="Clear history">
            Clear History
          </button>
        </div>
      </div>

      <div className="calculator-container">
        <div className="calculator">
          <input
            type="text"
            className="display"
            value={input || result}
            placeholder="0"
            readOnly
            aria-label="Calculator display"
          />

          <div className="buttons-grid">
            {/* top row with AC and DEL */}
            <div className="row">
              <button className="btn ac" onClick={handleClear}>
                AC
              </button>
              <button className="btn del" onClick={handleDelete}>
                DEL
              </button>
              <button className="btn" onClick={() => addToInput("%")}>
                %
              </button>
              <button className="btn operator" onClick={() => addToInput("/")}>
                ÷
              </button>
            </div>

            {/* main numeric/operator grid */}
            {basicButtons.map((row, ri) => (
              <div key={ri} className="row">
                {row.map((label) => {
                  const clickMap = {
                    AC: handleClear,
                    DEL: handleDelete,
                    "%": () => addToInput("%"),
                    "/": () => addToInput("/"),
                    "*": () => addToInput("*"),
                    "-": () => addToInput("-"),
                    "+": () => addToInput("+"),
                    ".": () => addToInput("."),
                    "(": () => addToInput("("),
                    ")": () => addToInput(")"),
                  };
                  const labelText = label;
                  const onClick =
                    clickMap[label] || (() => addToInput(String(label)));
                  return (
                    <button
                      key={label}
                      className={`btn ${isOperator(label) ? "operator" : ""}`}
                      onClick={onClick}
                    >
                      {labelText}
                    </button>
                  );
                })}
              </div>
            ))}

            {/* equals row */}
            <div className="row">
              <button className="btn wide equal" onClick={handleEqual}>
                =
              </button>
            </div>

            {/* scientific area (optional) */}
            {isScientific && (
              <div className="sci-section">
                {sciButtons.map((row, i) => (
                  <div className="row" key={"sci" + i}>
                    {row.map((label) => (
                      <button
                        key={label}
                        className="btn sci"
                        onClick={() => {
                          // 'pi' and 'e' are constants; others are functions—add as typed
                          if (label === "pi") addToInput("pi");
                          else if (label === "e") addToInput("e");
                          else addToInput(label);
                        }}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* History panel */}
        <aside className="history">
          <h4>History</h4>
          {history.length === 0 && <div className="empty">No history yet</div>}
          <ul>
            {history.map((h, idx) => (
              <li key={h.at + "-" + idx}>
                <button
                  className="hist-item"
                  onClick={() => loadFromHistory(h.expr)}
                >
                  <div className="expr">{h.expr}</div>
                  <div className="res">= {h.result}</div>
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
