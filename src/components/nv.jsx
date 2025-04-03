import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [selectedMenu, setSelectedMenu] = useState("home");

  const menuItems = [
    { label: "Home", id: "home", path: "/" },
    { label: "About", id: "about", path: "/about" },
    { label: "Projects", id: "projects", path: "/projects" },
    { label: "Contact", id: "contact", path: "/contact" },
  ];

  return (
    <div className="relative flex h-screen w-full">
      {/* Sidebar (Slider) */}
      <motion.div
        drag="y"
        dragConstraints={{ top: -100, bottom: 100 }}
        className="fixed right-5 top-1/2 transform -translate-y-1/2 h-64 w-16 bg-blue-600 rounded-full flex flex-col items-center justify-center space-y-6 shadow-lg cursor-grab active:cursor-grabbing"
      >
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            className={`flex items-center justify-center w-full`}
            animate={{ scale: selectedMenu === item.id ? 1.5 : 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            <Link
              to={item.path}
              onClick={() => setSelectedMenu(item.id)}
              className={`text-white text-lg font-bold transition ${
                selectedMenu === item.id ? "text-2xl" : "text-lg"
              }`}
            >
              {item.label[0]}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: selectedMenu === item.id ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className={`h-screen flex items-center justify-center text-4xl font-bold ${
              selectedMenu === item.id ? "block" : "hidden"
            }`}
          >
          </motion.div>
        ))}
      </div>
    </div>
  );
}
