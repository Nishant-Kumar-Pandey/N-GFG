import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'

export const App = () => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  // let a = 0;
  const handleIncrement = () => {
    setCount(count + 1);
    // a = a+1;
    // ref.current = ref.current +1;
    // console.log(ref.current);
  }
 
//  useEffect(() => {
//     // function api(){
//     //   fetch('https://jsonplaceholder.typicode.com/todos/1')
//     //   .then(response => response.json())
//     //   .then(json => console.log(json))
//     // }
    
//     // api();

//     ref.current.style.color = "red";
//     ref.current.style.backgroundColor = "yellow";
//  });

useLayoutEffect(() => {
  ref.current.style.color = "red";
  ref.current.style.backgroundColor = "yellow";

})

  return (
    <div>
      {/* <p>dummy text</p> */}
    <p ref = {ref}>Vlue of count is: {count}</p>
    <button onClick={handleIncrement} ref={ref}>Increment</button>
    </div>
  )
}

export default App;