import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Portfolio/>
      <Contact/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App