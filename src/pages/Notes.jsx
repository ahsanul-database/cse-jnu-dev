import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useLoaderData, useNavigation } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const Notes = () => {
  const loading = useNavigation();
  const allnotes = JSON.parse(useLoaderData());
  const [filterType, setFilterType] = useState("topic");

  const temp = [...allnotes];
  const [notes, setNotes] = useState(temp?.sort(() => Math.random() - 0.5));
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
    const newNotes = [...temp];

    const searchResult = newNotes.filter((std) =>
      std[filterType].toLowerCase().includes(value.toLowerCase())
    );
    setNotes(searchResult);
  };
  return (
    <div className="py-10 lg:px-10 mx-auto px-3">
      <div className="flex items-center gap-5 py-6 justify-center">
        <hr className="border-2 border-black w-[25%] " />
        <h1 className="text-xl lg:text-4xl text-center font-bold">
          Notes & Slides{" "}
        </h1>
        <hr className="border-2 border-black w-[25%] " />
      </div>
      <div className="flex flex-col m-0 justify-center items-center">
        <div className="join w-fit">
          <div>
            <div>
              <form onChange={handleFilter}>
                <input
                  className="input input-bordered w-[190px] focus:outline-none join-item"
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
            <option value="topic">Topic</option>
            <option value="author">Author</option>
            <option value="courseName">Course</option>
          </select>
          {/* <div className="indicator">
              <button className="py-2 px-4 bg-blue-200 hover:bg-teal-300 join-item">Search</button>
            </div> */}
        </div>
        {/* ------------------------------ iframe section ----------------------------- */}

        {/* ------------------------------ notes table section ----------------------------- */}

        <div id="notes" className=" overflow-x-auto my-5 w-full mx-auto">
          {notes.length > 0 ? (
            <table className="table border-2 border-black">
              <thead>
                <tr className="font-bold text-md lg:text-lg">
                  <th className=" border-2 border-gray-200">Serial</th>
                  <th className=" border-2 border-gray-200">Author</th>
                  <th className=" border-2 border-gray-200">Course Name</th>
                  <th className=" border-2 border-gray-200">Topic</th>
                  <th className=" border-2 border-gray-200">View</th>
                </tr>
              </thead>
              <tbody>
                {notes.map((note, index) => (
                  <tr className="text-xs lg:text-lg" key={index}>
                    <td className=" lg:text-lg  border-2 border-gray-200">
                      {index + 1}
                    </td>
                    <td className=" lg:text-lg border-2 border-gray-200">
                      {note.author}
                    </td>
                    <td className=" lg:text-lg border-2 border-gray-200">
                      {note.courseName}
                    </td>
                    <td className=" lg:text-lg border-2 border-gray-200">
                      {note.topic}
                    </td>
                    <td className=" lg:text-lg border-2 border-gray-200">
                      <a
                        href={note.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 text-2xl hover:text-blue-500"
                      >
                        <FaEye />
                      </a>
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

export default Notes;
