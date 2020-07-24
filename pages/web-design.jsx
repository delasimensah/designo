import React from "react";
import Fade from "react-reveal/Fade";

//components
import PageTemplate from "../components/PageTemplate";
import ProjectLink from "../components/ProjectLink";
import PortfolioCard from "../components/PortfolioCard";

const WebDesign = () => {
  const web = [
    {
      src: "/assets/web-design/desktop/image-express.jpg",
      title: "Express",
      text: "A multi-carrier shipping website for ecommerce businesses",
    },
    {
      src: "/assets/web-design/desktop/image-transfer.jpg",
      title: "Transfer",
      text: "Site for low-cost money transfers and sending money within seconds",
    },
    {
      src: "/assets/web-design/desktop/image-photon.jpg",
      title: "Photon",
      text: " A state-of-the-art music player with high-resolution audio and DSP effects",
    },
    {
      src: "/assets/web-design/desktop/image-builder.jpg",
      title: "Builder",
      text: "Connects users with local contractors based on their location",
    },
    {
      src: "/assets/web-design/desktop/image-blogr.jpg",
      title: "Blogr",
      text: "Blogr is a platform for creating an online blog or publication",
    },
    {
      src: "/assets/web-design/desktop/image-camp.jpg",
      title: "Camp",
      text: "Get expert training in coding, data, design, and digital marketing",
    },
  ];

  return (
    <PageTemplate
      src="/assets/web-design/desktop/bg-pattern-intro-web.svg"
      title="Web Design"
      text="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      web
    >
      <div className="container grid gap-5 lg:grid-cols-3">
        {web.map((port, idx) => {
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
    </PageTemplate>
  );
};

export default WebDesign;
