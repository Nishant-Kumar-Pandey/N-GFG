import React from 'react'
import App from './App'
import Card from './Card'

const Skeleton = () => {
  return (
    <div>
        Loading......<App />
        <Card />
    </div>
  )
}

export default Skeleton