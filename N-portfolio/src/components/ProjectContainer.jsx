// components/ProjectContainer.jsx
import React from "react";

const ProjectContainer = ({ img, title, description, tags = [], github, demo }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6 w-full max-w-md mx-auto
                 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <img
        src={img}
        alt={title || "Project preview"}
        className="w-full h-40 sm:h-48 object-cover rounded-xl mb-4"
      />

      <h2 className="text-lg sm:text-xl font-semibold mb-2">{title}</h2>

      <p className="text-gray-600 text-sm mb-4">{description}</p>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-3 text-sm font-medium">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-600">
            GitHub
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-600">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectContainer;