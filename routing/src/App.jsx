import React from 'react'
import Dashboard from './Dashboard'


const App = () => {

  let isLoggedIn = true;
  return (
    <div className='text-3xl'>{isLoggedIn ? <Dashboard /> : "please login first"}</div>
  )
}

export default App;