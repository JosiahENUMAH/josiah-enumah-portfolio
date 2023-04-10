import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import ScrollButton from "./ScrollToTop";

const Contact = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/josiah-enumah",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/josiahEnumah",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:josiahenumah94@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/josiah-enumah-resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <>
      <div
        name="Contact"
        className="bg-gradient-to-b from-blue-900 to-blue-300 h-full w-full py-16"
      >
        <section
          className="400 max-w-screen-lg mx-auto px-5 sm:px-16"
          // data-aos="zoom-in"
          // data-aos-duration="1000"
        >
          <div>
            <p className="text-white text-2xl xs:text-4xl font-bold inline border-l-4 pl-6 mb-6">
              <Typewriter
                words={["Contact me..."]}
                loop={Infinity}
                typeSpeed={100}
                deleteSpeed={100}
              />
            </p>
            <p className="py-6 text-white text-sm xs:text-xl">
              Send a mail or view my extensive works via any of the provided
              channels below:
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-around ">
            {links.map(({ id, child, href, style, download }) => (
              <div
                key={id}
                className={
                  "flex mb-2 justify-between items-center w-40 h-14 px-4 hover:rounded-md duration-300 hover:scale-125 " +
                  "" +
                  style
                }
              >
                <a
                  href={href}
                  className="flex justify-between items-start w-full text-white"
                  download={download}
                  target="_blank"
                >
                  {child}
                </a>
              </div>
            ))}
          </div>

          <div className="flex justify-around items-center text-white mt-10 text-sm xs:text-xl">
            &#169; {new Date().getFullYear()} josiahENUMAH All rights reserved.
            <ScrollButton />
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
