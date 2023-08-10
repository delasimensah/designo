import React from "react";
import Fade from "react-reveal/Fade";

const PortfolioCard = ({ src, title, text }) => {
  return (
    <Fade distance="40px" left>
      <div className="flex flex-col overflow-hidden rounded-lg md:flex-row lg:flex-col">
        <div className="">
          <img src={src} alt="portfolio" />
        </div>

        <div className="flex flex-col items-center justify-center p-10 space-y-5 transition-all duration-300 cursor-pointer bg-lightPeach bg-opacity-30 hover:bg-peach group">
          <h1 className="text-2xl tracking-wider text-center uppercase text-peach group-hover:text-white">
            {title}
          </h1>
          <p className="text-center text-black group-hover:text-white">
            {text}
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default PortfolioCard;
