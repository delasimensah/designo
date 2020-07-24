import React from "react";
import Fade from "react-reveal/Fade";

//components
import PageTemplate from "../components/PageTemplate";
import ProjectLink from "../components/ProjectLink";
import PortfolioCard from "../components/PortfolioCard";

const AppDesign = () => {
  const app = [
    {
      src: "/assets/app-design/desktop/image-airfilter.jpg",
      title: "Airfilter",
      text: "Solving the problem of poor indoor air quality by filtering the air",
    },
    {
      src: "/assets/app-design/desktop/image-Eyecam.jpg",
      title: "Eyecam",
      text: "Product that lets you edit your favorite photos and videos at any time",
    },
    {
      src: "/assets/app-design/desktop/image-faceit.jpg",
      title: "Faceit",
      text: "Get to meet your favorite internet superstar with the faceit app",
    },
    {
      src: "/assets/app-design/desktop/image-todo.jpg",
      title: "Todo",
      text: "A todo app that features cloud sync with light and dark mode",
    },
    {
      src: "/assets/app-design/desktop/image-loopstudios.jpg",
      title: "Loopstudios",
      text: "A VR experience app made for Loopstudios",
    },
  ];

  return (
    <PageTemplate
      src="/assets/app-design/desktop/bg-pattern-intro-app.svg"
      title="App Design"
      text="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      app
    >
      <div className="container grid gap-5 lg:grid-cols-3">
        {app.map((port, idx) => {
          return (
            <PortfolioCard
              key={idx}
              src={port.src}
              title={port.title}
              text={port.text}
            />
          );
        })}
      </div>

      <div className="container grid gap-5 lg:grid-cols-2">
        <Fade top>
          <ProjectLink
            className="bg-web-design-sm"
            title="web design"
            link="/web-design"
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
    </PageTemplate>
  );
};

export default AppDesign;
