import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  function sum(){
    console.log("sum function called");
    let sum = 0;
    for(let i=0; i<1000000000; i++){
      sum += i;
    }
    return sum;
  }

  const res = useMemo(() => sum(), []);

  return (
    <div>
      <p>value of sum: {res}</p>
      <p>count:{count}</p>
      <button onClick={()=> setCount(count+1)}>increase</button>
    </div>
  )
}

export default App;
