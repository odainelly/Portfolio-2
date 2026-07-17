// App.jsx
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
    <div className='min-h-screen flex flex-col'>
      <FloatingNav />
      <main className='flex-1 w-full max-w-[1440px] mx-auto'>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App