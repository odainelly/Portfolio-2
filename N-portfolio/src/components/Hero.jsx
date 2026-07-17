// components/Hero.jsx
import React from 'react'
import { assets } from '../assets/assets'
import { IoBriefcaseSharp, IoLocationSharp } from "react-icons/io5";
import { TypeAnimation } from 'react-type-animation'
import { FaArrowRight } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

const Hero = () => {
  return (
    <div id='hero' className='w-full min-h-screen flex flex-col-reverse md:flex-row gap-10 md:gap-11 px-6 sm:px-10 md:px-16 lg:px-22 pt-28 pb-16 md:pt-32'>

      <div className='flex flex-col gap-6 md:gap-8 justify-center items-start w-full md:w-1/2 text-center md:text-left mx-auto md:mx-0'>

        <p className='bg-[#80808037] transition-colors hover:bg-[#46464637] p-2 rounded-2xl text-sm mx-auto md:mx-0'>
          <span>. </span>Available for freelance work
        </p>

        <h1 className='font-bold text-4xl sm:text-5xl lg:text-6xl mx-auto md:mx-0'>
          Hello, I'm <span className='p-2 text-white bg-black rounded'>Nelly</span>
        </h1>

        <TypeAnimation
          className='font-medium text-xl sm:text-2xl lg:text-3xl mx-auto md:mx-0'
          sequence={[
            "Frontend Developer.", 2000,
            "UX/UI Designer.", 2000,
            "Web Enthusiast.", 2000,
            "React Developer.", 2000,
          ]}
          wrapper="span"
          speed={20}
          deletionSpeed={30}
          repeat={Infinity}
        />

        <p className='text-sm sm:text-base'>
          I create beautiful, functional, and user-centered digital experiences. With 2+ years of experience in web development, I bring ideas to life through clean code and thoughtful design.
        </p>

        <div className='flex flex-wrap justify-center md:justify-start gap-4 sm:gap-7'>
          <div className='flex gap-1 items-center'>
            <IoLocationSharp size={20} />
            <p className='text-sm sm:text-base'>Based in Ghana</p>
          </div>
          <div className="flex gap-1 items-center">
            <IoBriefcaseSharp size={20} />
            <p className='text-sm sm:text-base'>Available now</p>
          </div>
        </div>

        <div className='flex flex-wrap gap-4 items-center justify-center md:justify-start w-full'>
          <button className='px-4 py-2 hover:text-gray-300 bg-black text-white rounded flex items-center justify-center gap-2 text-sm sm:text-base'>
            <FaArrowRight />Hire me
          </button>
          <button className='px-4 py-2 border-gray-700 border-2 hover:bg-black hover:text-white text-gray-800 rounded flex justify-center items-center transition-colors duration-300 gap-2 text-sm sm:text-base'>
            <FaDownload />Download Cv
          </button>
        </div>

        <hr className="border-gray-800 w-full" />

        <div className='flex gap-3 items-center justify-center md:justify-start w-full'>
          <p>Follow me:</p>
        </div>
      </div>

      <div className='w-full md:w-1/2 flex justify-center items-center'>
        <img
          className='w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] rounded-2xl'
          src={assets.depressed}
          alt="Hero portrait"
        />
      </div>

    </div>
  )
}

export default Hero