import React from 'react'
import ProjectContainer from './ProjectContainer'
import { assets } from '../assets/assets'

const Projects = () => {
  return (
    <div className='container mx-auto w-full min-h-screen p-27'>
        <div className='mx-auto flex items-center flex-col justify-center gap-5'>

            <h3 className='font-3xl text-gray-600 '>Projects</h3>

            <div >
                <h1 className='font-bold text-black text-4xl'>Featured Work</h1>
                <hr className="border-gray-800 w-full  mt-5 pt-5" />
            </div>


            <div className='  gap-11 grid grid-cols-3'>

                <ProjectContainer img={assets.project1}/>
                <ProjectContainer img={assets.project2}/>
                <ProjectContainer img={assets.project3}/>
                <ProjectContainer img={assets.project4}/>
                <ProjectContainer img={assets.project5}/>
                <ProjectContainer img={assets.project6}/>

            </div>

            
        </div>

    </div>
  )
}

export default Projects