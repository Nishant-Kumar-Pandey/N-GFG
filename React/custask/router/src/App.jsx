import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Nish from './Components/Nish.jsx'
// import Link from 'react-router-dom/link'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about/nish" element={<Nish/>} />
        {/* <Route path="/Contact" element={<Contact/>} /> */}
      </Routes>
    </>
  )
}

export default App