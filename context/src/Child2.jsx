import React from 'react'
import { useContext } from 'react';
import { postman } from './App';

export const Child2 = () => {
    const data = useContext(postman);
    console.log(data);
  return (
    <div>
      {data.fname}
      {data.lname}
    </div>
  )
}

export default Child2;
