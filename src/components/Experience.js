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
            <p className="text-2xl xs:text-4xl  inline border-l-4 pl-6">
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
            Drawing from a rich reservoir of knowledge spanning diverse sectors, encompassing software engineering, product management, general management, among others, Josiah Enumah currently works as a Microsoft Technical Support Engineer at {" "}
              <span>
                <a
                  href="https://tek-experts.com/"
                  target="_blank"
                  rel="noreferrer"
                  className=" underline"
                >
                  Tek Experts,{" "}
                </a>
              </span>
              where he consistently exceeds customer satisfaction, as well as quality metrics while demonstrating expertise in M365, Cloud & Cyber Security and Azure.
            </p>
            <br />
            <p>
            Prior to his current role, Josiah occupied the position of a Frontend Developer at {" "}
            <span>
                <a
                  href="https://kingcabana.com"
                  target="_blank"
                  rel="noreferrer"
                  className=" underline"
                >
                  King Cabana Limited,{" "}
                </a>
              </span>where he enhanced user experiences through JavaScript, Redux, and React.js, accelerating MVP launches and ensuring seamless frontend-backend integration. His international stint as a Front End Engineer at {" "}
              <span>
                <a
                  href="https://www.linkedin.com/company/unfair-advantage/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Unfair Advantage{" "}
                </a>
              </span>
              in Helsinki, Finland, saw him optimizing the {""}
              <span>
                <a
                  href="https://stafftribes.com"
                  target="_blank"
                  rel="noreferrer"
                  className=" underline"
                >
                  Staff Tribes app{" "}
                </a>
              </span>
              with Meteor.js and pioneering user-centric features.
            </p>
            <br />
            <p>
            His multifaceted career also includes roles such as Product Manager at {" "}
              <span>
                <a
                  href="https://www.google.com/maps/place/Triple+E+Diagnostics/@6.2533437,6.1948442,17z/data=!3m1!4b1!4m6!3m5!1s0x10414fdb59af3763:0x52e06890d21d744d!8m2!3d6.2533437!4d6.1948442!16s%2Fg%2F11rq0vs186?entry=ttu"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Triple-E Diagnostics {" "}
                </a>
              </span>
              where he forged strategic partnerships and maximized SEO to drive website traffic, and Facilities Manager at {" "}
              <span>
                <a
                  href="https://greenfacilitiesltd.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Green Facilities Limited, {" "}
                </a>
              </span> where he automated facility management processes and ensured operational excellence.
             <br />
            </p>
            <br />
            <p>
            Josiah has demonstrated leadership, problem-solving, and technical prowess throughout his career. His dedication to excellence, paired with a commitment to sustainable development goals, underscores his approach to every endeavor.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Experience;
