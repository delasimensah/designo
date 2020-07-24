import React, { useState, useEffect } from "react";
import Link from "next/link";
import Zoom from "react-reveal/Zoom";

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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const addBodyStyle = () => {
      if (isOpen) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    };

    addBodyStyle();
  }, [isOpen]);

  return (
    <nav className="container flex items-center justify-between py-6 md:py-10 lg:py-8">
      <div className="w-36 lg:w-40">
        <Link href="/">
          <a>
            <img src="/logo-dark.png" alt="logo" className="" />
          </a>
        </Link>
      </div>

      <ul className="hidden space-x-5 md:flex">
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

      <button
        className="p-0 bg-transparent md:hidden focus:outline-none"
        onClick={toggleMenu}
      >
        {!isOpen ? (
          <img src="/assets/shared/mobile/icon-hamburger.svg" alt="menu" />
        ) : (
          <img src="/assets/shared/mobile/icon-close.svg" alt="close" />
        )}
      </button>

      {isOpen && (
        <div className="absolute left-0 z-50 w-screen h-screen bg-black bg-opacity-50 top-16">
          <Zoom>
            <div className="text-white bg-black">
              <ul className="p-8 space-y-8">
                {links.map((link, idx) => {
                  return (
                    <li key={idx}>
                      <Link href={link.link}>
                        <a
                          className="text-lg tracking-widest uppercase"
                          onClick={toggleMenu}
                        >
                          {link.text}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Zoom>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
