import React from "react";
import { Typewriter } from "react-simple-typewriter";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import styledComponents from "../assets/styledComponents.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import node from "../assets/node.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: styledComponents,
      title: "Styled Components",
      style: "shadow-orange-700",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: node,
      title: "Node",
      style: "shadow-green-600",
    },
    {
      id: 8,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-600",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <>
      <div name="Skills" className="w-full h-full">
        <section
          className="max-w-screen-lg mx-auto py-7 xs:py-20 px-5 sm:px-16 flex flex-col justify-center w-full h-full text-black"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div>
            <p className="text-2xl xs:text-4xl font-bold inline border-l-4 border-black pl-6 mb-6">
              <Typewriter
                words={["Skills..."]}
                loop={Infinity}
                typeSpeed={100}
                deleteSpeed={100}
              />
            </p>
            <p className="py-2 xs:py-6 text-sm xs:text-xl">
              Some Technologies I have worked with
            </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-110 duration-300 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;
