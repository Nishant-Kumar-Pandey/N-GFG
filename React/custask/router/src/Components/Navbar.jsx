import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClasses = ({ isActive }) =>
    `text-sm font-medium transition-all duration-300 relative group flex flex-col justify-center items-center ${isActive ? "text-indigo-600" : "text-slate-500 hover:text-slate-900"
    }`;

  const underline = (isActive) => (
    <span className={`h-0.5 bg-indigo-600 rounded-full transition-all duration-300 absolute -bottom-1 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity tracking-tight">
          MyApp.
        </Link>
        <ul className="flex space-x-8 items-center">
          <li>
            <NavLink to="/" className={linkClasses}>
              {({ isActive }) => (
                <>
                  Home
                  {underline(isActive)}
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClasses}>
              {({ isActive }) => (
                <>
                  About
                  {underline(isActive)}
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClasses}>
              {({ isActive }) => (
                <>
                  Contact
                  {underline(isActive)}
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about/nish" className={linkClasses}>
              {({ isActive }) => (
                <>
                  Nish
                  {underline(isActive)}
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;