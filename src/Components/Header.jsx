import React, { useState } from "react";
import { BsTelephoneForward } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// Left social icon
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
//svgr
import Logo from "../assets/LogoS.svg?react";
import HeroImgWhite from "../assets/LongSwhiteRt.svg?react";
// import HeroImgGreen from "../assets/LongSGreenRt.svg?react";
import Arrow from "../assets/right-arrow.svg?react";
import MetterAnimation from "./MetterAnimation";
import DialogBox from "./DialogBox";
import {
  ChakraProvider,
  Button,
  Popover,
  PopoverTrigger,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Image,
  extendTheme,
  ColorModeScript,
} from "@chakra-ui/react";
import resume from "../assets/resume.png";

// Configure dark mode by default
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleDialog = () => {
    setIsActive(!isActive);
  };
  return (
    <header className="h-screen flex flex-col justify-between">
      <section
        id="Top-Bar"
        className="z-10 flex items-center justify-between w-full px-8 mt-4 max-w-screen-xl mx-auto "
      >
        <span
          id="Logo"
          className=" w-[62px] md:w-[70px] h-auto text-[#f4f7f8] hover:text-white"
        >
         <a href="/"> <Logo /></a> 
        </span>

        <div className="text-white flex gap-8">
          <a href="tel:+923430222480">
            <BsTelephoneForward className="w-[20px] h-[20px] md:h-7 md:w-7 hover:scale-125 ease-in-out duration-100" />
          </a>
          <a href="https://wa.me/923430222480" target="_blank">
            <FaWhatsapp className="w-[20px] h-[20px] md:h-7 md:w-7 hover:scale-125 ease-in-out duration-100" />
          </a>
          <a href="https://github.com/syedmin84" target="_blank">
            <FaGithub className="w-[20px] h-[20px] md:h-7 md:w-7 hover:scale-125 ease-in-out duration-100" />
          </a>
        </div>
      </section>
      <MetterAnimation />
      {/* End of Top-Bar */}
      <section className="Hero-Section md:mt-8 lg:mt-12">
        <div className="pointer-events-none text-white w-full max-w-screen-xl mx-auto px:4 md:px-8 invisible md:visible">
          <div className="relative ml-16 -top-16">
            <h1 className="text-xl  font-['Spartan'] inline-block  font-bold">
              Welcome to my
            </h1>
            <h2 className="text-xl  font-['Spartan'] text-white mt-3">
              Portfolio!
            </h2>
          </div>
        </div>
        <div className="flex items-center text-white relative">
          <div className="w-full max-w-screen-xl mx-auto px:4 md:px-8">
            <HeroImgWhite className="mt-12 lg:mt-2 pointer-events-none absolute top-0 -translate-y-[100px] sm:-translate-y-[120px]  md:-translate-y-1/2 -translate-x-[130px] sm:-translate-x-1/2 xl:-translate-x-1/3 left-1/2  w-[250px] h-auto sm:w-[300px] md:w-[320px] lg:w-[410px] xl:w-[430px] z-20" />

            <div className="relative ml-16 mt-8  md:-mt-4 z-20 pointer-events-none">
              <h1 className="text-white  leading-16 text-4xl md:text-5xl lg:text-[64px] font-['Spartan'] mr-16">
                Syed Min Khan
              </h1>
              <p className="font-['Merriweather'] italic my-4 lg:my-8">
                MERN Stack Developer
              </p>
              <div className=" flex justify-between gap-4  max-w-6xl mt-20 sm:mt-16 md:mt-10">
                <button
                  onClick={toggleDialog}
                  className=" pointer-events-auto cursor-pointer  text[16px] lg:text-[18px] py-[6px] px-3 sm:px-4 relative rounded  font-bold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] hover:from-[#1f2667e6] hover:to-[#1595b6] hover:scale-105 ease-in-out group duration-100 font-['Nunito']"
                >
                  About Me
                  <Arrow className="hidden sm:block absolute top-1/2 -translate-y-1/2 -right-7 group-hover:-right-9 ease-in-out duration-100" />
                </button>

                <ChakraProvider
                  theme={theme}
                  resetCSS={false}
                  resetScope=".chakra-reset"
                >
                  <div className="chakra-reset">
                    <ColorModeScript
                      initialColorMode={theme.config.initialColorMode}
                    />
                    <Popover placement="left" isLazy>
                      <PopoverTrigger>
                        <Button
                          style={{ fontWeight: "bold !important" }}
                          className=" pointer-events-auto cursor-pointer rounded relative hover:scale-105 ease-in-out duration-200 group font-['Nunito'] mr-20 lg:mr-24"
                          bgGradient="linear(to-l, #1595b6, #1f2667e6)"
                          _hover={{
                            bgGradient: "linear(to-r, #1595b6, #1f2667e6)",
                          }}
                          color={"white"}
                          fontWeight="bold"
                          size={"lg"}
                          pl={2}
                          pr={4}
                          textAlign={"center"}
                          leftIcon={
                            <Arrow className="hidden sm:block rotate-180 absolute top-1/2 -translate-y-1/2 -left-7 group-hover:-left-9 ease-in-out duration-200" />
                          }
                        >
                          My Resume
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        focus={{ boxShadow: "dark-lg" }}
                        mr={{ base: -20, sm: -20, md: 3 }}
                        mb={10}
                        bg="#1f2f6d" // Dark background
                        color="#e5e0e0" // White text
                      >
                        <PopoverCloseButton className="pointer-events-auto cursor-pointer" />
                        <PopoverHeader fontWeight="bold">
                          My Resume(Click on image to open)
                        </PopoverHeader>
                        <PopoverBody>
                          <Image
                            className="pointer-events-auto cursor-pointer"
                            alt={"Hero Image"}
                            fit={"cover"}
                            align={"center"}
                            w={"100%"}
                            h={"100%"}
                            src={resume}
                            onClick={() => {
                              window.open(
                                "https://drive.google.com/file/d/1D2gsimV47zEsubjK2urHGWpY_h-iLyBB/view",
                                "_blank"
                              );
                            }}
                          />
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </div>
                </ChakraProvider>

              </div>
            </div>
          </div>
          <DialogBox isActive={isActive} toggleDialog={toggleDialog} />
          <ul className="ml-auto text-[#b0b2b3] flex flex-col gap-6  absolute right-8 bottom-1 ">
            <li>
              <a href="https://www.linkedin.com/in/syedmin84/" target="_blank">
                {" "}
                <FaLinkedinIn className="w-[22px] h-[22px] md:w-8 md:h-8 lg:w-9 lg:h-9 hover:scale-125 ease-in-out duration-100 hover:text-white" />
              </a>
            </li>
            <li>
              <a href="mailto:syedmin84@gmail.com" target="_blank">
                {" "}
                <MdOutlineMail className="  w-[22px] h-[22px] md:w-8 md:h-8 lg:w-9 lg:h-9 hover:scale-125 ease-in-out duration-100 hover:text-white" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/syedmin.khan.77"
                target="_blank"
              >
                {" "}
                <FaFacebook className="w-[22px] h-[22px] md:w-8 md:h-8 lg:w-9 lg:h-9 hover:scale-125 ease-in-out duration-100 hover:text-white" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Syedmin77" target="_blank">
                {" "}
                <FaXTwitter className="w-[22px] h-[22px] md:w-8 md:h-8 lg:w-9 lg:h-9 hover:scale-125 ease-in-out duration-100 hover:text-white" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/syed_meen/" target="_blank">
                {" "}
                <FaInstagram className="w-[22px] h-[22px] md:w-8 md:h-8 lg:w-9 lg:h-9 hover:scale-125 ease-in-out duration-100 hover:text-white" />
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* end of Hero-Section */}
      <section className="flex items-center justify-center">
        <div className="group relative after:content-[''] after:absolute after:w-[1px] after:h-12 after:bg-[#fff] after:left-1/2 after:-translate-x-1/2 after:top-[64px] after:transition-all after:duration-400 hover:after:h-2 after:ml-[1px] sm:after:ml-[1px]">
          <a
            href="#skills-section"
            className="block cursor-pointer text-white bg-[#4595eb] text-[14px] sm:text-[16px] py-[10px] px-2 sm:px-4 relative rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] hover:from-[#1f2667e6] hover:to-[#1595b6] hover:scale-105 ease-in-out duration-300 font-['Nunito'] mb-19 sm:mb-18"
          >
            Skills Highlights
            <Arrow className="hidden group-hover:block transition-all delay-200 duration-400 w-[32px] rotate-90 absolute left-1/2 -translate-x-1/2 top-8 group-hover:top-10 ease-in-out" />
          </a>
        </div>
      </section>
      {/* contact wiht us section */}
      <a
        href="#contact-us"
        className=" absolute bottom-6 right-6 flex items-center space-x-2 z-50 cursor-pointer"
      >
        {/* <!-- Bubble --> */}
        <button className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-xl shadow-md relative mt-2 cursor-pointer">
          Hire Me
          <span className="absolute left-1/2 -bottom-1  transform  w-3 h-3 bg-gray-100 rotate-45  "></span>
        </button>

        {/* <!-- Profile Image --> */}
        <img
          src="/syed.png"
          alt="Profile"
          className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border-2 border-sky-500 object-cover"
        />
      </a>
    </header>
  );
}
