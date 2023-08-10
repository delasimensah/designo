import React from "react";
import Link from "next/link";

const AboutIconCard = ({ src, location, clock, anti, left, top, bottom }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-10">
      <div className="relative">
        <img
          src="/assets/shared/desktop/bg-pattern-small-circle.svg"
          alt="location-icon"
          className={`absolute top-0 transform ${clock && "rotate-90"} ${
            anti && "-rotate-90"
          }`}
        />

        <img src={src} alt="location-illustration" />
      </div>

      <div className="flex flex-col items-center justify-center space-y-5">
        <h1 className="text-2xl tracking-wider uppercase">{location}</h1>

        <Link href={`/locations`}>
          <a className="inline-block text-white btn bg-peach">See Location</a>
        </Link>
      </div>
    </div>
  );
};

export default AboutIconCard;
