import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const Tutorial = () => {
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
  const handleShow = (url, name) => {
    Swal.fire({
      html: `
      <div style="display: flex;flex-direction:column; justify-content: center; width: 100%; ">
      <p style="padding: 10px 0">Watch ${name}'s Class </p>
       <iframe height="250" src="https://www.youtube.com/embed/${url}" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        `,
    });
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
      <div className=" overflow-x-auto mx-5  lg:mx-20">
        {tutorials.length > 0 ? (
          <table className="table border-2 shadow-2xl lg:text-xl rounded ">
            <thead className="bg-teal-100 lg:text-xl">
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
                  <td className="border-r-2"> {handleSemester(item.semester)} </td>
                  <td className="border-r-2">{item.CourseName}</td>
                  <td className="border-r-2">{item.topic} </td>
                  <td>
                    <FaEye
                      onClick={() => handleShow(item.classURL, item.CourseName)}
                      className="text-2xl lg:text-5xl"
                    />
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

export default Tutorial;
