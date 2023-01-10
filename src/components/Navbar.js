import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Experience",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Skills",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <>
      <nav className="z-50 flex justify-between items-center w-full h-20 fixed text-white px-4 bg-[#1e40af] ">
        <h1 className="text-4xl font-signature hover:scale-110 hover:text-gray-300 duration-300 ml-2 cursor-pointer">
          <a href="/">&#60;je/&#62;</a>
        </h1>

        <ul className=" hidden md:flex space-x-4 mr-2">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer font-medium  text-gray-400 hover:scale-125 hover:text-white duration-500"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={toggleNav}
          className="cursor-pointer hover:text-white hover:scale-125 text-gray-400 duration-500 pr-1 md:hidden z-10"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul
            onClick={toggleNav}
            className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-900 to-blue-400 md:hidden"
          >
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 py-6 text-4xl cursor-pointer font-medium  text-gray-400 hover:scale-125 hover:text-white duration-500"
              >
                <Link onClick={toggleNav} to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
