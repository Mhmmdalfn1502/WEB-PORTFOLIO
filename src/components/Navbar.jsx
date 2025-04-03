import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi Smooth Scroll
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false); // Tutup menu setelah klik (Mobile)
  };

  return (
    <nav className="text-white fixed w-full px-6 md:px-16 lg:pt-6 lg:px-32 py-4 bg-transparent backdrop-blur-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-white text-[16px]">
          Portfolio Muhammad Alfan
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-12">
          {["Home", "About", "Project", "Experience", "Contact"].map((item, index) => (
            <a
              key={index}
              onClick={() => handleScroll(item.toLowerCase())}
              className="relative cursor-pointer transition text-[16px] duration-300 text-white bg-transparent hover:text-blue-400 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-white bg-transparent p-0 focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center gap-6 transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        {["Home", "About", "Project", "Experience", "Contact"].map((item, index) => (
          <a
            key={index}
            onClick={() => handleScroll(item.toLowerCase())}
            className="text-xl cursor-pointer bg-transparent font-medium text-white transition duration-300 hover:text-blue-400"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
