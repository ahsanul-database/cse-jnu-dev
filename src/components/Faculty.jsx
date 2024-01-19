import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";

const Faculty = () => {
  const [faculty, setFaculty] = useState([]);
  const loader = useNavigation();
  if (loader.state === "loading") {
    return <LoadingPage />;
  }

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ahsanul-database/fakeDB/main/faculty.json"
    )
      .then((res) => res.json())
      .then((data) => setFaculty(data));
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center font-bold py-10">
        Our Enriched Faculty
      </h1>
      <div className="px-3 overflow-x-auto">
        {faculty && (
          <table className="table  w-fit mx-auto border-2 border-black ">
            <thead>
              <tr className="border-b-2 border-gray-500">
                <th className="border-r-2 border-gray-500">SL</th>
                <th className="border-r-2 border-gray-500">Faculty Name</th>
                <th className="border-r-2 border-gray-500">Designation</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {faculty.map((faculty, index) => (
                <tr key={faculty.id} className="border-b-2 border-gray-500">
                  <td className="border-r-2 border-gray-500"> {index + 1}.</td>
                  <td className="border-r-2 border-gray-500">{faculty.Name}</td>
                  <td className="border-r-2 border-gray-500">
                    {faculty.Designation}
                  </td>
                  <td>
                    <a href={`mailto:${faculty.Email}`}>{faculty.Email}</a>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Faculty;
