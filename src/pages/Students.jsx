import { useContext, useState } from "react";
import { authContext } from "../context/AuthProvider";
import StudentIDCard from "../components/StudentIDCard";
import LoadingPage from "../pages/LoadingPage";
import SkeletonProfile from "../components/SkeletonProfile";
import { useLoaderData } from "react-router-dom";
const Students = () => {
  // const { studentData } = useContext(authContext);
  // const studentData = useLoaderData();
  const { studentData, loading } = useContext(authContext);
  // usestate hooks for pagination ----------------

  const [currentPage, setCurrentPage] = useState(1);
  const [ItemPerPage, setItemPerPage] = useState(12);
  const indexOfLastItem = currentPage * ItemPerPage;
  const indexOfFirstItem = indexOfLastItem - ItemPerPage;
  const currentItems = studentData.slice(indexOfFirstItem, indexOfLastItem);
  // const [currentItems, setCurrentItems] = useState(
  //   studentData?.slice(indexOfFirstItem, indexOfLastItem)
  // );
  const pageCount = Math.ceil(studentData.length / ItemPerPage);
  const numbers = [...Array(pageCount + 1).keys()].slice(1);

  //   const [students, setStudents] = useState(studentData);
  // const [loading, setLoading] = useState(true);
  studentData.sort((a, b) => {
    const idA = a.id; // ignore upper and lowercase
    const idB = b.id; // ignore upper and lowercase
    if (idA < idB) {
      return -1;
    }
    if (idA > idB) {
      return 1;
    }
    // names must be equal
    // setLoading(false);
    return 0;
  });
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
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
  // if (loading) return <LoadingPage />;
  return (
    <div className="min-h-[calc(100vh-100px)]">
      <h1 className="py-10 text-4xl font-bold text-center">
        See Students ID Cards
      </h1>
      <div className=" ">
        {/* {studentData.map((std) => (
          <StudentIDCard key={std.id} item={std} />
        ))} */}
        {studentData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {currentItems.map((std) => (
              <StudentIDCard key={std.id} item={std} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {array.map((item) => (
              <SkeletonProfile key={item}></SkeletonProfile>
            ))}
          </div>
          // <SkeletonProfile></SkeletonProfile>
        )}
      </div>
      {/* -------------------- pagination part ---------------- */}
      <div className="join gap-1 flex justify-center py-10">
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
  );
};

export default Students;
