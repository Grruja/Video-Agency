import React from 'react'
import Home from './components/home/Home'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'

function App() {
    return (
      <div>
        <Home />
        <Nav />
        <About />
        <Services />
        <Footer />
      </div>
    )
}

export default App