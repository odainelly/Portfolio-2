// components/About.jsx
import React from 'react'
import { assets } from '../assets/assets'
import Card from './Card'

const About = () => {
  return (
    <div id='about' className='w-full px-6 sm:px-10 md:px-16 lg:px-22 py-16 md:py-22'>
      <div className='flex flex-col md:flex-row gap-10 md:gap-11 items-center md:items-start'>

        <div className='flex flex-col justify-start items-start w-full md:w-1/2 order-2 md:order-1'>
          <h2 className='font-medium text-gray-700'>About Me</h2>
          <h2 className='text-black font-bold text-2xl sm:text-3xl pt-4'>
            Building Meaningful <br className="hidden sm:block" />Digital Experiences
          </h2>
          <hr className="border-gray-800 w-2/3 sm:w-[55%] mt-5" />

          <p className='mt-6 text-sm'>
            I'm a creative front-end developer passionate about building modern and responsive web experiences.
            My journey began with a love for design and evolved into a deep curiosity for how the web works — combining
            logic with creativity to bring ideas to life.
          </p>

          <p className='mt-6 text-sm'>
            When I'm not coding, I enjoy learning new technologies, improving my projects,
            and exploring better ways to make the web faster and more engaging.
            I believe in continuous learning, attention to detail, and the power of clean, meaningful design.
          </p>

          <h2 className='text-black mt-6 text-xl sm:text-2xl font-bold'>What Drives Me</h2>

          <div className='flex flex-wrap justify-center sm:justify-start gap-6 mt-6 items-start w-full'>
            <Card title={`Languages`} description={`HTML, CSS, ReactJS`} />
            <Card title={`Education`} description={`Bsc. Computer Science`} />
            <Card title={`Projects`} description={`Scalable frontends`} />
          </div>
        </div>

        <div className='order-1 md:order-2 border rounded-2xl border-gray-900 mx-auto flex-shrink-0'>
          <img
            className='w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] rounded-2xl'
            src={assets.tired}
            alt="About portrait"
          />
        </div>
      </div>
    </div>
  )
}

export default About