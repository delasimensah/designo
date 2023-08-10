import React from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";

const CallToAction = () => {
  return (
    <div className="container relative overflow-hidden rounded-lg bg-peach -bottom-10">
      <img
        src="/assets/shared/desktop/bg-pattern-call-to-action.svg"
        alt=""
        className={`absolute right-0 lg:-top-28 transform scale-200 lg:scale-100 md:scale-110`}
      />

      <Fade distance="40px" left>
        <div className="grid gap-10 px-5 py-12 md:px-20 lg:py-20 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center space-y-5 text-white lg:block lg:col-span-2">
            <h1 className="z-50 text-3xl font-semibold text-center md:text-4xl lg:text-left lg:w-72 md:w-80">
              Let’s talk about your project
            </h1>

            <p className="text-sm tracking-wider text-center lg:text-left md:text-base">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Link href="/contact">
              <a className="btn">Get in touch</a>
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default CallToAction;
