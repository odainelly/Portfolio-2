import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div id='about' className='container mx-auto w-full min-h-screen p-27'>
        <div className='mx-auto flex gap-11'> 
          
          <div className='flex flex-col justify-start items-start w-[50%]'>
            <h2 className='font-medium text-gray-700 pt-11'>About Me</h2>
            <h2 className='text-black font-bold text-3xl pt-11'>Building Meaningful <br />Digital Experiences </h2>
            <hr class="border-gray-800 w-[55%] mt-5" />

            <p className='mt-7 text-sm'>
                I'm a creative front-end developer passionate about building modern and responsive web experiences.
                My journey began with a love for design and evolved into a deep curiosity for how the web works — combining
                logic with creativity to bring ideas to life.
            </p>

            <p className='mt-7 text-sm'>
              When I'm not coding, I enjoy learning new technologies, improving my projects,
              and exploring better ways to make the web faster and more engaging.
              I believe in continuous learning, attention to detail, and the power of clean, meaningful design
            </p>

            <h2 className='text-black mt-7 text-2xl font-bold'>What Drives Me</h2>

            <div className='flex justify-between gap-[32px] mt-7 items-start'>
              <div className='flex flex-col justify-center items-center  px-[20px] py-[5px] border-black border-2 rounded-xl'><h2>Languages</h2></div>
              <div className='flex flex-col justify-center items-center  px-[20px] py-[5px] border-black border-2 rounded-xl'><h2>Education</h2></div>
              <div className='flex flex-col justify-center items-center  px-[20px] py-[5px] border-black border-2 rounded-xl'><h2>Projects</h2></div>
            </div>

          </div>
          <div className='mt-21 border rounded-2xl border-gray-900 mx-auto'>
              <img className='max-w-111 rounded-2xl' src={assets.tired} alt="" />
          </div>
        </div>
        
    </div>
  )
}

export default About