import React from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";

const Footer = () => {
  const links = [
    {
      text: "our company",
      link: "/our-company",
    },
    {
      text: "locations",
      link: "/locations",
    },
    {
      text: "contact",
      link: "/contact",
    },
  ];

  return (
    <footer className="text-white bg-black">
      <div className="container py-20 md:divide-y divide-darkGrey">
        <div className="divide-y md:divide-y-0 md:flex md:justify-between divide-darkGrey">
          <div className="flex items-center justify-center py-5">
            <Link href="/">
              <a>
                <img
                  src="/logo-light.png"
                  alt="logo"
                  className=" w-36 lg:w-40"
                />
              </a>
            </Link>
          </div>

          <ul className="flex flex-col items-center py-5 space-y-5 md:flex-row md:space-y-0 md:space-x-5">
            {links.map((link, idx) => {
              return (
                <li key={idx}>
                  <Link href={link.link}>
                    <a className="text-xs tracking-widest uppercase hover:underline">
                      {link.text}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="grid space-y-7 md:space-y-0 md:grid-cols-3 lg:grid-cols-4 md:py-8">
          <Fade left cascade>
            <div className="text-center md:text-left">
              <p>Designo Central Office</p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
          </Fade>

          <Fade left cascade>
            <div className="text-center md:text-left">
              <p>Contact Us (Central Office)</p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
          </Fade>

          <div className="flex items-center justify-center md:items-end md:justify-end lg:col-span-2">
            <Fade left cascade>
              <div className="flex items-center space-x-3">
                <img
                  src="/assets/shared/desktop/icon-facebook.svg"
                  alt="facebook"
                  className="cursor-pointer filter hover:brightness-125"
                />
                <img
                  src="/assets/shared/desktop/icon-youtube.svg"
                  alt="youtube"
                  className="cursor-pointer filter hover:brightness-125"
                />
                <img
                  src="/assets/shared/desktop/icon-twitter.svg"
                  alt="twitter"
                  className="cursor-pointer filter hover:brightness-125"
                />
                <img
                  src="/assets/shared/desktop/icon-pinterest.svg"
                  alt="pinterest"
                  className="cursor-pointer filter hover:brightness-125"
                />
                <img
                  src="/assets/shared/desktop/icon-instagram.svg"
                  alt="instagram"
                  className="cursor-pointer filter hover:brightness-125"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
