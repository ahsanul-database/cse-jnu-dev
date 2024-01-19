import { useContext, useState } from "react";
import { authContext } from "../context/AuthProvider";
import StudentIDCard from "../components/StudentIDCard";

const Students = () => {
  const { studentData } = useContext(authContext);
  //   const [students, setStudents] = useState(studentData);
  studentData.sort((a, b) => {
    const idA = a.id.toLowerCase(); // ignore upper and lowercase
    const idB = b.id.toLowerCase(); // ignore upper and lowercase
    if (idA < idB) {
      return -1;
    }
    if (idA > idB) {
      return 1;
    }
    // names must be equal
    return 0;
  });

  return (
    <div>
      <h1 className="py-10 text-4xl font-bold text-center">
        See Students ID Cards
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {studentData.map((std) => (
          <StudentIDCard key={std.id} item={std} />
        ))}
      </div>
    </div>
  );
};

export default Students;
