import React from "react";
import { CiCircleChevRight } from "react-icons/ci";

export default function About({ id }) {
  return (
    <div id={id} className="flex flex-row px-6 lg:px-30 lg:py-20">
      <div className="flex flex-col">
        <span className="text-[48px] font-black">About</span>
        <br />
        <div className="w-[40%] h-[1px] bg-white -mt-4"></div>
        <p className="text-[16px] mt-10 w-full lg:w-[80%]">
          Hi my name is Muhammad Alfan, a passionate Graphic Designer and Frontend Web Developer who blends creativity with technology to craft visually stunning and user-friendly experiences. With expertise in Adobe Illustrator, Photoshop,
          Figma, React, and TailwindCSS, I specialize in designing compelling visuals, intuitive UI/UX, and responsive web applications. My goal is to create seamless digital experiences that not only look great but also enhance usability
          and engagement.
        </p>
        <a
          href="CV_Muhammad Alfan_2024.pdf"
          download="Muhammad_Alfan_CV.pdf"
          className="flex items-center justify-center gap-2 mt-6 w-[150px] py-3 text-sm font-semibold text-white bg-gradient-to-r from-white/10 to-gray-100/20 rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:text-gray-300"
        >
          My Resume
          <CiCircleChevRight size={20} />
        </a>
      </div>
      <div className="hidden lg:block">
        <img src="me2.JPG" alt="" className="w-[1000px] rounded-t-full object-cover" />
      </div>
    </div>
  );
}
