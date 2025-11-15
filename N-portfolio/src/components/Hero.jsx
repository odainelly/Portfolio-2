import React from 'react'
import { assets } from '../assets/assets'
// import { ReactTyped } from 'react-typed'
import { IoBriefcaseSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { TypeAnimation } from 'react-type-animation'
import { FaArrowRight } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='container w-full min-h-screen flex gap-11 p-27'>
        <div className=' flex flex-col gap-11 justify-center items-start w-[50%]'>
            <p className='bg-[#80808037] transition-colors hover:bg-[#46464637] p-2 rounded-2xl '>
            <span >. </span>Available for freelance work
            </p>
            <h1 className=' font-bold text-6xl'>Hello, I'm <span className='p-2 text-white bg-black rounded'>Nelly</span> </h1>


            {/* this is react 19 and needed react-type-animation instead of react-typed */}


            {/* <ReactTyped 
            
            strings={["Frontend Developer", "UX/UI Dessigner", "Web Enthusiast"]}
            backSpeed={30}
            typeSpeed={20}
            
            
            /> */}


            <TypeAnimation
            className='font-medium text-3xl'
                sequence={[
                "Frontend Developer.",2000,"UX/UI Designer.", 2000,"Web Enthusiast.", // text to type
                2000,                     // wait 2 seconds
                "React Developer.",2000,                       // clear text
                ]}
                wrapper="span"
                speed={20}
                deletionSpeed={30}
                repeat={Infinity}
            />


            <p className=''> 
                I create beautiful, functional, and user-centered digital experiences. With 2+ years of experience in web Development, I bring ideas to life through clean code and thoughtful design
            </p>
            <div className='flex gap-7'>
                <div className='flex gap-1'>
                    <IoLocationSharp  size={21}/>
                    <p>Based in Ghana</p>
                </div>

                <div className="flex gap-1">
                    <IoBriefcaseSharp size={21} />
                    <p>Available now</p>  
                </div>
            </div>

            <div className='flex gap-6 items-start justify-center'>
                <button className='p-[10px] hover:text-gray-300 bg-black text-white rounded  flex items-center justify-center gap-1'><FaArrowRight className='hover:text-gray-300' />Hire me</button>
                <button className='p-2 border-gray-700 border-2 hover:bg-black hover:text-white text-gray-800  rounded flex justify-center items-center hover:transition-colors hover:duration-400 gap-1'><FaDownload className='hover:text-white' />Download Cv</button>
            </div>

            <hr class="border-gray-800 w-full" />

            <div className=' flex  gap-3 items-start '>
                <p className='inline'>Follow me:</p>
                {/* Insert react icons below here  */}
                
            </div>

            
        </div>

        <div className='mt-21 mx-auto'>
            <img className='max-w-111 rounded-2xl' src={assets.depressed} alt="" />
        </div>

    </div>
  )
}

export default Hero