import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useLoaderData, useNavigation } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import Banner from "../components/Banner";

const Notes = () => {
  const loading = useNavigation();
  // const allnotes = JSON.parse(useLoaderData());
  const allnotes = useLoaderData();
  const [filterType, setFilterType] = useState("topic");
  const [currentPage, setCurrentPage] = useState(1);
  const [notePerPage, setnotePerPage] = useState(20);
  const indexOfLastNotes = currentPage * notePerPage;
  const indexOfFirstNotes = indexOfLastNotes - notePerPage;
  const pageCount = Math.ceil(allnotes.length / notePerPage);
  const [currentNotes, setCurrentItems] = useState(
    allnotes.slice(indexOfFirstNotes, indexOfLastNotes)
  );
  // const currentNotes = allnotes.slice(indexOfFirstNotes, indexOfLastNotes);
  const numbers = [...Array(pageCount + 1).keys()].slice(1);

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
    // setNotes(searchResult);
    setCurrentItems(searchResult);
  };
  // pagination function are here
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage < pageCount) setCurrentPage(currentPage + 1);
  };
  const paginate = (number) => {
    setCurrentPage(number);
  };

  if (currentNotes.length === 0) {
    return <LoadingPage></LoadingPage>;
  }
  return (
    <div className="  mx-auto ">
      <Banner>Notes & Slides </Banner>
      <div className="py-10 lg:px-10 flex px-3 flex-col m-0 justify-center items-center">
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
                {currentNotes.map((note, index) => (
                  <tr className="text-xs lg:text-lg" key={index}>
                    <td className=" lg:text-lg  border-2 border-gray-200">
                      {index + indexOfFirstNotes + 1}
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
        {/* -------------------- pagination part ---------------- */}
        <div className="join gap-1 flex justify-center">
          <button
            onClick={prevPage}
            className="join-item bg-blue-100 hover:bg-blue-200 btn"
          >
            «
          </button>
          {numbers.map((number) => (
            <button
              onClick={() => paginate(number)}
              key={number}
              className={`bg-blue-100 hover:bg-blue-200 join-item btn ${
                number === currentPage ? "active" : ""
              }`}
            >
              {number}
            </button>
          ))}
          <button
            onClick={nextPage}
            className="bg-blue-100 hover:bg-blue-200 join-item btn"
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
