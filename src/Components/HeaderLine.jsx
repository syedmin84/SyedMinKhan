import React from "react";
import FaqLogo from "../assets/faq-logo.svg?react";
export default function HeaderLine() {
  return (
    <div className="relative mt-1 p-0 ">
      <div className="flex gap-8  ">
        <span className="w-full h-[4px]  bg-[#18759f] " />
        <span className="w-full h-[4px]  bg-[#18759f] " />
      </div>
      <FaqLogo className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2" />
    </div>
  );
}
