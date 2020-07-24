import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

//components
import CallToAction from "../components/CallToAction";
import AboutIconCard from "../components/AboutIconCard";

const About = () => {
  return (
    <div className="relative">
      <img
        src="/assets/shared/desktop/bg-pattern-leaf.svg"
        alt="leaf-pattern"
        style={{ zIndex: -3 }}
        className="absolute left-0 hidden top-32 lg:block"
      />

      <img
        src="/assets/shared/desktop/bg-pattern-leaf.svg"
        alt="leaf-pattern"
        style={{ zIndex: -3 }}
        className="absolute bottom-0 right-0 hidden lg:block"
      />

      <div className="md:space-y-28">
        <Zoom>
          <div className="grid overflow-hidden banner lg:grid-cols-5 lg:grid-rows-1">
            <div className="lg:col-span-2 lg:col-start-4">
              <img
                src="/assets/about/mobile/image-about-hero.jpg"
                alt="about-hero"
                className="w-full h-full md:hidden"
              />

              <img
                src="/assets/about/tablet/image-about-hero.jpg"
                alt="about-hero"
                className="hidden w-full h-full md:block lg:hidden"
              />

              <img
                src="/assets/about/desktop/image-about-hero.jpg"
                alt="about-hero"
                className="hidden w-full h-full lg:block"
              />
            </div>

            <div className="relative flex flex-col items-center justify-center px-5 py-20 space-y-5 overflow-hidden text-white lg:items-start lg:px-20 lg:row-start-1 bg-peach lg:col-span-3">
              <img
                src="/assets/about/mobile/bg-pattern-hero-about-mobile.svg"
                alt=""
                className="absolute transform scale-200 top-28 right-56 md:hidden"
              />

              <img
                src="/assets/home/desktop/bg-pattern-hero-home.svg"
                alt=""
                className="absolute hidden transform rotate-90 -top-96 -left-64 lg:-top-60 lg:left-0 lg:bottom-0 lg:right-0 md:block"
              />

              <h1 className="z-0 text-3xl md:text-4xl lg:text-5xl">About Us</h1>

              <p className="z-0 text-center lg:text-left">
                Founded in 2010, we are a creative agency that produces lasting
                results for our clients. We’ve partnered with many startups,
                corporations, and nonprofits alike to craft designs that make
                real impact. We’re always looking forward to creating brands,
                products, and digital experiences that connect with our clients'
                audiences.
              </p>
            </div>
          </div>
        </Zoom>

        <Fade>
          <div className="grid overflow-hidden bg-white banner lg:grid-cols-5">
            <div className="col-span-2">
              <img
                src="/assets/about/mobile/image-world-class-talent.jpg"
                alt="about-hero"
                className="w-full h-full md:hidden"
              />

              <img
                src="/assets/about/tablet/image-world-class-talent.jpg"
                alt="about-hero"
                className="hidden w-full h-full md:block lg:hidden"
              />

              <img
                src="/assets/about/desktop/image-world-class-talent.jpg"
                alt="about-hero"
                className="hidden w-full h-full lg:block"
              />
            </div>

            <div className="relative flex flex-col items-center justify-center px-5 py-20 space-y-5 overflow-hidden text-white bg-opacity-20 lg:items-start lg:px-20 bg-peach lg:col-span-3">
              <img
                src="/assets/shared/desktop/bg-pattern-two-circles.svg"
                alt="two-circles"
                className="absolute bottom-0 hidden lg:block -left-10"
              />

              <img
                src="/assets/shared/desktop/bg-pattern-three-circles.svg"
                alt="two-circles"
                className="absolute bottom-0 lg:hidden -left-10"
              />

              <h1 className="z-0 text-3xl md:text-4xl lg:text-5xl text-peach">
                World-class talent
              </h1>

              <p className="z-0 text-center text-black lg:text-left">
                We are a crew of strategists, problem-solvers, and
                technologists. Every design is thoughtfully crafted from concept
                to launch, ensuring success in its given market. We are
                constantly updating our skills in a myriad of platforms.
              </p>

              <p className="z-0 text-center text-black lg:text-left">
                Our team is multi-disciplinary and we are not merely interested
                in form — content and meaning are just as important. We give
                great importance to craftsmanship, service, and prompt delivery.
                Clients have always been impressed with our high-quality
                outcomes that encapsulates their brand’s story and mission.
              </p>
            </div>
          </div>
        </Fade>

        <div className="container grid mt-20 gap-7 lg:grid-cols-3 md:mt-0">
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

        <Fade top>
          <div className="grid my-20 overflow-hidden bg-white banner lg:grid-cols-5 md:my-0">
            <div className="lg:col-span-2 lg:col-start-4">
              <img
                src="/assets/about/mobile/image-real-deal.jpg"
                alt="about-hero"
                className="w-full h-full md:hidden"
              />

              <img
                src="/assets/about/tablet/image-real-deal.jpg"
                alt="about-hero"
                className="hidden w-full h-full md:block lg:hidden"
              />

              <img
                src="/assets/about/desktop/image-real-deal.jpg"
                alt="about-hero"
                className="hidden w-full h-full lg:block"
              />
            </div>

            <div className="relative flex flex-col items-center justify-center px-5 py-20 space-y-5 overflow-hidden text-white bg-opacity-20 lg:items-start lg:px-20 bg-peach lg:col-span-3 lg:row-start-1">
              <img
                src="/assets/shared/desktop/bg-pattern-two-circles.svg"
                alt="two-circles"
                className="absolute bottom-0 hidden lg:block -left-10"
              />

              <img
                src="/assets/shared/desktop/bg-pattern-three-circles.svg"
                alt="two-circles"
                className="absolute bottom-0 lg:hidden -left-10"
              />

              <h1 className="z-0 text-3xl md:text-4xl lg:text-5xl text-peach">
                The real deal
              </h1>

              <p className="z-0 text-center text-black lg:text-left">
                As strategic partners in our clients’ businesses, we are ready
                to take on any challenge as our own. Solving real problems
                require empathy and collaboration, and we strive to bring a
                fresh perspective to every opportunity. We make design and
                technology more accessible and give you tools to measure
                success.
              </p>

              <p className="z-0 text-center text-black lg:text-left">
                We are visual storytellers in appealing and captivating ways. By
                combining business and marketing strategies, we inspire
                audiences to take action and drive real results.
              </p>
            </div>
          </div>
        </Fade>

        <CallToAction />
      </div>
    </div>
  );
};

export default About;
