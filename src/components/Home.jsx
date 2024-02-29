import ani1 from "../assets/education-table.json";
import rocket from "../assets/rocket.json";
import ani2 from "../assets/com-code.json";
import Lottie from "lottie-react";
import "../index.css";
import NoticeBoard from "./NoticeBoard";
import { useNavigation } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import Message from "./Message";
import NoticeBox from "./NoticeBox";

const Home = () => {
  const loading = useNavigation();

  if (loading === "loading") {
    return <LoadingPage />;
  }

  return (
    <div className="lg:px-24 px-5 py-10">
      <div className="">
        <img
          className="w-full h-full shadow-2xl rounded-lg"
          src="https://i.ibb.co/R4dHwyS/jnu-cse-13.jpg"
          alt=""
        />
      </div>
      {/* <div id="myNotice" className="my-10">
        <NoticeBoard />
      </div> */}
      <div className="my-10">
        <NoticeBox />
      </div>
      {/* message section  */}
      <Message />
      {/* 1st section---------------  */}
      <div className="flex flex-col-reverse pt-5 lg:flex-row  gap-3 items-center ">
        <div className="lg:w-[30%] relative">
          <h1 className="text-2xl lg:text-5xl">
            {" "}
            Explore innovation, collaboration, and cutting-edge tech in our
            dynamic learning community. Success awaits!
          </h1>
          <div
            className=" absolute h-8 lg:h-24 "
            style={{ animation: "slideRocket 5s linear	 infinite" }}
          >
            <Lottie className="h-24" animationData={rocket}></Lottie>
          </div>
        </div>
        <div className="lg:w-[70%]">
          <Lottie className="h-[550px]" animationData={ani1}></Lottie>
        </div>
      </div>
      {/* 2nd section ------------------ */}
      <div className="flex flex-col lg:flex-row gap-3 items-center ">
        <div className="lg:w-[30%]">
          <Lottie className="h-[550px]" animationData={ani2}></Lottie>
        </div>
        <div className="lg:w-[60%] text-xl">
          <p>
            Computer science plays a pivotal role in shaping the modern world,
            driving innovation across industries.
            <br />
            Its importance lies in solving complex problems, optimizing
            processes, and enabling technological advancements. In today's
            digital era, the job market for computer science professionals is
            thriving, offering diverse opportunities. From software development
            and cybersecurity to artificial intelligence and data analysis, the
            demand for skilled computer scientists is consistently high.
            <br />
            As technology continues to evolve, the job market in computer
            science remains dynamic, promising fulfilling careers and the chance
            to contribute to society's ongoing technological transformation.
            Embracing computer science opens doors to a world of possibilities
            and continual growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
