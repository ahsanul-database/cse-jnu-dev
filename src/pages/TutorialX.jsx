import { FaEye } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const TutorialX = () => {
  const [videoLink, setVideoLink] = useState(null);
  const [Name, setName] = useState(null);
  const [topic, setTopic] = useState(null);
  const data = JSON.parse(useLoaderData());
  const [tutorials, setTutorials] = useState(data);

  const searchData = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    const filteredData = data.filter((item) => {
      return item.CourseName.toLowerCase().includes(searchValue.toLowerCase());
    });

    setTutorials(filteredData);
  };

  const handleSemester = (code) => {
    const a = Math.floor(code / 10);
    const b = code % 10;

    return `${a == 1 ? "1st" : a == 2 ? "2nd" : a == 3 ? "3rd" : "4th"} Year ${
      b == 1 ? "1st" : "2nd"
    } Semester`;
  };
  const handleShow = (url, name,topic) => {
    setVideoLink(url);
    setName(name);
    setTopic(topic);
  };
  return (
    <div className="">
      <div className="flex items-center gap-5 py-6 justify-center">
        <hr className="border-2 border-black w-[25%] " />
        <h1 className="text-4xl text-center font-bold">Tutorials</h1>
        <hr className="border-2 border-black w-[25%] " />
      </div>
      <div className="py-10 flex justify-center items-center">
        <form onChange={searchData} className="flex gap-3 items-center">
          <input
            type="text"
            placeholder="Search By Course Name"
            className="input input-bordered focus:outline-none input-normal w-full max-w-sm"
          />
          {/* <button
              className="py-2 px-5 bg-cyan-200 rounded-md hover:bg-teal-300 hover:delay-100 transition-all duration-200		"
              type="submit"
            >
              Search
            </button> */}
        </form>
      </div>
      <div
        id="myTutorial"
        className="mx-auto  w-[90%] lg:w-[60%] h-full items-center"
      >
        {videoLink && (
          <div className="flex flex-col my-10 ">
            <h2 className="text-center myText lg:text-2xl py-2">
              You are watching {Name}'s {topic} Class
            </h2>
            <div className="border-4  lg:border-8 border-teal-600 shadow-2xl shadow-teal-400">
              <iframe
                className="h-[240px] md:h-[320px] lg:h-[450px] w-full"
                src={`https://www.youtube.com/embed/${videoLink}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
      <div className=" overflow-x-auto mx-5  lg:mx-20">
        {tutorials.length > 0 ? (
          <table className="table border-2 shadow-2xl lg:text-xl rounded ">
            <thead className="bg-teal-100 lg:text-xl text-center">
              <th className="border-r-2">Serial</th>
              <th className="border-r-2">Semester</th>
              <th className="border-r-2">Course Name</th>
              <th className="border-r-2">Topic</th>
              <th>Watch</th>
            </thead>
            <tbody>
              {tutorials.map((item, idx) => (
                <tr
                  className={`${idx % 2 == 0 && "bg-blue-100"}`}
                  key={item.id}
                >
                  <td className="border-r-2">{idx + 1} </td>
                  <td className="border-r-2">
                    {" "}
                    {handleSemester(item.semester)}{" "}
                  </td>
                  <td className="border-r-2">{item.CourseName}</td>
                  <td className="border-r-2">{item.topic} </td>
                  <td className="flex justify-center">
                    <a href="#myTutorial">
                      <FaEye
                        onClick={() =>
                          handleShow(item.classURL, item.CourseName,item.topic)
                        }
                        className="text-2xl lg:text-5xl"
                      />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Doestn't Match with any Course Name </p>
        )}
      </div>
    </div>
  );
};

export default TutorialX;
