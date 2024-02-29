import { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { useLoaderData, useNavigation } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import Banner from "../components/Banner";

const QuestionBank = () => {
  const QBData = JSON.parse(useLoaderData());
  const [filterType, setFilterType] = useState("course");
  const loading = useNavigation();
  const temp = [...QBData];
  const [QB, setQB] = useState(temp);
  if (loading === "loading") {
    return <LoadingPage />;
  }
  const handleFilterType = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setFilterType(value);
  };
  const handleFilter = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const newQB = [...temp];

    const searchResult = newQB.filter((std) =>
      std[filterType].toLowerCase().includes(value.toLowerCase())
    );
    setQB(searchResult);
  };
  const handleSemester = (code) => {
    const a = Math.floor(code / 10);
    const b = code % 10;

    return `${a == 1 ? "1st" : a == 2 ? "2nd" : a == 3 ? "3rd" : "4th"} Year ${
      b == 1 ? "1st" : "2nd"
    } Semester`;
  };
  return (
    <div>
      <Banner>Question Bank</Banner>
      <div className="py-10 flex flex-col m-0 justify-center items-center">
        <div className="join w-fit">
          <div>
            <div>
              <form onChange={handleFilter}>
                <input
                  className="input capitalize input-bordered w-[190px] focus:outline-none join-item"
                  placeholder={`Search By ${filterType}
                  }`}
                />
              </form>
            </div>
          </div>
          <select
            onChange={handleFilterType}
            className="select focus:outline-none select-bordered join-item w-[100px]"
          >
            <option value="course">Course</option>
            <option value="type">Type</option>
          </select>
          {/* <div className="indicator">
              <button className="py-2 px-4 bg-blue-200 hover:bg-teal-300 join-item">Search</button>
            </div> */}
        </div>
        <div
          id="notes"
          className=" overflow-x-auto my-5 px-5 lg:px-20 w-full mx-auto"
        >
          {QB.length > 0 ? (
            <table className="table border-2 border-teal-300 ">
              <thead>
                <tr className="font-bold text-md text-base-100  bg-teal-300 lg:text-lg">
                  <th className=" border-2 border-teal-300">SL</th>
                  <th className=" border-2 border-teal-300">Semester</th>
                  <th className=" border-2 border-teal-300">Batch</th>
                  <th className=" border-2 border-teal-300">Course Name</th>
                  <th className=" border-2 border-teal-300">Question</th>
                  <th className=" border-2 border-teal-300">Solution</th>
                </tr>
              </thead>
              <tbody>
                {QB.map((note, index) => (
                  <tr
                    className={`text-xs lg:text-lg ${
                      index % 2 == 0 && "bg-base-300"
                    }`}
                    key={index}
                  >
                    <td className=" lg:text-lg  border-2 border-teal-300">
                      {index + 1}
                    </td>
                    <td className=" lg:text-lg  ordinal border-2 border-teal-300">
                      {handleSemester(note.semester)}
                    </td>
                    <td className=" lg:text-lg ordinal border-2 border-teal-300">
                      {note.batch} Batch
                    </td>
                    <td className=" lg:text-lg border-2 border-teal-300">
                      {note.course}
                    </td>
                    <td className=" lg:text-lg border-2 border-teal-300">
                      <a
                        href={note.Qurl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" flex justify-center text-blue-400 text-2xl hover:text-blue-500"
                      >
                        <FaEye />
                      </a>
                    </td>
                    <td className=" lg:text-lg border-2 border-teal-300">
                      {note.Aurl ? (
                        <a
                          href={note.Aurl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" flex justify-center text-blue-400 text-2xl hover:text-blue-500"
                        >
                          <FaEye />
                        </a>
                      ) : (
                        <p className="text-center">Not Available</p>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <>
              <h1 className="text-center py-16">
                Your search item doesn't match with any {filterType} . try
                again.......
              </h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionBank;
