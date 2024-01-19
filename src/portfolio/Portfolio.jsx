import { FaUser } from "react-icons/fa";
import EduTimeline from "./EduTimeline";
import Contact from "./Contact";
import SocialLink from "./SocialLink";
import Skills from "./Skills";
import Languages from "./Languages";
import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { authContext } from "../context/AuthProvider";

const Portfolio = () => {
  const data = useLoaderData();

  const {
    name,
    nickname,
    gender,
    photo,
    description,
    clgPYear,
    clgName,
    schoolName,
    schoolPYear,
    educationalBackground,
    address,
    phone_number,
    email,
    facebook,
    linkedin,
    github,
    codeforces,
    youtube,
    instagram,
  } = data;

  const academics = {
    clgPYear,
    clgName,
    schoolName,
    schoolPYear,
    educationalBackground,
  };
  const contact = {
    phone_number,
    email,
    address,
  };
  const social = {
    facebook,
    linkedin,
    github,
    codeforces,
    youtube,
    instagram,
  };
  // setLoading(false);

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/*------------------------------- left side -------------------------------------- */}
      <div className="lg:w-[60%]">
        {/* heading  */}
        <div className="border-l-[30px] lg:border-l-[60px]  border-solid border-teal-900 pt-20 lg:pt-36 py-10">
          <h1 className="uppercase text-2xl lg:text-4xl px-10 font-extrabold tracking-widest	">
            Profile Info
          </h1>
        </div>
        {/* profile card  */}
        <div className="border-l-[40px] lg:border-l-[70px] flex items-center text-white gap-5  border-solid border-cyan-500 my-10 lg:mr-10	px-5  py-10 bg-teal-900">
          <img
            className="borderR  h-16 lg:h-28 "
            src={
              photo
                ? photo
                : gender === "F"
                ? "https://i.ibb.co/C09P0X4/pngwing-com.png"
                : "https://i.ibb.co/kD4FgLv/graduate-icon-5.png"
            }
            alt={nickname}
          />
          <div>
            <h1 className="lg:text-4xl font-bold uppercase">{name}</h1>
            <div className="flex items-center gap-2 text-cyan-500">
              <hr className=" border-2 border-cyan-500 w-[20%]" />
              <p>STUDENT</p>
            </div>
          </div>
        </div>
        <div className="border-l-[30px] lg:border-l-[60px] flex flex-col gap-10 border-solid border-teal-900 py-10 pl-5 lg:pl-16">
          {/* about me  */}
          <div>
            <div className="flex gap-3 items-center text-xl lg:text-3xl font-bold">
              <FaUser className="h-5 lg:h-20 text-xl lg:text-4xl" />
              <p>ABOUT ME</p>
            </div>
            <p className="text-lg text-justify leading-8 pr-2 lg:pr-0 indent-5">
              {description
                ? description
                : "As a Computer Science & Engineering undergraduate have interest in competitive programming and Web Development, I possess an in-depth proficiency in MS Office applications. My passion for problem-solving and coding fuels my drive to excel in programming contests, where I constantly push boundaries to find creative solutions. My innovative vision allows me to approach challenges with a fresh perspective, seeking novel ways to optimize processes and enhance user experiences. With a strong foundation in technology and a thirst for continuous learning, I am committed to making a positive impact in the world of technology and beyond."}
            </p>
          </div>
          {/* education  */}
          <div className="">
            <p className="flex gap-3 items-center text-3xl font-bold">
              Education
            </p>
            <EduTimeline academics={academics} />
          </div>
        </div>
      </div>
      {/*------------------------------------ right side --------------------------------------- */}
      <div className="lg:w-[40%] pt-32 bg-slate-300 pl-10">
        <Contact contact={contact} />
        <SocialLink social={social} />
        <Skills />
        <Languages />
      </div>
    </div>
  );
};

export default Portfolio;
