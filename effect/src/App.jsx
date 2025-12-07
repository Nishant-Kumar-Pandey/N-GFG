import React, { useEffect, useState } from 'react'

export const App = () => {
  const [count, setCount] = useState(0);
 useEffect(() => {
    console.log("Component mounted");
    return function(){
      console.log("Component unmounted");
    
    };
 }, [count]);
  return (
    <div>
    <p>Vlue of count is: {count}</p>
    <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  )
}

export default App;