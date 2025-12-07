import React from 'react'
import {useState, useEffect} from 'react'

const CustomTask1 = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((json) => {setData(json);

    localStorage.setItem("productsData", JSON.stringify(json));
    });
  }, [url])


  return [data];

};
export default CustomTask1;
