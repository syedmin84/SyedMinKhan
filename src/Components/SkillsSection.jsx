import React from 'react'
// Skill Icon
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandBootstrap } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { FaWordpress } from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills-section" className="w-full max-w-[1130px] mx-auto ">
    <div className=" lg:py-12 ">
      <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center pb-6 md:pb-8 relative z-10">
        Skills
      </h2>
      <p className="text-[#ffffff9c] text-center  text-sm md:text-base lg:text-lg max-w-2xl mx-auto pb-4 relative z-10">
        Tools and technologies I use to create and optimize web
        applications.
      </p>
    </div>
    <div className="relative" id="skills-container">
      <div className="hidden lg:block bg-[#050817] absolute z-20 left-[calc(50%-3px)] top-[-4px] border-2 border-solid border-[#33477b] rounded-full  w-[10px] h-[10px] "></div>
      <div className="hidden lg:block bg-[#050817] absolute z-20 left-[calc(50%-3px)] bottom-[-4px] border-2 border-solid border-[#33477b] rounded-full w-[10px] h-[10px] "></div>
      <div className="bg-[#080d27] grid grid-cols-3 sm:grid-cols-4 gap-3 lg:grid-cols-6 sm:gap-y-6 sm:gap-x-8 xl:gap-x-14 text-center lg:shadow-2xl  p-[60px_40px]  relative z-10 rounded-[50px] lg:border-2 border-solid border-[#33477b] ">
        <div className="bg-[#1f2f6d] pt-3 pb-2 sm:py-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-xl hover:scale-105 transform transition-transform duration-300 ease-in-out">
          <FaHtml5 className="mb-2 sm:mb-4 w-[35px] sm:w[50px] lg:w-[55px] h-auto text-[#ff431b]" />
          <p className="text-xs sm:text-sm md:text-base font-semibold text-white">
            HTML5
          </p>
        </div>
        <div className="bg-[#1f2f6d] pt-3 pb-2 sm:py-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-xl hover:scale-105 transform transition-transform duration-300 ease-in-out">
          <SiCss3 className="mb-2 sm:mb-4 w-[35px] sm:w[50px] lg:w-[55px] h-auto text-[#2297f7]" />
          <p className="text-xs sm:text-sm md:text-base font-semibold text-white">
            CSS3
          </p>
        </div>
        <div className="bg-[#1f2f6d] pt-3 pb-2 sm:py-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-xl hover:scale-105 transform transition-transform duration-300 ease-in-out">
          <IoLogoJavascript className="mb-2 sm:mb-4 w-[35px] sm:w[50px] lg:w-[55px] h-auto text-[#ffdf00]" />
          <p className="text-xs sm:text-sm md:text-base font-semibold text-white">
            JavaScript
          </p>
        </div>

        <div className="bg-[#1f2f6d] pt-3 pb-2 sm:py-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-xl hover:scale-105 transform transition-transform duration-300 ease-in-out">
          <FaReact className="mb-2 sm:mb-4 w-[35px] sm:w[50px] lg:w-[55px] h-auto text-[#61DAFB]" />
          <p className="text-xs sm:text-sm md:text-base font-semibold text-white">
            ReactJS
          </p>
        </div>
        <div className="bg-[#1f2f6d] pt-3 pb-2 sm:py-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-xl hover:scale-105 transform transition-transform duration-300 ease-in-out">
          <RiNextjsFill className="mb-2 sm:mb-4 w-[35px] sm:w[50px] lg:w-[55px] h-auto text-[#000000]" />
          <p className="text-xs sm:text-sm md:text-base font-semibold text-white">
            NextJS
          </p>
        </div>
        <div className="bg-[#1f2f6d] pt-3 pb-2 sm:py-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-xl hover:scale-105 transform transition-transform duration-300 ease-in-out">
          <FaNodeJs className="mb-2 sm:mb-4 w-[35px] sm:w[50px] lg:w-[55px] h-auto text-[#3c873a]" />
          <p className="text-xs sm:text-sm md:text-base font-semibold text-white">
            NodeJS
          </p>
        </div>
        <div className="bg-[#1f2f6d] pt-3 pb-2 sm:py-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-xl hover:scale-105 transform transition-transform duration-300 ease-in-out">
          <FaGitAlt className="mb-2 sm:mb-4 w-[35px] sm:w[50px] lg:w-[55px] h-auto text-[#f34f29]" />
          <p className="text-xs sm:text-sm md:text-base font-semibold text-white">
            Git
          </p>
        </div>
        <div className="bg-[#1f2f6d] pt-3 pb-2 sm:py-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-xl hover:scale-105 transform transition-transform duration-300 ease-in-out">
          <FaGithub className="mb-2 sm:mb-4 w-[35px] sm:w[50px] lg:w-[55px] h-auto text-[#000000]" />
          <p className="text-xs sm:text-sm md:text-base font-semibold text-white">
            GitHub
          </p>
        </div>
        <div className="bg-[#1f2f6d] pt-3 pb-2 sm:py-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-xl hover:scale-105 transform transition-transform duration-300 ease-in-out">
          <TbBrandBootstrap className="mb-2 sm:mb-4 w-[35px] sm:w[50px] lg:w-[55px] h-auto text-[#6f42c1]" />
          <p className="text-xs sm:text-sm md:text-base font-semibold text-white">
            Bootstrap
          </p>
        </div>
        <div className="bg-[#1f2f6d] pt-3 pb-2 sm:py-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-xl hover:scale-105 transform transition-transform duration-300 ease-in-out">
          <RiTailwindCssFill className="mb-2 sm:mb-4 w-[35px] sm:w[50px] lg:w-[55px] h-auto text-[#38bdf8]" />
          <p className="text-xs sm:text-sm md:text-base font-semibold text-white">
            Tailwind CSS
          </p>
        </div>

        <div className="bg-[#1f2f6d] pt-3 pb-2 sm:py-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-xl hover:scale-105 transform transition-transform duration-300 ease-in-out">
          <IoLogoFigma className="mb-2 sm:mb-4 w-[35px] sm:w[50px] lg:w-[55px] h-auto text-[#f24e1e]" />
          <p className="text-xs sm:text-sm md:text-base font-semibold text-white">
            Figma
          </p>
        </div>
        <div className="bg-[#1f2f6d] pt-3 pb-2 sm:py-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-xl hover:scale-105 transform transition-transform duration-300 ease-in-out">
          <FaWordpress className="mb-2 sm:mb-4 w-[35px] sm:w[50px] lg:w-[55px] h-auto text-[#15adf2]" />

          <p className="text-xs sm:text-sm md:text-base font-semibold text-white">
            Wordpress
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}
