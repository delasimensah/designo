import React from "react";

const Banner = ({ title, text, src, web, app, graphic }) => {
  return (
    <div
      className="relative flex flex-col items-center justify-center px-5 py-20 space-y-5 overflow-hidden text-white md:px-0 banner md:py-10 bg-peach"
      style={{ zIndex: -3 }}
    >
      <img
        src={src}
        alt="bg-pattern"
        className={`hidden md:block absolute ${web && "right-0"} ${
          app && "left-0"
        } ${graphic && "left-0"}`}
        style={{ zIndex: -1 }}
      />

      <img
        src="assets/shared/desktop/bg-pattern-small-circle.svg"
        alt="bg-pattern-2"
        className={`absolute right-10 top-0 transform -rotate-90 scale-150`}
        style={{ zIndex: -1 }}
      />
      <h1 className="text-3xl">{title}</h1>
      <p className="text-center xl:w-1/3 md:w-2/3">{text}</p>
    </div>
  );
};

export default Banner;
