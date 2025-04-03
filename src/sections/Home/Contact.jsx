import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";

export default function Contact({ id }) {
  return (
    <div id={id} className="flex px-6 lg:px-30 py-20 w-screen">
      <div className="flex flex-col w-screen">
        <span className="text-[48px] font-black">Contact</span>
        <br />
        <div className="w-[40%] h-[1px] bg-white -mt-4"></div>
        <div className="flex flex-col gap-4 my-10">
          <a href="https://wa.me/628984977703" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-row items-center gap-2">
              <IoLogoWhatsapp size={30} color="white" />
              <span className="text-white">Whatsapp</span>
            </div>
          </a>
          <a href="mailto:malfan227@gmail.com" target="_blank" rel="noopener noreferrer">
          <div className="flex flex-row items-center gap-2">
              <MdEmail size={30} color="white" />
              <span className="text-white">Email</span>
            </div>
          </a>
          <a href="https://www.instagram.com/mhmmdalfn_1502?igsh=NnNvY254dGd5dHF2" target="_blank" rel="noopener noreferrer">
          <div className="flex flex-row items-center gap-2">
              <FaInstagram size={30} color="white" />
              <span className="text-white">Instagram</span>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/muhammad-alfan1502/" target="_blank" rel="noopener noreferrer">
          <div className="flex flex-row items-center gap-2">
              <FaLinkedin size={30} color="white" />
              <span className="text-white">Linkedin</span>
            </div>
          </a>
          <a href="https://www.threads.net/@mhmmdalfn_1502" target="_blank" rel="noopener noreferrer">
          <div className="flex flex-row items-center gap-2">
              <FaSquareThreads size={30} color="white" />
              <span className="text-white">Threads</span>
            </div>
          </a>

        </div>
      </div>
    </div>
  );
}
