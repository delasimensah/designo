import React from "react";
import Zoom from "react-reveal/Zoom";

//components
import AboutIconCard from "../components/AboutIconCard";
import Input from "../components/Input";

const Contact = () => {
  return (
    <div className="relative ">
      <img
        src="/assets/shared/desktop/bg-pattern-leaf.svg"
        alt="leaf-pattern"
        style={{ zIndex: -3 }}
        className="absolute right-0 hidden -bottom-52 lg:block"
      />

      <div className="space-y-28">
        <Zoom>
          <div className="relative overflow-hidden banner bg-peach">
            <img
              src="/assets/contact/desktop/bg-pattern-hero-desktop.svg"
              alt=""
              className="absolute z-0 hidden md:-left-52 md:bottom-52 lg:left-0 lg:bottom-0 md:block"
            />

            <img
              src="/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg"
              alt=""
              className="absolute z-0 transform scale-200 left-32 top-52 md:hidden"
            />

            <div className="grid text-white lg:grid-cols-2">
              <div className="relative z-10 flex flex-col justify-center p-10 space-y-5 lg:p-20">
                <h1 className="text-3xl text-center capitalize md:text-4xl lg:text-5xl md:text-left">
                  Contact us
                </h1>

                <p className="text-center md:text-left">
                  Ready to take it to the next level? Let’s talk about your
                  project or idea and find out how we can help your business
                  grow. If you are looking for unique digital experiences that’s
                  relatable to your users, drop us a line.
                </p>
              </div>

              <div className="p-10 space-y-5">
                <form className="relative z-10 space-y-7">
                  <Input type="text" placeholder="Name" />

                  <Input type="email" placeholder="Email Address" />

                  <Input type="phone" placeholder="Phone" />

                  <Input type="textarea" placeholder="" />
                </form>

                <div className="flex justify-center md:justify-end">
                  <button className="z-0 btn">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </Zoom>

        <div className="container grid py-32 gap-7 lg:grid-cols-3">
          <AboutIconCard
            src="/assets/shared/desktop/illustration-canada.svg"
            location="canada"
            clock
            left
          />

          <AboutIconCard
            src="/assets/shared/desktop/illustration-australia.svg"
            location="australia"
            top
          />

          <AboutIconCard
            src="/assets/shared/desktop/illustration-united-kingdom.svg"
            location="united kingdom"
            anti
            bottom
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
