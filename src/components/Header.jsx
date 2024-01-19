import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo (1).png";
import bg from "../assets/msgBGig.jpg";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Header = () => {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ahsanul-database/fakeDB/main/messageforyou.json"
    )
      .then((res) => res.json())
      .then((data) => setMessage(data));
  }, []);
  const handleMsgShow = () => {
    let timerInterval;
    const length = message.length;
    const position = Math.floor(Math.random() * length);
    const msg = message[position];
    Swal.fire({
      html: `
     <div>
     <div style="  padding: 40px 0;
     display: flex;
     justify-content: center;">
     <img style=" height: 100px;text-align: center;
     width: 90px;" src="https://i.ibb.co/kGNSQp0/icon-coding-logo-Q976-Kx7-600-removebg-preview.png" alt="!coder" />
     </div>

      <h2 class="myTextAnimation " > ${msg} </h2>
     </div>
      `,
      background: `#fff url(https://i.ibb.co/Jr6JGYJ/gradient.png)`,
      timer: 3500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {});
  };
  return (
    <div className="w-fit lg:w-full px-10 z-[200] bg-teal-200 flex  flex-col lg:flex-row gap-5 py-5 lg:py-0 justify-between  items-center">
      <div>
        <Link>
          <img className="h-20" src={logo} alt="" />
        </Link>
      </div>
      <div className="text-xl flex gap-3 font-semibold">
        <NavLink
          className={({ isActive }) => isActive && "text-blue-700"}
          to="/"
        >
          Home
        </NavLink>
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className=" ">
            Academic
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content gap-2 z-[1] menu  shadow  rounded-box w-52"
          >
            <li className="bg-blue-200">
              <Link to="academic/routine">Routine</Link>
            </li>
            <li className="bg-blue-200">
              <Link to="academic/notes">Notes</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className=" ">
            Students
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content gap-2 z-[1] menu  shadow  rounded-box w-52"
          >
            <li className="bg-blue-200">
              <Link to="students/profileCard">Profile</Link>
            </li>
            <li className="bg-blue-200">
              <Link to="students/idCard">ID Card</Link>
            </li>
          </ul>
        </div>

        <NavLink
          className={({ isActive }) => isActive && "text-blue-700"}
          to="/faculty"
        >
          Faculty
        </NavLink>
      </div>
      <div>
        <button
          onClick={handleMsgShow}
          className="btn px-5 rounded-lg bg-blue-100 hover:bg-teal-500 border-none"
        >
          Message{" "}
          <ChatBubbleLeftRightIcon className="h-5"></ChatBubbleLeftRightIcon>{" "}
        </button>
      </div>
    </div>
  );
};

export default Header;
