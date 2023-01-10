import React from "react";
import { Typewriter } from "react-simple-typewriter";
import olympians from "../assets/olympians.png";

const Projects = () => {
  return (
    <>
      <div name="Projects" className="w-full h-full">
        <section className="max-w-screen-xl mx-auto py-7 xs:py-20 px-5 sm:px-16 flex flex-col justify-center w-full h-full text-black">
          <div>
            <p className="text-2xl xs:text-4xl font-bold inline border-l-4 border-black pl-6 mb-6">
              <Typewriter
                words={["My Projects..."]}
                loop={Infinity}
                typeSpeed={100}
                deleteSpeed={100}
              />
            </p>
          </div>

          <div className="flex flex-col items-center justify-center mt-10 md:flex-row gap-10">
            <div
              className="w-2/3 md:w-1/2 p-4 md:p-8 bg-blue-900 md:mr-10 rounded-md hover:rounded-3xl duration-300"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img src={olympians} alt="olympians" className="full" />
            </div>

            <div
              className="flex flex-col justify-between w-2/3 md:w-1/2  py-2"
              // data-aos="fade-left"
              // data-aos-duration="1000"
            >
              <p className="font-bold text-lg md:text-2xl">
                OLYMPIANS - Global Community
              </p>
              <p className="md:w-[20rem]">
                Website for Olympians Community with exquisite features and
                responsive design.
              </p>
              <br />
              <div className="flex justify-center md:justify-start">
                <a
                  href="https://olympians.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-4 md:mr-10 text-blue-800 font-bold border-2 px-2 py-1 rounded-md hover:bg-gray-200 duration-300 text-sm md:text-lg"
                >
                  Live site
                </a>{" "}
                <a
                  href="https://github.com/JosiahENUMAH/olympians-web"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-800 font-bold border-2 px-2 py-1 rounded-md hover:bg-gray-200 duration-300 text-sm md:text-lg"
                >
                  Code base
                </a>
              </div>
              <br />
            </div>
          </div>

          <footer
            className="flex justify-center mt-0 md:mt-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <button className="border-2 text-2xl md:text-4xl bg-gradient-to-r from-gray-500 to-gray-900 text-white w-fit px-4 py-1 rounded-md hover:scale-110 duration-300 mt-10">
              <a
                href="https://github.com/JosiahENUMAH?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                More Projects
              </a>
            </button>
          </footer>
        </section>
      </div>
    </>
  );
};

export default Projects;
