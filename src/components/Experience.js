import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Experience = () => {
  return (
    <>
      <div
        name="Experience"
        className="w-full h-full md:h-screen bg-gradient-to-b from-blue-400 to-blue-900 text-white"
      >
        <section
          className="max-w-screen-xl p-4 sm:p-12 mx-auto flex flex-col justify-center w-full h-full"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          <div className="pb-1 md:pb-8">
            <p className="text-2xl xs:text-4xl font-bold inline border-l-4 pl-6">
              <Typewriter
                words={["Experience..."]}
                loop={Infinity}
                typeSpeed={100}
                deleteSpeed={100}
                //   delaySpeed={1000}
              />
            </p>
          </div>

          <div className="text-sm xs:text-xl">
            <p className="mt-1 lg:mt-10">
              Working as a Frontend Engineer at{" "}
              <span>
                <a
                  href="https://unfairadvantage.fi"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-800 font-bold"
                >
                  Unfair Advantage{" "}
                </a>
              </span>
              - an IT, HR and Event Services company in Helsinki, Finland and{" "}
              <span>
                <a
                  href="https://kingcabana.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-800 font-bold"
                >
                  King Cabana Limited{" "}
                </a>
              </span>
              - a Tech start up in the Event Management space; utilising
              React.js, HTML, CSS, JavaScript and other frameworks to develop
              responsive UI, and integrating client to server side.
            </p>
            <br />
            <p>
              With vast experience in Tech, Josiah Enumah has worked as a
              Computer Engineer at{" "}
              <span>
                <a
                  href="https://slot.ng"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-800 font-bold"
                >
                  Slot Systems Limited
                </a>
              </span>
              , a foremost IT company in Nigeria. The zeal to impact knowledge
              led him to be an IT Engineer at Fenster Academy, a
              Canadian-Nigerian Institution, where he trained employees and
              students, whilst maintaining 50+ computer systems.
            </p>
            <br />
            <p>
              A highly meticulous individual, with skills in the areas General
              Management, he was a Product Manager for a Health-Tech company,{" "}
              <span>
                <a
                  href="https://tripleediagnostics.business.site"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-800 font-bold"
                >
                  Triple-E Diagnostics
                </a>
              </span>
              , where he ensured organisational growth and attracted
              partnerships with over 19 companies. <br />
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Experience;
