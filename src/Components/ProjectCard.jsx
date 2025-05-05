import React from 'react';

const ProjectCard = ({ number, title, description, imageUrl, liveLink, sourceCodeLink, technologies }) => {
  return (
    <div className="border-[1px] border-solid  w-full max-w-4xl mx-auto bg-[#1f2f6d] rounded-xl m-4 p-6 hover:scale-[102%] ease-in-out duration-300">
      {/* Project Number */}
      <div className="text-sm font-bold bg-gradient-to-l from-[#0665e2] to-[#1458b1] bg-clip-text text-transparent mb-2">
        {number}
      </div>

      {/* Project Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
        {title}
      </h2>

      {/* Project Image */}
      <div className="bg-gray-200 h-64 rounded-lg mb-6 flex items-center justify-center">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-lg" />
      </div>

      {/* Project Description */}
      <p className="text-white mb-6 leading-relaxed">
        {description}
      </p>

      {/* Visit Now Buttons */}
      <div className="w-full flex items-center gap-4 sm:gap-6 md:gap-8">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn hover:scale-105 text-[15px] sm:text-[18px] p-[6px_14px] sm:p-[10px_20px]"
        >
          <span>Live Preview</span>
        </a>

        <a
          href={sourceCodeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn hover:scale-105 text-[15px] sm:text-[18px] p-[6px_14px] sm:p-[10px_20px]"
        >
          <span>Source Code</span>
        </a>
      </div>

      {/* Technology Tags */}
      <div className="flex flex-wrap gap-2 pt-2 md:pt-8">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-4 py-1 bg-[#0c1838] text-sm font-medium rounded-full text-white border-s3 bg-s2 transition-borderColor duration-500"
          >
            #{tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
