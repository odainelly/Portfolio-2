import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='container text-center'>
      contact
      <div className='flex flex-col'>
        <div>
          GET IN TOUCH WITH ME  
        </div>
        
        <div className='flex '>

          <div>
            I'm always open to discuss exciting projects and new opportunities. Let's collaborate!
          </div>

          <form action="post">
            <label htmlFor="name"></label>
            <textarea name="name" id="name" className='w-2/12'></textarea>
          </form>


        </div>
      </div>
    </div>
  )
}

export default Contact