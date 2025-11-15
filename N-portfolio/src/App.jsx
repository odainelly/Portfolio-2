import React from 'react'
import FloatingNav from './components/FloatingNav'
import Hero from './components/Hero'
import About from './components/About'

const App = () => {
  return (
    <div className='container mx-auto'>
      <FloatingNav />
      <Hero />
      <About />
    </div>
  )
}

export default App