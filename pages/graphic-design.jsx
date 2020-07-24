import React from "react";
import Fade from "react-reveal/Fade";

//components
import PageTemplate from "../components/PageTemplate";
import ProjectLink from "../components/ProjectLink";
import PortfolioCard from "../components/PortfolioCard";

const GraphicDesign = () => {
  const graphic = [
    {
      src: "/assets/graphic-design/desktop/image-change.jpg",
      title: "Tim Brown",
      text: "A book cover designed for Tim Brown’s new release, ‘Change’",
    },
    {
      src: "/assets/graphic-design/desktop/image-boxed-water.jpg",
      title: " Boxed water",
      text: "A simple packaging concept made for Boxed Water",
    },
    {
      src: "/assets/graphic-design/desktop/image-science.jpg",
      title: " Science",
      text: "A poster made in collaboration with the Federal Art Project",
    },
  ];

  return (
    <PageTemplate
      src="/assets/graphic-design/desktop/bg-pattern-intro-graphic.svg"
      title="Graphic Design"
      text="We deliver eye-catching branding materials that are tailored to meet your business objectives."
      graphic
    >
      <div className="container grid gap-5 lg:grid-cols-3">
        {graphic.map((port, idx) => {
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
            className="bg-app-design"
            title="graphic design"
            link="/app-design"
          />
        </Fade>
      </div>
    </PageTemplate>
  );
};

export default GraphicDesign;
