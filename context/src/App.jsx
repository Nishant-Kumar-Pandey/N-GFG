import React from 'react'
import Child1 from './Child1';
import { createContext } from 'react';

export const postman = createContext();

const App = () => {
  let data = {
    fname: "John",
    lname: "Doe",
    age: 25,
  };
  return (
    <postman.Provider value={data}>
       <Child1 />
    </postman.Provider>
   
  );
};

export default App;
