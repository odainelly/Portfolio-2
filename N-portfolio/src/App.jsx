import React from 'react'
import FloatingNav from './components/FloatingNav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'

const App = () => {
  return (
    <div className='container mx-auto'>
      <FloatingNav />
      <Hero />
      <About />
      <Projects />
      <Services />
    </div>
  )
}

export default App