import React from 'react'
import FloatingNav from './components/FloatingNav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>

      <div className='container mx-auto'>
      <FloatingNav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Services />
      <Contact />
      </div>

    <Footer />

    </div>
    
  )
}

export default App