import React from 'react'
import FloatingNav from './components/FloatingNav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='container mx-auto'>
      <FloatingNav />
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default App