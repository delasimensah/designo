import React from "react";
import Fade from "react-reveal/Fade";

//components
import Hero from "../components/Hero";
import ProjectLink from "../components/ProjectLink";
import IconCard from "../components/IconCard";
import CallToAction from "../components/CallToAction";

const Home = () => {
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
        className="absolute right-0 hidden transform rotate-180 bottom-10 lg:block"
      />

      <div className="space-y-20">
        <Hero />

        <div className="container grid gap-5 lg:grid-cols-2">
          <ProjectLink
            className="lg:row-span-2 bg-web-design-sm lg:bg-web-design-lg"
            title="web design"
            link="/web-design"
          />

          <Fade top>
            <ProjectLink
              className="bg-app-design"
              title="app design"
              link="/app-design"
            />
          </Fade>

          <Fade bottom>
            <ProjectLink
              className="bg-graphic-design"
              title="graphic design"
              link="/graphic-design"
            />
          </Fade>
        </div>

        <div className="container grid gap-5 lg:grid-cols-3">
          <IconCard
            title="Passionate"
            text="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge
 art, design, and technology into exciting new solutions."
            icon="/assets/home/desktop/illustration-passionate.svg"
          />

          <IconCard
            title="Resourceful"
            text="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer
 collaboration. It guarantees superior results that fulfill our clients’ needs."
            icon="/assets/home/desktop/illustration-resourceful.svg"
            half
          />

          <IconCard
            title="Friendly"
            text="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we
 strive to give them the best experience a company can provide."
            icon="/assets/home/desktop/illustration-friendly.svg"
            full
          />
        </div>

        <CallToAction />
      </div>
    </div>
  );
};

export default Home;
