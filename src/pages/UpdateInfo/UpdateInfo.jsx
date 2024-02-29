import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../context/AuthProvider";
import Banner from "../../components/Banner";
import LoadingPage from "../LoadingPage";
import Swal from "sweetalert2";

const UpdateInfo = () => {
  const { user } = useContext(authContext);
  const [loading, setLoading] = useState(true);
  const [studentData, setStudentData] = useState([]);
  const userMail = user?.email;
  useEffect(() => {
    fetch(
      `https://jnu-server-production.up.railway.app/userProfileDetails?email=${userMail}`
    )
      .then((res) => res.json())
      .then((data) => {
        setStudentData(data);
        setLoading(false);
      });
  }, [user]);

  const {
    name,
    toph,
    city,
    nickname,
    description,
    email,
    gender,
    birthdate,
    photo,
    skills,
    blood,
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
    id,
    _id,
    hobbies,
    clgPYear,
    clgName,
    schoolName,
    schoolPYear,
  } = studentData;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {};
    for (let i = 0; i < form.length; i++) {
      if (form[i].name) {
        data[form[i].name] = form[i].value;
      }
    }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://jnu-server-production.up.railway.app/UpdateMyData/${_id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        Swal.fire({
          title: "Updated!",
          text: "Your info has been updated.",
          icon: "success",
        });
      }
    });
  };
  if (loading) return <LoadingPage />;

  return (
    <div className="min-h-[calc(100vh-100px)]">
      <Banner>Update Information</Banner>
      <div className="mx-auto px-10 lg:w-2/3">
        <form onSubmit={handleSubmit} className="py-10 space-y-2 w-full ">
          <div className=" grid lg:grid-cols-2 gap-3">
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>Your Name</label>
              <input
                name="name"
                defaultValue={name}
                className="w-full text-base-100 bg-neutral  px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>Your ID</label>
              <input
                name="id"
                defaultValue={id}
                className="text-base-100 bg-neutral w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>NickName</label>
              <input
                name="nickname"
                defaultValue={nickname}
                className="text-base-100 bg-neutral w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 "
            >
              <label>Blood Group</label>
              <select
                defaultValue={blood}
                placeholder="Blood group"
                name="blood"
                className="w-full py-2 px-4 focus:outline-none"
              >
                <option value={blood} selected disabled hidden>
                  Select an Option
                </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 "
            >
              <label htmlFor="">Gender</label>
              <select
                name="gender"
                className="w-full py-2 px-4 focus:outline-none"
              >
                <option value={gender} selected disabled hidden>
                  Select A option
                </option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>Birthday(DD/MM/YYYY)</label>
              <input
                name="birthdate"
                defaultValue={birthdate}
                className="text-base-100 bg-neutral w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 "
            >
              <label htmlFor="">Religion</label>
              <select
                name="religion"
                className="w-full py-2 px-4 focus:outline-none"
              >
                <option value={religion} selected disabled hidden>
                  Select Your Religion
                </option>
                <option value="Islam">Islam</option>
                <option value="Hindu">Hindu</option>
                <option value="Buddhist">Buddhist</option>
                <option value="Christian">Christian</option>
              </select>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>Photo URL</label>
              <input
                name="photo"
                defaultValue={photo}
                className="text-base-100 bg-neutral w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>Address</label>
              <input
                name="address"
                defaultValue={address}
                className="text-base-100 bg-neutral w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>City</label>
              <input
                name="city"
                defaultValue={city}
                className="text-base-100 bg-neutral w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>Email</label>
              <input
                disabled
                name="email"
                defaultValue={email}
                className="w-full px-4 text-base-100 bg-neutral py-3 rounded-md border border-indigo-300 focus:outline-none cursor-not-allowed"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>Phone</label>
              <input
                name="phone"
                defaultValue={phone_number}
                className="text-base-100 bg-neutral w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>Facebook Id(Only username/unique id)</label>
              <input
                name="facebook"
                defaultValue={facebook}
                className="text-base-100 bg-neutral w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>Linkedin Id(Only username/unique id)</label>
              <input
                name="linkedin"
                defaultValue={linkedin}
                className="text-base-100 bg-neutral w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>Github Id(only username/unique id)</label>
              <input
                name="github"
                defaultValue={github}
                className="text-base-100 bg-neutral w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>Instagram Id(only username/unique id)</label>
              <input
                name="instagram"
                defaultValue={instagram}
                className="text-base-100 bg-neutral w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>Youtube Id(only username/unique id)</label>
              <input
                name="youtube"
                defaultValue={youtube}
                className="text-base-100 bg-neutral w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>Codeforces(only user id)</label>
              <input
                name="codeforces"
                defaultValue={codeforces}
                className="text-base-100 bg-neutral w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>Codechef(only user id)</label>
              <input
                name="codechef"
                defaultValue={codechef}
                className="text-base-100 bg-neutral w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>Leetcode(only user id)</label>
              <input
                name="leetcode"
                defaultValue={leetcode}
                className="text-base-100 bg-neutral w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>Hackerrank(only user id)</label>
              <input
                name="hackerrank"
                defaultValue={hackerrank}
                className="text-base-100 bg-neutral w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>Toph</label>
              <input
                name="toph"
                defaultValue={toph}
                className="text-base-100 bg-neutral w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>Portfolio</label>
              <input
                name="website"
                defaultValue={website}
                className="text-base-100 bg-neutral w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>WhatsApp</label>
              <input
                name="whatsapp"
                defaultValue={whatsapp}
                className="text-base-100 bg-neutral w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>Skills</label>
              <input
                name="skills"
                defaultValue={skills}
                className="text-base-100 bg-neutral w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>Hobbies</label>
              <input
                name="hobbies"
                defaultValue={hobbies}
                className="text-base-100 bg-neutral w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>Height</label>
              <input
                name="height"
                defaultValue={height}
                className="text-base-100 bg-neutral w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>Weight</label>
              <input
                name="weight"
                defaultValue={weight}
                className="text-base-100 bg-neutral w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>College Name</label>
              <input
                name="clgName"
                defaultValue={clgName}
                className="text-base-100 bg-neutral w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>College Pass year</label>
              <input
                name="clgPYear"
                defaultValue={clgPYear}
                className="text-base-100 bg-neutral w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>School Name</label>

              <input
                name="schoolName"
                defaultValue={schoolName}
                className="text-base-100 bg-neutral w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="space-y-2 text-sm"
            >
              <label>School Pass Year</label>
              <input
                name="schoolPYear"
                defaultValue={schoolPYear}
                className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div className="flex flex-col lg:col-span-2 space-y-2">
              <label>Bio</label>
              <textarea
                className="h-36 p-2 text-justify focus:outline-none text-base-100 bg-neutral  rounded-md border border-indigo-300"
                defaultValue={description}
                name="description"
              ></textarea>
            </div>
          </div>
          <div className="mx-auto flex justify-center py-5">
            <button
              className="py-2 px-5 bg-blue-300 hover:bg-blue-400 rounded w-full "
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateInfo;
