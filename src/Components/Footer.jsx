import React from "react";

// Left social icon
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="bg-[#1f2f6d] -mb-2 relative z-3  ">
      {/* Horizontal Line */}

      <div className=" pl-10 sm:pl-16 md:pl-6 flex items-center py-3  w-full max-w-3xl mx-auto ">
        <h1 className="text-white leading-12 text-[18px] sm:text-xl md:text-2xl  font-['Spartan'] ">
          Syed Min Khan
        </h1>
        <ul className=" mx-auto flex items-center justify-center gap-4 sm:gap-5 md:gap-9 text-white ">
          <li>
            <a href="mailto:syedmin84@gmail.com" target="_blank">
              {" "}
              <MdOutlineMail className="w-[18px] md:w-5 h-auto hover:scale-125 ease-in-out duration-100 hover:text-white" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/syedmin.khan.77" target="_blank">
              {" "}
              <FaFacebook className="w-[18px] md:w-5 h-auto hover:scale-125 ease-in-out duration-100 hover:text-white" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Syedmin77" target="_blank">
              {" "}
              <FaXTwitter className="w-[18px] md:w-5 h-auto hover:scale-125 ease-in-out duration-100 hover:text-white" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/syed_meen/" target="_blank">
              {" "}
              <FaInstagram className="w-[18px] md:w-5 h-auto hover:scale-125 ease-in-out duration-100 hover:text-white" />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/syedmin84/" target="_blank">
              {" "}
              <FaLinkedinIn className="w-[18px] md:w-5 h-auto hover:scale-125 ease-in-out duration-100 hover:text-white" />
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full h-[1px] bg-[#a8a494]"></div>
      <div className="flex w-full  ">
        <p className=" text-white pl-2 sm:pl-8 lg:pl-16 py-4  font-poppins copywrite text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
          © 2025 Syed Min Khan. All rights reserved
        </p>
        <a
          href="/#"
          className=" text-[15px] sm:text-[18px] z-1 flex items-center justify-between cursor-pointer  text-white font-medium px-2 sm:px-3 w-[80px] h-[28px] sm:w-[100px]  sm:h-[35px]  rounded-sm   hover:scale-110 transition duration-300 absolute right-8 sm:right-16 md:right-24 lg:right-30 bottom-3 border-[1px] border-[#a8a494] "
        >
          <FaArrowUpLong className="h-[10px] w-3 sm:w-4 sm:h-3 text-white" />
          To TOP
        </a>
      </div>
    </footer>
  );
}
