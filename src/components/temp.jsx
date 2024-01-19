import React from "react";

const temp = () => {
  return (
    <div className="card" data-state="#about">
      <div className="card-header">
        <div className="card-cover" style="background-image: url('../img/Banner.png')"></div>
        <img
          className="card-avatar"
          src="https://i.ibb.co/61zgX8X/sdfdsgasg.png"
          alt="avatar"
        />
        <h1 className="card-fullname">MD Ahsanul Hoque Abir </h1>
        <h2 className="card-jobtitle">CSE Undergrad</h2>
      </div>
      <div className="card-main">
        <div className="card-section is-active" id="about">
          <div className="card-content">
            <div className="card-subtitle">ABOUT</div>
            <p className="card-desc">
              A CSE undergraduate with a passion for problem solving and web
              development. Eager to learn and grow, actively participates in
              coding competitions, hones my skills in web technologies, and
              maintains a portfolio to showcase my projects.
            </p>
          </div>
        </div>
        <div className="card-section" id="experience">
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
              <div className="card-item" data-year="2022">
                <div className="card-item-title">
                  MIS Undergrad at <span>NSTU</span>
                </div>
                <div className="card-item-desc">
                  Noakhali Science and Technology University, Noakhali,
                  Bangladesh.
                </div>
              </div>
              <div className="card-item" data-year="2021">
                <div className="card-item-title">Higher Secondary at </div>
                <div className="card-item-desc">
                  Hazera-Toju Degree College,Bangladesh.
                </div>
              </div>
              <div className="card-item" data-year="2019">
                <div className="card-item-title">Secondary School at </div>
                <div className="card-item-desc">
                  Gachbaria Nittyananda Gourochandra Govt High School{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-section" id="contact">
          <div className="card-content">
            <div className="card-subtitle">CONTACT</div>
            <div className="card-contact-wrapper">
              <div className="card-contact">
                <FaLocationDot />
                Sector-11,Uttara
              </div>
              <div className="card-contact">
                <FaPhoneAlt />
                +880 1875507852{" "}
              </div>
              <div className="card-contact">
                <FaEnvelopeCircleCheck />
                contact.ahsanul@gmail.com
              </div>
              <div className="bflex">
                <div className="blood">
                  <img src="img/blood-type.png" alt="" />
                </div>
                <div>
                  <h5>&nbsp; O+</h5>
                </div>
              </div>
              <div className="card-social">
                <a
                  className="underline"
                  href="https://www.facebook.com/profile.php?id=100018733712101"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  className="underline"
                  href="https://twitter.com/Ahsanul_H_Abir"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  className="underline"
                  href="https://www.instagram.com/ahsanul.h.abir"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  className="underline"
                  href="https://www.linkedin.com/in/ahsanulhoqueabir"
                >
                  {" "}
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
              <button className="contact-me">LEARN TOGETHER</button>
            </div>
          </div>
        </div>
        <div className="card-buttons">
          <button data-section="#about" className="is-active">
            ABOUT
          </button>
          <button data-section="#experience">EDUCATION</button>
          <button data-section="#contact">CONTACT</button>
        </div>
      </div>
    </div>
  );
};

export default temp;
