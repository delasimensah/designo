import React from "react";
import Fade from "react-reveal/Fade";

const IconCard = ({ icon, title, text, full, half }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 lg:py-20 md:flex-row lg:flex-col space-y-7 md:space-x-7 lg:space-x-0">
      <div className="relative">
        <img
          src="/assets/shared/desktop/bg-pattern-small-circle.svg"
          alt=""
          className={`absolute top-0 ${full && "transform rotate-90"} ${
            half && "transform -rotate-90"
          }`}
          style={{ zIndex: -1 }}
        />
        <img src={icon} alt={title} className="w-32 h-32" />
      </div>

      <div className="p-px space-y-7 md:space-y-3 lg:space-y-7 md:w-2/3 lg:w-auto">
        <Fade left cascade>
          <h1 className="text-lg tracking-widest text-center uppercase md:text-left lg:text-center">
            {title}
          </h1>
        </Fade>

        <p className="text-sm text-center md:text-left lg:text-center">
          {text}
        </p>
      </div>
    </div>
  );
};

export default IconCard;
