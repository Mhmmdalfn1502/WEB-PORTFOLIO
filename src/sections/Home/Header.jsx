import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";

export default function Header({ id }) {
  return (
    <div id={id} className="w-screen h-[500px] lg:h-screen py-20">
      <div className="flex flex-col w-full h-full justify-between items-start px-6 lg:px-30 ">
        {/* <div className="w-[60%]">
          <span className="text-[12px] font-black">I'm Muhammad Alfan</span>
        </div> */}

        <div className="hidden lg:block"></div>

        <div className="flex flex-col lg:gap-3">
          <div className="w-full flex flex-col">
            <div className="flex flex-col lg:flex-row lg:gap-1">
              <span
                className="text-[24px] lg:text-[48px] font-black leading-18 text-transparent"
                style={{
                  WebkitTextStroke: "1px white",
                }}
              >
                HI, I'M 
              </span>
              <span className="text-[24px] lg:text-[48px] font-black leading-18 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-500 to-white animate-gradient -mt-10 lg:mt-0 ml-4"> MUHAMMAD ALFAN</span>
            </div>
            <div className="flex flex-col lg:flex-row -mt-10 lg:mt-0">
              <span
                className="text-[24px] lg:text-[48px] font-black leading-18 text-transparent"
                style={{
                  WebkitTextStroke: "1px white",
                }}
              >
                AND YOU CAN CALL ME
              </span>
              <span className="text-[24px] lg:text-[48px] font-black leading-18 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-500 to-white animate-gradient -mt-10 lg:mt-0 ml-4"> ALFAN</span>
            </div>
          </div>
          <div className="w-full flex flex-col -mt-4 lg:mt-0">
            <span className="text-[18px] lg:text-[24px] font-medium">
              I'M <span className="bg-gradient-to-br from-fuchsia-300 via-orange-400 to-green-300 bg-clip-text text-transparent animate-gradient">GRAPHIC DESIGNER</span>
              <span className="bg-gradient-to-br from-fuchsia-300 via-yellow-400 to-fuchsia-700 bg-clip-text text-transparent animate-gradient">, UI/UX DESIGNER</span>
              <span className="bg-gradient-to-br from-fuchsia-300 via-yellow-400 to-fuchsia-700 bg-clip-text text-transparent animate-gradient">
                <span className="text-white">
                  {" "}
                  & <br />{" "}
                </span>
                FRONT-END WEB DEVELOPER
              </span>
            </span>
          </div>
          <div className="flex flex-row gap-6 items-center mt-4">
            <a href="" className="flex flex-row gap-2 items-center">
              <div className="rounded-full w-[14px] h-[14px] border-1 border-white"></div>
              <span className="text-sm lg:text-[16px] font-light text-gray-200">See My Project</span>
            </a>
            <a href="" className="flex flex-row gap-2 items-center">
              <div className="rounded-full w-[14px] h-[14px] border-1 border-white"></div>
              <span className="text-sm lg:text-[16px] font-light text-gray-200">More About Me</span>
            </a>
          </div>
        </div>

        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-row gap-4">
            <a href="https://www.instagram.com/mhmmdalfn_1502?igsh=NnNvY254dGd5dHF2">
              <FaInstagram size={20} color="white" className="hover:scale-110 hover:text-pink-500 hover:rotate-6 transition-all duration-300"/>
            </a>
            {/* <FaTwitter size={20} color="white" className="hover:scale-110 hover:text-pink-500 hover:rotate-6 transition-all duration-300"/>
            <FaYoutube size={20} color="white" className="hover:scale-110 hover:text-pink-500 hover:rotate-6 transition-all duration-300"/> */}
            
            <a href="https://www.threads.net/@mhmmdalfn_1502">
              <FaSquareThreads size={20} color="white" className="hover:scale-110 hover:text-pink-500 hover:rotate-6 transition-all duration-300"/>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-alfan1502/">
              <FaLinkedin size={20} color="white" className="hover:scale-110 hover:text-pink-500 hover:rotate-6 transition-all duration-300"/>
            </a>
            <a href="https://github.com/Mhmmdalfn1502">
              <FaGithub size={20} color="white" className="hover:scale-110 hover:text-pink-500 hover:rotate-6 transition-all duration-300"/>
            </a>
          </div>
          <div className="flex">
            <span className="text-[14px]">PORTFOLIO 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}
