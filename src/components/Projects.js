import React from "react";
import { Typewriter } from "react-simple-typewriter";
import olympians from "../assets/olympians.png";
import theolympiansmall from "../assets/theolympiansmall.png";
import kingCabana from "../assets/kingCabana.png";
import scorers from "../assets/3scorerssignup.png";

const Projects = () => {
  const projects = [
    {
      title: "King Cabana",
      description:
        "An event management web-app, which facilitates efficient connections between event organizers, attendees, and corporate sponsors, with the goal of increasing their chances of meeting their objectives.",
      site: "https://kingcabana.com",
      repo: "https://github.com/King-cabana",
      img: kingCabana,
    },
    {
      title: "3scorers Prediction",
      description:
        "A full CRUD test app to create user account, login, get users data, filter by roles: admin and user, search for users and admins by first name and/or last name; and several other features.",
      site: "https://3scorersprediction.netlify.app",
      repo: "https://github.com/JosiahENUMAH/3scorers-prediction",
      img: scorers,
    },
    {
      title: "The Olympians Mall - ecommerce app",
      description:
        "Allows users to shop online, browse product catalogs, add items to a cart, and order management capabilities.",
      site: "https://theolympiansmall.netlify.app",
      repo: "https://github.com/JosiahENUMAH/The-Olympians-Mall-eCommerce-store",
      img: theolympiansmall,
    },
    {
      title: "OLYMPIANS - Global Community",
      description:
        "Website for Olympians Community with exquisite features and responsive design.",
      site: "https://olympians.netlify.app",
      repo: "https://github.com/JosiahENUMAH/olympians-web",
      img: olympians,
    },
  ];

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
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center mt-10 md:flex-row gap-10"
              >
                <div
                  className="w-2/3 md:w-1/2 p-4 md:p-8 bg-blue-900 md:mr-10 rounded-md hover:rounded-3xl duration-300"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <img
                    src={project.img}
                    alt="project display"
                    className="full"
                  />
                </div>
                <div
                  className="flex flex-col justify-between w-2/3 md:w-1/2  py-2"
                  // data-aos="fade-left"
                  // data-aos-duration="1000"
                >
                  <p className="font-bold text-lg md:text-2xl">
                    {project.title}
                  </p>
                  <p className="md:w-[20rem]">{project.description}</p>
                  <br />
                  <div className="flex justify-center md:justify-start">
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noreferrer"
                      className="mr-4 md:mr-10 text-blue-800 font-bold border-2 px-2 py-1 rounded-md hover:bg-gray-200 duration-300 text-sm md:text-lg"
                    >
                      Live site
                    </a>
                    <a
                      href={project.repo}
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
            );
          })}

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
