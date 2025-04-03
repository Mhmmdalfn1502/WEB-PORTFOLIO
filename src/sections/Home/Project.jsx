import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

export default function Project({ id }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const descProject = {
    All: "Explore a collection of my works across various disciplines, including Graphic Design, UI/UX, and Web Development.",
    "Graphic Design": "Creating visually stunning and effective graphic designs for various needs.",
    "Web Development": "Building accessible, pixel-perfect digital experiences for the web.",
    "UI/UX": "Designing user-friendly and aesthetic interfaces for better user experiences.",
  };

  const projects = {
    "Graphic Design": [
      // {
      //   title: "Branding Design",
      //   images: ["infokuliner.png"],
      //   description: "A comprehensive branding design project that enhances business identity.",
      // },
    ],
    "UI/UX": [],
    "Web Development": [
      {
        title: "Harmony Resort",
        images: ["HarmonyResort.png"],
        link: "https://harmony-hotel-meta.glitch.me",
        description:
          "Harmony Resort is a hotel booking website that allows users to easily reserve rooms online. The website provides detailed information about room types, facilities, pricing, and guest reviews, enabling users to make informed decisions before booking.",
      },
      {
        title: "Intellect.ai",
        images: ["intellect.ai.png"],
        link: "https://intellect-ai-five.vercel.app/",
        description:
          "Intellect.ai is a logo analysis platform designed to help designers evaluate their logo designs. Using graphic design principles, this website analyzes visual elements such as balance, contrast, alignment, and readability, ensuring that the logo adheres to professional design standards.",
      },
      {
        title: "Info-Kuliner",
        images: ["infokuliner.png"],
        link: "https://info-kuliner.vercel.app/",
        description:
          "Info-Kuliner is a culinary website that helps users find information about dining places in various regions. Additionally, the platform provides top food recommendations based on reviews and popularity, making it easy for users to discover the best places to eat according to their preferences.",
      },
      {
        title: "Intellect.ai",
        images: ["intellect.ai.png"],
        link: "https://intellect-ai-five.vercel.app/",
        description:
          "Intellect.ai is a logo analysis platform designed to help designers evaluate their logo designs. Using graphic design principles, this website analyzes visual elements such as balance, contrast, alignment, and readability, ensuring that the logo adheres to professional design standards.",
      },
      {
        title: "Info-Kuliner",
        images: ["infokuliner.png"],
        link: "https://info-kuliner.vercel.app/",
        description:
          "Info-Kuliner is a culinary website that helps users find information about dining places in various regions. Additionally, the platform provides top food recommendations based on reviews and popularity, making it easy for users to discover the best places to eat according to their preferences.",
      },
    ],
  };

  const categories = ["All", ...Object.keys(projects)];

  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
  });

  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setImageIndex((prevIndex) => (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <div id={id} className="grid lg:grid-cols-2 grid-cols-1 h-screen text-white px-6 lg:px-30 pt-20">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <span className="text-[48px] mb-4 font-black block text-start">Projects</span>
          <span className="text-[20px] font-medium">{selectedCategory}</span>
          <p className="text-[16px] font-medium text-gray-500 mt-2 w-[80%]">{descProject[selectedCategory]}</p>
        </div>

        {/* Kategori Filter */}
        <div className="flex flex-row lg:flex-col gap-2 mt-6 mb-6 lg:mb-0">
          {categories.map((category) => (
            <a
              key={category}
              className={`relative w-[200px] px-4 py-2 text-[14px] transition-all bg-transparent cursor-pointer ${
                selectedCategory === category ? "text-white after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white" : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </a>
          ))}
        </div>
      </div>

      {/* Kanan: Tampilan Project */}
      <div className="lg:p-6 rounded-lg overflow-y-auto max-h-screen">
        {(selectedCategory === "All" ? Object.values(projects).flat() : projects[selectedCategory] || []).map((project, index) => (
          <a
            key={index}
            onClick={() => {
              setSelectedProject(project);
              setImageIndex(0);
            }}
            // href={project.link || "#"}
            // target="_blank"
            // rel="noopener noreferrer"
            className="block rounded-lg shadow-lg hover:scale-105 transition-transform p-4 opacity-70 hover:opacity-100 hover:bg-blue-100/5 mb-4"
          >
            <div className="flex flex-col lg:flex-row gap-4">
              <img src={project.images} alt={project.title} className="w-40 h-24 object-cover rounded-lg" />
              <div className="flex flex-col justify-center">
                <span className="text-lg font-bold text-white">{project.title}</span>
                <p className="text-sm text-gray-300 text-wrap truncate">{project.description}</p>
                <a href={project.link} className="text-sm text-blue">{project.link}</a>
              </div>
            </div>
          </a>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50" onClick={() => setSelectedProject(null)}>
          <div className="bg-gray-900 p-6 rounded-lg w-[80%] max-w-2xl relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute bg-transparent top-3 right-3 text-white text-lg" onClick={() => setSelectedProject(null)}>
              ✖
            </button>
            <div {...handlers} className="flex justify-center items-center gap-4">
              <button className="bg-transparent text-white text-2xl" onClick={prevImage}>
                ⟨
              </button>
              <img src={selectedProject.images[imageIndex]} alt={selectedProject.title} className="w-96 h-56 object-cover rounded-lg" />
              <button className="bg-transparent text-white text-2xl" onClick={nextImage}>
                ⟩
              </button>
            </div>
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold text-white">{selectedProject.title}</h2>
              <p className="text-gray-300 font-light mt-2">{selectedProject.description}</p>
              {selectedProject.link && (
                <a href={selectedProject.link} target="_blank" className="text-blue-400 mt-2 block">
                  Visit Project
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
