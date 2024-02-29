import React, { useContext, useState } from "react";
import Headline from "../../components/Headline";
import ShowData from "../../components/ShowData";
import { FaEdit, FaUser } from "react-icons/fa";
import logofacebook from "../../assets/facebook.svg";
import logoinstagram from "../../assets/instagram.svg";
import logolinkedin from "../../assets/linkedin.svg";
import logogithub from "../../assets/github.svg";
import logoyoutube from "../../assets/youtube.svg";
import logoweb from "../../assets/web.svg";
import logocodeforces from "../../assets/codeforces.svg";
import logocodechef from "../../assets/codechef.svg";
import logoleetcode from "../../assets/leetcode.svg";
import logohackerrank from "../../assets/hackerrank.svg";
import Swal from "sweetalert2";
import { authContext } from "../../context/AuthProvider";

const PersonalInfo = ({ studentData, setStudentData }) => {
  const { user } = useContext(authContext);
  const [isBioActive, setIsBioActive] = useState(false);
  const {
    name,
    nickname,
    description,
    email,
    gender,
    birthdate,
    photo,
    roll,
    department,
    session,
    blood,
    phone,
    address,
    height,
    weight,
    maritalStatus,
    spouseName,
    facebook,
    phone_number,
    instagram,
    linkedin,
    github,
    youtube,
    website,
    codeforces,
    codechef,
    leetcode,
    hackerrank,
    whatsapp,
    religion,
  } = studentData;
  const marital = () => {
    if (maritalStatus === true) return "Married";
    else return "Unmarried";
  };
  const handleBioUpdate = () => {
    setIsBioActive(true);
  };
  const updateDescription = (e) => {
    e.preventDefault();
    const newDescription = e.target.description.value;
    const updatedData = { ...studentData, description: newDescription };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://jnu-server-production.up.railway.app/UpdateMyData/${studentData._id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
          }
        );
        setStudentData(updatedData);
        Swal.fire({
          title: "Updated!",
          text: "Your info has been updated.",
          icon: "success",
        });
      }
    });
    setIsBioActive(false);
  };
  return (
    <div>
      <Headline>Personal Information</Headline>
      <section className="pt-5 flex flex-col lg:flex-row gap-5">
        {/* left side  */}
        <div className="lg:w-[60%] ">
          <div className="flex flex-col lg:flex-row  lg:items-center">
            <img
              data-aos="zoom-in-down"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="p-10"
              src={photo ? photo : user.photoURL}
              alt="Student Photo"
            />
            <div
              data-aos="slide-right"
              data-aos-delay="250"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              className="pt-5 lg:pt-0"
            >
              {name && <ShowData fieldName="name" data={name} />}
              {nickname && <ShowData fieldName="nickname" data={nickname} />}
            </div>
          </div>
          {description && (
            <div
              data-aos="fade-up-right
            "
              data-aos-delay="250"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="pt-5">
                <h2 className="flex items-center gap-2 font-bold text-lg">
                  {" "}
                  <FaUser /> <span>About Me</span>{" "}
                  <button
                    className={isBioActive ? "hidden" : "block"}
                    onClick={handleBioUpdate}
                  >
                    <FaEdit />
                  </button>
                </h2>
              </div>
              {isBioActive ? (
                <form onSubmit={updateDescription}>
                  <textarea
                    className="w-full p-2 border-2 border-gray-300 rounded-lg h-36 focus:outline-none focus:border-primary"
                    defaultValue={description}
                    name="description"
                  ></textarea>
                  <button className="px-5 py-1 bg-success rounded text-white text-lg capitalize">
                    submit
                  </button>
                </form>
              ) : (
                <p>{description}</p>
              )}
            </div>
          )}
          <div
            data-aos="fade-up-right
                  "
            data-aos-delay="250"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="pt-5 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8"
          >
            {height && <ShowData fieldName="height" data={height} />}
            {weight && <ShowData fieldName="weight" data={`${weight} kg`} />}
            <ShowData fieldName="marital status" data={marital()} />
            {spouseName && (
              <ShowData fieldName="spouse name" data={spouseName} />
            )}
          </div>
          <div
            data-aos="slide-right"
            data-aos-delay="250"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="pt-5"
          >
            <h2 className="text-lg font-bold">Social Link:</h2>
            <div className="pt-5 grid gap-2 grid-cols-6 lg:grid-cols-8 px-5 justify-between">
              {facebook && (
                <a
                  href={`https://www.facebook.com/${facebook}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-8 md:h-12"
                    src={logofacebook}
                    alt="facebook"
                  />
                </a>
              )}
              {instagram && (
                <a
                  href={`https://www.instagram.com/${instagram}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-8 md:h-12"
                    src={logoinstagram}
                    alt="instagram"
                  />
                </a>
              )}
              {linkedin && (
                <a
                  href={`https://www.linkedin.com/in/${linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-8 md:h-12"
                    src={logolinkedin}
                    alt="linkedin"
                  />
                </a>
              )}
              {github && (
                <a
                  href={`https://www.github.com/${github}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="h-8 md:h-12" src={logogithub} alt="github" />
                </a>
              )}
              {youtube && (
                <a
                  href={`https://www.youtube.com/${youtube}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-8 md:h-12"
                    src={logoyoutube}
                    alt="youtube"
                  />
                </a>
              )}
              {website && (
                <a href={`https://${website}`} target="_blank" rel="noreferrer">
                  <img className="h-8 md:h-12" src={logoweb} alt="website" />
                </a>
              )}
              {codeforces && (
                <a
                  href={`https://www.codeforces.com/profile/${codeforces}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-8 md:h-12"
                    src={logocodeforces}
                    alt="codeforces"
                  />
                </a>
              )}
              {codechef && (
                <a
                  href={`https://www.codechef.com/users/${codechef}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-8 md:h-12"
                    src={logocodechef}
                    alt="codechef"
                  />
                </a>
              )}
              {leetcode && (
                <a
                  href={`https://www.leetcode.com/${leetcode}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-8 md:h-12"
                    src={logoleetcode}
                    alt="leetcode"
                  />
                </a>
              )}
              {hackerrank && (
                <a
                  href={`https://www.hackerrank.com/${hackerrank}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-8 md:h-12"
                    src={logohackerrank}
                    alt="hackerrank"
                  />
                </a>
              )}
              {whatsapp && (
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-8 md:h-12"
                    src={logofacebook}
                    alt="whatsapp"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
        {/* right side  */}
        <div
          data-aos="fade-up-right"
          data-aos-delay="250"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="lg:bg-base-200 lg:text-base-400 pl-5 pt-5 lg:w-[40%]"
        >
          {blood && (
            <div>
              <ShowData fieldName="Blood Group" data={blood} />
            </div>
          )}
          {gender && (
            <div>
              <ShowData
                fieldName="Gender"
                data={gender === "M" ? "Male" : "Female"}
              />
            </div>
          )}
          {religion && (
            <div>
              <ShowData fieldName="Religion" data={religion} />
            </div>
          )}
          {email && (
            <div>
              <ShowData className="lowercase" fieldName="Email" data={email} />
            </div>
          )}
          {phone_number && (
            <div>
              <ShowData fieldName="Phone" data={`+88 ${phone_number}`} />
            </div>
          )}
          {birthdate && <ShowData fieldName="Birthdate" data={birthdate} />}
        </div>
      </section>
    </div>
  );
};

export default PersonalInfo;
