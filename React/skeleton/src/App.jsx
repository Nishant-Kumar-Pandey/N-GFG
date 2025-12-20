import React from 'react'
import Card from './Card'
import Skeleton from './Skeleton'
import {useState, useEffect} from 'react'

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
    }, []);
  return <div>{loading ? <Skeleton /> : <Card />}</div>;
  
 
};

export default App;