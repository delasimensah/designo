import React from "react";
import Link from "next/link";

const ProjectLink = ({ className, title, link }) => {
  return (
    <Link href={link}>
      <a
        className={`relative py-20 flex flex-col justify-center items-center text-white rounded-lg space-y-6 overflow-hidden group bg-cover  ${className}`}
      >
        <h1 className="z-50 text-xl tracking-widest uppercase md:text-3xl">
          {title}
        </h1>

        <div className="flex items-center justify-center space-x-3">
          <p className="z-50 text-sm tracking-widest uppercase md:text-lg">
            View Projects
          </p>

          <img
            src="/assets/shared/desktop/icon-right-arrow.svg"
            alt="right-arrow"
            className="z-50"
          />
        </div>

        <div className="absolute w-full transition-all duration-300 bg-black bg-opacity-80 h-800 group-hover:bg-lightPeach group-hover:bg-opacity-80"></div>
      </a>
    </Link>
  );
};

export default ProjectLink;
