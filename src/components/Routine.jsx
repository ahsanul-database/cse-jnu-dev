import moment from "moment";
import { useLoaderData } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";
import Banner from "../components/Banner";

const Routine = () => {
  const loading = useLoaderData();
  if (loading === "loading") {
    return <LoadingPage />;
  }
  const routine = JSON.parse(useLoaderData());
  const now = moment();
  const findDiff = (a, b) => {
    const a1 = moment(a, "DD/MM/YYYY");
    const b1 = moment(b, "DD/MM/YYYY");
    const diff = b1.diff(a1, "days") - 1;
    return diff;
  };
  const allGap = routine.map((item, index) => {
    if (index === 0) {
      const avl = findDiff(now, item.date);
      if (avl < 0) return "Exam is Over";
      else return avl + " days";
    } else {
      const avl = findDiff(routine[index - 1]?.date, item.date);
      return avl + " days";
    }
  });

  const available = (a) => {
    const a1 = moment(a, "DD/MM/YYYY");
    const b1 = moment(now, "DD/MM/YYYY");
    const diff = a1.diff(b1, "days");
    const styled = diff < 0 ? "Exam is Over" : diff + " days";
    return styled;
  };

  return (
    <div className="">
      <Banner>Routine</Banner>
      <h1 className=" py-10 text-4xl text-center font-bold">
        Exam Routine for 1st Year 2nd Semester
      </h1>
      <div className=" overflow-x-auto overflow-y-auto my-10 px-3">
        <table className="table mx-auto w-fit px-3 border-2 border-teal-300 rounded  shadow-xl">
          <thead>
            <tr className="bg-teal-200 text-base-100 h-12 text-lg">
              <th className="border-r-2 border-teal-300">Date</th>
              <th className="border-r-2 border-teal-300">Course Code</th>
              <th className="border-r-2 border-teal-300">Course Name</th>
              <th className="border-r-2 border-teal-300">Gap</th>
              <th>Remaining Day</th>
            </tr>
          </thead>
          <tbody>
            {routine.map((item, index) => (
              <tr key={index} className={index % 2 == 0 && "bg-base-300"}>
                <td className="border-r-2 border-teal-300">{item.date}</td>
                <td className="border-r-2 border-teal-300">
                  {item.courseCode}
                </td>
                <td className="border-r-2 border-teal-300">
                  {item.courseName}
                </td>
                <td className="border-r-2 border-teal-300">{allGap[index]}</td>
                <td> {available(item.date)} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Routine;
