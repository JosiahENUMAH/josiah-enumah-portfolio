import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Social = () => {
  const iconStyles = { color: "black" };

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin style={iconStyles} size={30} />
        </>
      ),
      href: "https://linkedin.com/in/josiah-enumah",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub style={iconStyles} size={30} />
        </>
      ),
      href: "https://github.com/josiahEnumah",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail style={iconStyles} size={30} />
        </>
      ),
      href: "mailto:josiahenumah94@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill style={iconStyles} size={30} />
        </>
      ),
      href: "/josiah-enumah-resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden sm:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 " +
              "" +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-start w-full text-black font-bold"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
