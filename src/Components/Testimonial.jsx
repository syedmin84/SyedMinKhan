import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Ali Raza",
      role: "Founder, FutureTech",
      text: "Working with Syed Min was an absolute pleasure. His attention to detail, quick turnaround, and deep understanding of modern web technologies helped us launch our project successfully.His expertise in the MERN Stack truly stands out, and we look forward to collaborating with him on many more projects!",
      image: "/ali-raza.jpeg",
    },
    {
      name: "– Sarah Ahmed",
      role: "Project Manager, BrightStart Ventures",
      text: "Syed Min delivered exactly what we needed — a sleek, responsive website that exceeded our expectations. His professionalism, technical skills, and dedication make him an asset to any project. We look forward to working with him again in the future.",
      image: "/sara-ahmed.webp",
    },
    {
      name: "- Ahmad Ali",
      role: "Classmate, Aptech Computer Education",
      text: "I have known Syed Min Khan since our college days. He has always been recognized for his hard work and dedication. His passion for programming and web development was truly inspiring. In every project, his professionalism and creativity stood out and motivated all of us.I am confident that he will achieve great success in his field",
      image: "/class-mate.jpeg",
    },
    // Add more as needed
  ];
  return (
    <section className="mt-20 pb-20 relative z-3 bg-[#080d27] ">
      <h2 className="text-3xl sm:text-[40px] sm:w-max relative z-10 font-bold px-4 py-2 mb-14 mx-auto text-center text-white sm:border-3 border-[#1f2f6d] rounded-md">
        What my clients are saying?
      </h2>

      <div className="max-w-5xl mx-auto px-4 relative  ">
        {/* Custom Arrows */}
        <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 z-10 hidden lg:flex">
          <div className="swiper-button-prev text-3xl cursor-pointer" />
        </div>
        <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-10 hidden lg:flex  ">
          <div className="swiper-button-next text-3xl cursor-pointer" />
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          className="!pb-10 "
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-[800px] mx-auto md:shadow-[0_0_8px_0px_#cfd9dc] rounded-2xl ">
                <div className="mt-2 flex flex-col md:flex-row justify-center items-center rounded-2xl  p-10 text-white bg-[#1f2f6d]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full object-cover"
                  />
                  <div className="ml-0 md:ml-8 pt-15 md:mt-0 text-left">
                    <p className="text-sm sm:text-base mb-6 leading-relaxed">
                      “{testimonial.text}”
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-white text-right">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm md:text-base text-white text-right">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
