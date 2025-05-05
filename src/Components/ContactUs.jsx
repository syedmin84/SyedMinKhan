import React from "react";
import Swal from "sweetalert2";

export default function ContactUs() {
  const handleClick = (e) => {
    e.preventDefault();
    if (window.netlifyIdentity) return;
    Swal.fire({
      title: "Success!",
      text: "Message sent successfully",
      icon: "success",
      confirmButtonText: "OK",
      background: "#1f2f6d", // dark grey background
      color: "#fff", // text color white
      confirmButtonColor: "#6366f1",
    });

    e.target.reset();
  };
  return (
    <section
      className="relative z-3 bg-[#080d27] max-w-screen-xl mx-auto px-4 pb-12 "
      id="contact-us"
    >
      <h2 className="text-3xl sm:text-[40px] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-white sm:border-3 border-[#1f2f6d]  rounded-md">
        Let's Connect
      </h2>
      <div className="flex flex-col md:flex-row items-center mt-10">
        <div className="w-full">
          <img src="/contact-me.svg" alt="phone" />
        </div>
        <form
          className="w-full"
          name="contactUS"
          netlify=""
          autoComplete="off"
          onSubmit={handleClick}
        >
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-mediu text-white"
          >
            Name
          </label>
          <div className="relative mb-4">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </div>
            <input
              autoComplete="off"
              type="text"
              id="name"
              name="name"
              className=" bg-[#080d27] border-2 outline-none border-[#1f2f6d] text-white text-sm rounded-lg focus:ring-[#1788ae] transition ease-in duration-100 focus:shadow-[0_0_8px_0px_#1788ae] my-3  block w-full ps-10 p-2.5 "
              placeholder="Enter your name"
              required
            />
          </div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            Your Email
          </label>
          <div className="relative mb-4">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="text"
              id="email"
              name="email"
              className="bg-[#080d27] border-2 outline-none border-[#1f2f6d] text-white text-sm rounded-lg focus:ring-[#1788ae] transition ease-in duration-100 focus:shadow-[0_0_8px_0px_#1788ae] my-3  block w-full ps-10 p-2.5 "
              placeholder="user@yourdomain.com"
              required
            />
          </div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-white"
          >
            Message
          </label>
          <div className="relative mb-4">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none" />
            <textarea
              id="message"
              name="message"
              rows={8}
              className="bg-[#080d27] border-2 outline-none border-[#1f2f6d] text-white text-sm rounded-lg focus:ring-[#1788ae] transition ease-in duration-100 focus:shadow-[0_0_8px_0px_#1788ae] my-3  block w-full ps-10 p-2.5 "
              defaultValue={""}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-[#1f2f6d] hover:bg-[#1f2f6dd0] focus:ring-4 focus:ring-[#4489a0] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
