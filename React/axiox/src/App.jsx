import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get("https://dummyjson.com/products");
        setData(data);
        console.log(response.data);
      }catch(err){
        console.log(err);
      }
    }
  })
  return (
    <div>App</div>
  )
}

export default App;