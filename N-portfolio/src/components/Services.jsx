import React from 'react'
import ProjectCard from './ProjectContainer'
import { assets } from '../assets/assets'

const Services = () => {
  return (
    <div id='services' className='container mx-auto w-full  p-22'>
        <div className='mx-auto flex items-center flex-col justify-center gap-5' >

            <h2 className='txt-gray-600 font-3xl'>Services</h2>

            <div>
                <h1 className='text-black text-4xl text-center font-bold'>Our Features and Services</h1>
                <hr className="border-gray-800 w-full  mt-5 pt-5 text-center" />
            </div>


        </div>        


        <div className='grid grid-cols-4 gap-4 mt-8'>
            <ProjectCard img={assets.programming} />
            <ProjectCard img={assets.web} />
            <ProjectCard img={assets.dataWork} />
            <ProjectCard img={assets.problemSolving} />
        </div>     
        
    </div>
  )
}

export default Services