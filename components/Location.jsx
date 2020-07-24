import React from "react";
import Fade from "react-reveal/Fade";

const Location = ({
  desktop,
  tablet,
  title,
  invert,
  office,
  street,
  address,
  phone,
  mail,
  top,
  left,
  bottom,
}) => {
  return (
    <Fade top={top} left={left} bottom={bottom}>
      <div className="grid overflow-hidden bg-white banner lg:grid-cols-3 md:gap-5">
        <div
          className={`overflow-hidden md:rounded-2xl ${
            invert && "lg:col-start-3"
          }`}
        >
          <img
            src={desktop}
            alt="location"
            className="w-full h-full md:hidden lg:block"
          />

          <img
            src={tablet}
            alt="location"
            className="hidden md:block lg:hidden"
          />
        </div>

        <div
          className={`relative lg:col-span-2 bg-peach bg-opacity-20 md:rounded-2xl overflow-hidden  ${
            invert && "lg:row-start-1"
          }`}
        >
          <img
            src="/assets/shared/desktop/bg-pattern-two-circles.svg"
            alt="pattern"
            className="absolute bottom-0 left-0 hidden transform lg:scale-95 md:scale-90 md:block"
          />

          <img
            src="/assets/shared/desktop/bg-pattern-three-circles.svg"
            alt="pattern"
            className="absolute transform scale-150 top-20 left-20 md:hidden"
          />

          <div className="space-y-10 py-14 md:p-20">
            <h1 className="text-2xl tracking-wider text-center uppercase md:text-left text-peach">
              {title}
            </h1>

            <div className="flex flex-col space-y-5 md:space-x-10 md:flex-row md:space-y-0">
              <div className="text-center md:text-left">
                <p className="font-bold">{office}</p>
                <p>{street}</p>
                <p>{address}</p>
              </div>

              <div className="text-center md:text-left">
                <p className="font-bold capitalize">contact</p>
                <p>{phone}</p>
                <p>{mail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Location;
