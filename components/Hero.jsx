import React from "react";
import Link from "next/link";
import Zoom from "react-reveal/Zoom";

const Hero = () => {
  return (
    <Zoom>
      <header className="relative px-12 overflow-hidden lg:flex lg:justify-between bg-peach md:px-20 h-650 md:h-750 lg:h-auto banner">
        {/* pattern */}
        <img
          src="/assets/home/desktop/bg-pattern-hero-home.svg"
          alt=""
          className="absolute transform scale-150 md:scale-90 lg:scale-100 top-40 md:top-16 lg:top-0 -right-24 lg:right-0 md:-right-36"
          style={{ zIndex: -1 }}
        />

        <div className="pt-10 space-y-10 text-white lg:w-3/5 md:pt-16 lg:py-16 xl:py-16">
          <h1 className="text-2xl font-medium text-center md:text-4xl xl:text-5xl lg:text-left">
            Award-winnning custom designs and digital branding solutions
          </h1>

          <p className="leading-snug text-center xl:w-4/5 lg:text-left">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Link href="/our-company">
              <a className="btn">learn more</a>
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/assets/home/desktop/image-hero-phone.png"
            alt="phone"
            className="transform scale-125 md:scale-110 lg:scale-90 xl:-top-28 lg:-top-40 lg:-right-32 xl:right-0 lg:absolute"
            style={{ zIndex: -1 }}
          />
        </div>
      </header>
    </Zoom>
  );
};

export default Hero;
