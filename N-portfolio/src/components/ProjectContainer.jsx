// import React from "react";

// const ProjectContainer = ({ img, title, description }) => {
//   return (
//     <div
//       className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 
//                  flex flex-col items-center text-center
//                  transition-all duration-300 
//                  hover:-translate-y-2 hover:shadow-xl
//                  hover:border-orange-400 border border-transparent"
//     >
//       <img
//         src={img}
//         alt={title}
//         className="w-28 h-28 object-contain mb-5"
//       />

//       <h2 className="text-xl font-semibold text-gray-800 mb-2">
//         {title}
//       </h2>

//       <p className="text-gray-600 text-sm leading-relaxed">
//         {description}
//       </p>
//     </div>
//   );
// };

// export default ProjectContainer;





import React from "react";

const ProjectCard = ({ img, title, description, tags = [], github, demo }) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md 
                 transition-all duration-300 hover:-translate-y-2  hover:shadow-2xl"
    >
      {/* Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover rounded-xl mb-5"
      />

      {/* Title */}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">{description}</p>

     
      
      
    </div>
  );
};

export default ProjectCard;
