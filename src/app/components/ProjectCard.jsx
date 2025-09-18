import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, techStack }) => {
  // Set techStack to an empty array if it's undefined or null
  const techArray = techStack || [];

  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#181818",
        }}
      >
        <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2 text-center">{title}</h5>
        <p className="text-[#ADB7BE] mb-4">{description}</p>
        
        {/* Aesthetic Section */}
        <div className="text-[#ADB7BE] text-center">
          <p className="text-sm font-semibold">Tech Stack:</p>
          <ul className="flex justify-center gap-4 mt-2">
            {techArray.length > 0 ? (
              techArray.map((tech, index) => (
                <li key={index} className="bg-[#272727] px-3 py-1 rounded-md text-xs">
                  {tech}
                </li>
              ))
            ) : (
              <p className="text-sm text-gray-400">No tech stack available</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
