import React from "react";
import FaqLogo from "../assets/faq-logo.svg?react";
export default function MainLine() {
  return (
    <div className="relative top-80 hidden lg:block">
      <div className="flex gap-8 ">
        <hr className="w-full h-[4px]  bg-[#0d193b] " />
        <hr className="w-full h-[4px]  bg-[#0d193b] " />
      </div>
      <div className="bg-[#050817] w-[80px] h-[80px] flex flex-col justify-center pl-[19px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 rounded-full border-2 border-solid border-[#33477b] z-10">
        <FaqLogo />
      </div>
    </div>
  );
}
