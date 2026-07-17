// components/Services.jsx
import React from 'react'
import ProjectCard from './ProjectContainer'
import { assets } from '../assets/assets'

const serviceData = [
  { img: assets.programming, title: 'Web Development', description: 'Building fast, scalable, and maintainable websites.' },
  { img: assets.web, title: 'UI/UX Design', description: 'Designing clean, user-centered digital interfaces.' },
  { img: assets.dataWork, title: 'Data Visualization', description: 'Turning raw data into clear, actionable dashboards.' },
  { img: assets.problemSolving, title: 'Problem Solving', description: 'Debugging and optimizing code for real-world use.' },
]

const Services = () => {
  return (
    <div id='services' className='w-full px-6 sm:px-10 md:px-16 lg:px-22 py-16 md:py-22'>
      <div className='flex items-center flex-col justify-center gap-5 text-center'>
        <h2 className='text-gray-600 text-lg sm:text-xl'>Services</h2>
        <div>
          <h1 className='text-black text-3xl sm:text-4xl font-bold'>Our Features and Services</h1>
          <hr className="border-gray-800 w-full mt-5" />
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
        {serviceData.map((service) => (
          <ProjectCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  )
}

export default Services