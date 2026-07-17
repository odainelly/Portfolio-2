// components/Projects.jsx
import React from 'react'
import ProjectContainer from './ProjectContainer'
import { assets } from '../assets/assets'

const projectData = [
  { img: assets.project1, title: 'Cleveroad', description: 'A responsive marketing site built with modern web practices.', tags: ['React', 'Tailwind'] },
  { img: assets.project2, title: 'Game Dashboard', description: 'An interactive analytics dashboard for game statistics.', tags: ['React', 'Charts'] },
  { img: assets.project3, title: 'Task Manager', description: 'A drag-and-drop productivity and task tracking app.', tags: ['React', 'DnD'] },
  { img: assets.project4, title: 'CP Tool', description: 'A utility app for organizing coding practice sessions.', tags: ['JavaScript'] },
  { img: assets.project5, title: 'Analytics Dashboard', description: 'A clean dashboard for visualizing business KPIs.', tags: ['React', 'Recharts'] },
  { img: assets.project6, title: 'Weather App', description: 'A weather forecasting app with live API data.', tags: ['API', 'JavaScript'] },
]

const Projects = () => {
  return (
    <div id='projects' className='w-full px-6 sm:px-10 md:px-16 lg:px-22 py-16 md:py-22'>
      <div className='flex items-center flex-col justify-center gap-5'>

        <h3 className='text-gray-600 text-lg sm:text-xl'>Projects</h3>

        <div className='text-center'>
          <h1 className='font-bold text-black text-3xl sm:text-4xl'>Featured Work</h1>
          <hr className="border-gray-800 w-full mt-5" />
        </div>

        <div className='gap-8 sm:gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 w-full'>
          {projectData.map((project) => (
            <ProjectContainer key={project.title} {...project} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Projects