import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 lg:px-30">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Muhammad Alfan. All Rights Reserved.</p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://www.instagram.com/mhmmdalfn_1502" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors duration-300">
            <FaInstagram size={20} color="white" />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-alfan1502/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-300">
            <FaLinkedin size={20} color="white" />
          </a>
          <a href="https://github.com/Mhmmdalfn1502" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
            <FaGithub size={20} color="white" />
          </a>
        </div>
      </div>
    </footer>
  );
}
