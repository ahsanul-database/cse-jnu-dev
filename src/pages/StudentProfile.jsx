import { useContext, useState } from "react";
import Student from "../components/Student";
import { authContext } from "../context/AuthProvider";
import { ArrowDownLeftIcon } from "@heroicons/react/24/solid";
import { useNavigation } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const StudentProfile = () => {
  const { studentData } = useContext(authContext);
  const [filterType, setFilterType] = useState("name");
  const loading = useNavigation();
  const temp = [...studentData];
  const [students, setStudents] = useState(
    temp?.sort(() => Math.random() - 0.5)
  );
  if (loading.state === "loading") {
    return <LoadingPage />;
  }
  // to show in orders section code ----------------------
  const ascOrder = (data) => {
    data.sort((a, b) => {
      const nameA = a.name.toLowerCase(); // ignore upper and lowercase
      const nameB = b.name.toLowerCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  };

  const handleOrder = (e) => {
    const value = e.target.value;
    if (value === "ran") {
      const newStudents = [...studentData];
      setStudents(newStudents.sort(() => Math.random() - 0.5));
    } else if (value === "asc") {
      const newStudents = [...studentData];
      ascOrder(newStudents);
      setStudents(newStudents);
    } else if (value === "dsc") {
      const newStudents = [...studentData];
      ascOrder(newStudents);
      setStudents(newStudents.reverse());
    }
  };

  // to do some filter section code ----------------------
  const handleFilterType = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setFilterType(value);
  };
  const handleFilter = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const newStudents = [...studentData];

    const searchResult = newStudents.filter((std) =>
      std[filterType].toLowerCase().includes(value.toLowerCase())
    );
    setStudents(searchResult);
  };
  return (
    <div>
      <h1 className="py-10 text-4xl font-bold text-center">
        See Students Profile Cards
      </h1>
      <div>
        <h2 className="py-10 flex items-center gap-2 lg:gap-5 justify-center lg:text-2xl font-bold ">
          Customized Yours Window{" "}
          <span>
            {" "}
            <ArrowDownLeftIcon className="h-4 lg:h-6" />{" "}
          </span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-5 items-center justify-center pb-5 ">
          {/* order part  */}
          <div className="">
            <select
              onChange={handleOrder}
              className="focus:outline-none py-3 outline-1 outline-gray-300 bg-transparent outline   px-4 rounded"
            >
              <option className="hover:bg-blue-300  " value="ran">
                Random
              </option>
              <option className="hover:bg-blue-300 " value="asc">
                Ascending
              </option>
              <option className="hover:bg-blue-300 " value="dsc">
                Descending
              </option>
            </select>
          </div>
          {/* // another filter part  */}
          <div className="join w-fit">
            <div>
              <div>
                <form onChange={handleFilter}>
                  <input
                    className="input input-bordered w-[190px] focus:outline-none join-item"
                    placeholder={`Search By ${
                      filterType === "blood" ? "Blood Group" : filterType
                    }`}
                  />
                </form>
              </div>
            </div>
            <select
              onChange={handleFilterType}
              className="select focus:outline-none select-bordered join-item w-[100px]"
            >
              <option value="name">Name</option>
              <option value="blood">Blood Group</option>
              <option value="religion">Religion</option>
              <option value="clgName">College Name</option>
            </select>
            {/* <div className="indicator">
              <button className="py-2 px-4 bg-blue-200 hover:bg-teal-300 join-item">Search</button>
            </div> */}
          </div>

          {/* -------------------------------------------- */}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-5 lg:gap-8 lg:px-20  mx-auto">
        {/* {students?.map((std) => {
          console.log(std);
        })} */}
        {students.length > 0 ? (
          students.map((std) => <Student key={std.id} item={std} />)
        ) : (
          <h1 className="text-2xl py-20 capitalize font-bold text-center">
            No Data Matched With This {filterType === "blood" ? "blood Group" : filterType}{" "}
          </h1>
        )}
      </div>
    </div>
  );
};

export default StudentProfile;
