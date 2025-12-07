import React, { useEffect } from 'react'
import Child from './Child'
import { useState } from 'react'
import Student from './Student'
const App = () => {

const [count, setCount] = useState(0);

// function increment(){
//   setCount(count + 1);
//   console.log(count);
// }

useEffect(() => {
  console.log("mounted");
  return function () {
    console.log("unmounted");
  };
}, [count]);

  return (
    <div>
      <p>value of a is: {count}</p>
      <button onClick={() => setCount(count +1)}>Click</button>
    </div>
  )
}

// const App = () => {
//   const [name, setName] = useState("");
//   return (
//     <div>
//       <Child name={name} setName={setName} />
//       <p>value coming from child: {name} </p>
//     </div>
//   );
// };

export default App
 