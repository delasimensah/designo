import React from "react";

//components
import CallToAction from "./CallToAction";
import Banner from "./Banner";

const PageTemplate = ({ children, title, text, src, web, app, graphic }) => {
  return (
    <div className="relative">
      <img
        src="/assets/shared/desktop/bg-pattern-leaf.svg"
        alt="leaf-pattern"
        style={{ zIndex: -3 }}
        className="absolute left-0 hidden top-32 lg:block"
      />

      <div className="space-y-20">
        <Banner
          title={title}
          text={text}
          src={src}
          web={web}
          app={app}
          graphic={graphic}
        />

        {children}

        <CallToAction />
      </div>
    </div>
  );
};

export default PageTemplate;
