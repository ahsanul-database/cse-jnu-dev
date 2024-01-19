import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import TutorialMobile from "../components/TutorialMobile";

const TutorialNew = () => {
  const allData = JSON.parse(useLoaderData());
  //   console.log(allData);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="min-h-screen">
      {isMobile ? (
        <TutorialMobile allData={allData}></TutorialMobile>
      ) : (
        <p>Its Desktop</p>
      )}
    </div>
  );
};

export default TutorialNew;
