import {
  FaEnvelopeCircleCheck,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaLocationPin,
  FaSquarePollVertical,
  FaYoutube,
} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import "../components/StudentCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Student = ({ item }) => {
  const [activeSection, setActiveSection] = useState("#about");

  const {
    photo,
    id,
    nickname,
    name,
    gender,
    description,
    clgPYear,
    clgName,
    schoolName,
    schoolPYear,
    address,
    phone_number,
    email,
    blood,
    facebook,
    linkedin,
    github,
    codeforces,
    youtube,
    instagram,
  } = item;
  const handleSection = (sectionId) => {
    setActiveSection(sectionId);
  };
  return (
    <div
      className={`Card max-w-[450px] ${activeSection == "#about" ? "is-activee " : ""}`}
      id="card"
      data-state={activeSection}
    >
      {/* card header ---------------- */}
      <div className="card-header">
        <div className="card-cover bg-gradient-to-r from-teal-400 from-10% via-sky-200 via-50% to-teal-400 to-10%"></div>
        <img
          className="card-avatar myBGimg object-cover object-center"
          src={
            photo
              ? photo
              : gender === "F"
              ? "https://i.ibb.co/C09P0X4/pngwing-com.png"
              : "https://i.ibb.co/kD4FgLv/graduate-icon-5.png"
          }
          alt={nickname}
        />
        <h1 className="card-fullname pb-3 uppercase">{name} </h1>
        <h2 className="card-jobtitle">CSE Undergrad</h2>
      </div>
      {/* card main part --------------- */}
      <div className="card-main">
        <div
          className={`card-section ${
            activeSection === "#about" && "is-active"
          }`}
          id="about"
        >
          <div className="card-content">
            <div className="card-subtitle">ABOUT</div>
            <p className="card-desc">
              {description
                ? description
                : " A CSE undergraduate with a passion for problem solving and web development. Eager to learn and grow, actively participates in coding competitions, hones my skills in web technologies, and maintains a portfolio to showcase my projects."}
            </p>
          </div>
        </div>
        <div
          className={`card-section ${
            activeSection === "#education" ? "is-active" : ""
          }`}
          id="education"
        >
          <div className="card-content">
            <div className="card-subtitle">EDUCATION TIMELINE</div>
            <div className="card-timeline">
              <div className="card-item" data-year="2023">
                <div className="card-item-title">
                  CSE Undergraduate at <span>Jagannath University</span>
                </div>
                <div className="card-item-desc">
                  Jagannath University as a govt. financed full pledged public
                  university of Bangladesh is situated in Dhaka.
                </div>
              </div>
              <div className="card-item" data-year={clgPYear}>
                <div className="card-item-title">Higher Secondary at </div>
                <div className="card-item-desc">{clgName}</div>
              </div>
              <div className="card-item" data-year={schoolPYear}>
                <div className="card-item-title">Secondary School at </div>
                <div className="card-item-desc">{schoolName}</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`card-section ${
            activeSection === "#contact" ? "is-active" : ""
          }`}
          id="contact"
        >
          <div className="card-content">
            <div className="card-subtitle">CONTACT</div>
            <div className="mt-5 flex flex-col gap-5 text-lg">
              <div className=" flex gap-3 ">
                <FaLocationDot className="myBorderClass " />
                {address ? address : "Not Available"}
              </div>
              <div className="flex gap-3 ">
                <FaPhoneAlt className="myBorderClass " />
                {phone_number && gender == "M"
                  ? phone_number
                  : "Not Available"}{" "}
              </div>
              <div className="flex gap-3 ">
                <FaEnvelopeCircleCheck className="myBorderClass " />
                {email}{" "}
              </div>
              <div className="flex gap-3 ">
                <FaLocationPin className="rotate-180 pl-2 text-red-600 text-3xl  border-teal-600 border-l-2" />
                <h5> {blood ? blood : "Not Provided"}</h5>
              </div>
              <div className="card-social">
                {facebook && (
                  <a
                    className="underline"
                    href={`https://www.facebook.com/${facebook}`}
                  >
                    <FaFacebook className="text-5xl" />
                  </a>
                )}
                {github && (
                  <a
                    className="underline"
                    href={`https://github.com/${github}`}
                  >
                    <FaGithub className="text-5xl" />
                  </a>
                )}
                {linkedin && (
                  <a
                    className="underline"
                    href={`https://www.linkedin.com/in/${linkedin}`}
                  >
                    <FaLinkedin className="text-5xl" />
                  </a>
                )}
                {codeforces && (
                  <a
                    className="underline"
                    href={`https://codeforces.com/profile/${codeforces}`}
                  >
                    {" "}
                    <FaSquarePollVertical className="text-5xl" />
                  </a>
                )}
                {youtube && (
                  <a
                    className="underline"
                    href={`https://www.youtube.com/${youtube}`}
                  >
                    {" "}
                    <FaYoutube className="text-5xl" />
                  </a>
                )}
                {instagram && (
                  <a
                    className="underline"
                    href={`https://www.instagram.com/${instagram}`}
                  >
                    {" "}
                    <FaInstagram className="text-5xl" />
                  </a>
                )}
              </div>
              <Link to={`${id}`}>
                <button className="contact-me uppercase">LEARN more</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="card-buttons">
        <button
          onClick={() => handleSection("#about")}
          className={activeSection == "#about" && "is-active"}
        >
          ABOUT
        </button>
        <button
          onClick={() => handleSection("#education")}
          className={activeSection === "#education" && "is-active"}
        >
          EDUCATION
        </button>
        <button
          onClick={() => handleSection("#contact")}
          className={activeSection === "#contact" && "is-active"}
        >
          CONTACT
        </button>
      </div>
    </div>
  );
};

export default Student;
