// components/Contact.jsx
import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('Please fill in all fields.')
      return
    }
    // Hook this up to your backend / email service (e.g. EmailJS, Formspree)
    console.log('Form submitted:', form)
    setStatus('Thanks! Your message has been sent.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div id='contact' className='w-full px-6 sm:px-10 md:px-16 lg:px-22 py-16 md:py-22 text-center'>
      <h3 className='text-gray-600 text-lg sm:text-xl'>Contact</h3>
      <h1 className='text-black text-3xl sm:text-4xl font-bold mt-2'>Get In Touch With Me</h1>
      <hr className="border-gray-800 w-full mt-5 mb-10" />

      <div className='flex flex-col md:flex-row gap-10 text-left'>
        <div className='md:w-1/3'>
          <p className='text-sm sm:text-base'>
            I'm always open to discuss exciting projects and new opportunities. Let's collaborate!
          </p>
        </div>

        <form onSubmit={handleSubmit} className='md:w-2/3 flex flex-col gap-4'>
          <div>
            <label htmlFor="name" className='block text-sm font-medium mb-1'>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className='w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black'
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className='block text-sm font-medium mb-1'>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className='w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black'
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className='block text-sm font-medium mb-1'>Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className='w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black resize-none'
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className='bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors w-full sm:w-fit sm:px-10'
          >
            Send Message
          </button>

          {status && <p className='text-sm mt-2'>{status}</p>}
        </form>
      </div>
    </div>
  )
}

export default Contact