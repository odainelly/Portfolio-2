// import React from 'react'
// import { Link } from 'react-scroll'

// const FloatingNav = () => {
//   return (
//     <div>
//         <div className='flex  justify-center items-center fixed top-0 left-0 w-full bg-white/30 z-9999 backdrop-blur-md '>
//             <ul className='flex justify-center items-center'>
//                 <li><Link to='home'>Home</Link></li>
//                 <li><Link to='about'>About</Link></li>
//                 <li><Link to='skills'>Skills</Link></li>
//                 <li><Link to='projects'>Projects</Link></li>
//                 <li><Link to='contact'>Contact</Link></li>
//             </ul>
//         </div>
//     </div>
//   )
// }

// export default FloatingNav



import React from "react";
import { Link } from "react-scroll";

const FloatingNav = () => {
  return (
    <nav className="fixed top-4 left-0 w-full flex justify-center z-50">
      <div className="bg-transparent/70 backdrop-blur-md px-6 py-3 rounded-xl shadow-md flex gap-6">
        <div className="rounded-xl hover:bg-black p-2 hover:text-white">
          <Link
          to="home"
          smooth={true}
          duration={500}
          className="  font-semibold cursor-pointer transition-colors"
          >
            Home
          </Link>
        </div>

        <div className="rounded-xl hover:bg-black p-2 hover:text-white">
          <Link
          to="about"
          smooth={true}
          duration={500}
          className=" font-semibold cursor-pointer transition-colors"
          >
            About
          </Link>
        </div>
        
        <div className="rounded-xl hover:bg-black p-2 hover:text-white">
             <Link
          to="skills"
          smooth={true}
          duration={500}
          className=" font-semibold  cursor-pointer transition-colors"
        >
          Skills
        </Link>
        </div>

        <div className="rounded-xl hover:bg-black p-2 hover:text-white">
          <Link
          to="projects"
          smooth={true}
          duration={500}
          className=" font-semibold  cursor-pointer transition-colors"
          >
            Projects
          </Link>
        </div>
       
       <div className="rounded-xl hover:bg-black p-2 hover:text-white">
            <Link
          to="contact"
          smooth={true}
          duration={500}
          className=" font-semibold cursor-pointer transition-colors"
          >
            Contact
          </Link>
       </div>
        
        
      </div>
    </nav>
  );
};

export default FloatingNav;
