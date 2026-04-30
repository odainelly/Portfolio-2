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








// THIS SECTION IS  THE FLOATING NAV V1.11





// import React from "react";
// import { Link } from "react-scroll";

// const FloatingNav = ({active}) => {

//   const links =["hero", "about", "services", "projects", "footer", "contact"]

//   return (
//     <nav className="fixed top-4 left-0 w-full flex justify-center z-50">
//       <div className="bg-transparent/70 backdrop-blur-md px-6 py-3 rounded-xl shadow-md flex gap-6">
//         <div className="rounded-xl hover:bg-black p-2 hover:text-white">
//           <Link
//           to="hero"
//           smooth={true}
//           duration={500}
//           spy = {true}
//           activeClass="bg-black text-white p-2 rounded-xl "
//           className="  font-semibold cursor-pointer transition-colors"
//           >
//             Home
//           </Link>
//         </div>

//         <div className="rounded-xl hover:bg-black p-2 hover:text-white">
//           <Link
//           to="about"
//           smooth={true}
//           duration={500}
//           spy={true}
//           activeClass="bg-black text-white p-2 rounded-xl "
//           className=" font-semibold cursor-pointer transition-colors"
//           >
//             About
//           </Link>
//         </div>
        
//         <div className="rounded-xl hover:bg-black p-2 hover:text-white">
//           <Link
//           to="projects"
//           smooth={true}
//           duration={500}
//           spy = {true}
//           activeClass="bg-black text-white p-2 rounded-xl "
//           className=" font-semibold  cursor-pointer transition-colors"
//         >
//           Projects
//         </Link>
//         </div>

//         <div className="rounded-xl hover:bg-black p-2 hover:text-white">
//           <Link
//           to="services"
//           smooth={true}
//           duration={500}
//           spy = {true}
//           activeClass="bg-black text-white p-2 rounded-xl "
//           className=" font-semibold  cursor-pointer transition-colors"
//           >
//             Services
//           </Link>
//         </div>
       
//        <div className="rounded-xl hover:bg-black p-2 hover:text-white">
//             <Link
//           to="contact"
//           smooth={true}
//           duration={500}
//           spy = {true}
//           activeClass="bg-black text-white p-2 rounded-xl "
//           className=" font-semibold cursor-pointer transition-colors"
//           >
//             Contact
//           </Link>
//        </div>
        
        
//       </div>
//     </nav>
//   );
// };

// export default FloatingNav;










//  THIS SECTION IS THE FLOATING NAV V1.12




import React from "react";
import { Link } from "react-scroll";

const FloatingNav = () => {
  const linkBase =
    "px-3 py-1 rounded-xl font-semibold cursor-pointer transition-all duration-300 ease-out";

  return (
    <nav className="fixed top-4 left-0 w-full flex justify-center z-50">
      <div className="bg-white/30 dark:bg-black/30 backdrop-blur-md px-6 py-3 rounded-xl shadow-md flex gap-4 transition-all duration-300">

        <Link
          to="hero"
          smooth
          duration={500}
          spy
          offset={-80}
          activeClass="bg-black text-white scale-105 shadow-lg ring-1 ring-white/20"
          className={`${linkBase} hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black`}
        >
          Home
        </Link>

        <Link
          to="about"
          smooth
          duration={500}
          spy
          offset={-80}
          activeClass="bg-black text-white scale-105 shadow-lg ring-1 ring-white/20"
          className={`${linkBase} hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black`}
        >
          About
        </Link>

        <Link
          to="projects"
          smooth
          duration={500}
          spy
          offset={-80}
          activeClass="bg-black text-white scale-105 shadow-lg ring-1 ring-white/20"
          className={`${linkBase} hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black`}
        >
          Projects
        </Link>

        <Link
          to="skills"
          smooth
          duration={500}
          spy
          offset={-80}
          activeClass="bg-black text-white scale-105 shadow-lg ring-1 ring-white/20"
          className={`${linkBase} hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black`}
        >
          Skills
        </Link>

        <Link
          to="contact"
          smooth
          duration={500}
          spy
          offset={-80}
          activeClass="bg-black text-white scale-105 shadow-lg ring-1 ring-white/20"
          className={`${linkBase} hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black`}
        >
          Contact
        </Link>

      </div>
    </nav>
  );
};

export default FloatingNav;








