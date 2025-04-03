import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

export default function Experience({ id }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const descProject = {
    "Graphic Design": "TThis section showcases my achievements and professional journey, including competitions, training, and workshops. Each experience enhances my skills in Graphic Design, UI/UX, and Web Development.",
  };

  const projects = {
    "Graphic Design": [
      {
        title: "ISC Web Design",
        images: ["SERTIFIKATLOMBA.png"],
        description: "2nd Place Winner in the Web Design Competition | October 7, 2023",
      },
      {
        title: "UI/UX Workshop Speaker",
        images: ["SERTIFIKATPEMATERI.png"],
        description: "Speaker at CROWD IT 2024 Workshop | June 29, 2024 - July 29, 2024",
      },
      {
        title: "Independent Study Batch 5",
        images: ["SERTIFIKATSTUPEN.png"],
        description: "Intermediate Fullstack Web Development Program | December 31, 2023",
      },
      {
        title: "International Competition",
        images: ["SERTIFIKATCHINA.png"],
        description: "The 2nd 'CZIE Cup' International Invitational Competition of Innovation and Entrepreneurship | March 2024 - December 2024",
      },
      {
        title: "Front-End Developer Training Certificate",
        images: ["SERTIFIKATPELATIHAN1.png"],
        description: "Completed a Front-End Developer Training Program | February 2024",
      },
      {
        title: "Designer Graphic Internship",
        images: ["INTERSHIP.png"],
        description: "Designer Graphic Internship at Bestari Property | July 13, 2024 - January 13, 2025",
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
          <span className="text-[48px] mb-4 font-black block text-start">Experiences</span>
          <p className="text-[16px] font-medium text-gray-500 mt-2 w-[80%]">{descProject["Graphic Design"]}</p>
        </div>

        {/* Kategori Filter */}
        <div className="flex flex-row lg:flex-col gap-2 mt-6 mb-6 lg:mb-0">
            <span
              className="relative w-[200px] py-2 text-gray-500 text-[14px]"
            >2023 - 2024
            </span>
        </div>
      </div>

      {/* Kanan: Tampilan Project */}
      <div className="rounded-lg overflow-y-auto max-h-screen lg:p-6">
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
