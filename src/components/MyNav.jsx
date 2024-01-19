import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo (1).png";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaAlignLeft } from "react-icons/fa6";

const MyNav = () => {
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
       <div class="myText">
       <div style="  padding: 40px 0;
       display: flex;
       justify-content: center;">
       <img style=" height: 100px;text-align: center;
       width: 90px;" src="https://i.ibb.co/kGNSQp0/icon-coding-logo-Q976-Kx7-600-removebg-preview.png" alt="!coder" />
       </div>
        <h2 class="myText " > ${msg} </h2>
       </div>
        `,
      background: `#fff url(https://i.ibb.co/Jr6JGYJ/gradient.png)`,
      timer: 6000,
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
    <div className="navbar bg-blue-100 lg:px-20">
      <div className="navbar-start  ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaAlignLeft className="h-16 text-2xl"></FaAlignLeft>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                className={({ isActive }) => isActive && "text-blue-700 "}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="">
              <a>Academic</a>
              <ul className="p-2">
                <li className="hover:bg-blue-100">
                  <Link to="academic/routine">Routine</Link>
                </li>
                <li className="hover:bg-blue-100">
                  <Link to="academic/notes">Notes</Link>
                </li>
                <li className="hover:bg-blue-100">
                  <Link to="academic/tutorial">Tutorial</Link>
                </li>
                <li className="hover:bg-blue-100">
                  <Link to="academic/questionbank">Question Bank</Link>
                </li>
              </ul>
            </li>
            <li className="">
              <a>Students</a>
              <ul className="p-2">
                <li className="hover:bg-blue-100">
                  <Link to="students/profileCard">Profile</Link>
                </li>
                <li className="hover:bg-blue-100">
                  <Link to="students/idCard">ID Card</Link>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => isActive && "text-blue-700 "}
                to="/faculty"
              >
                Faculty
              </NavLink>
            </li>
          </ul>
        </div>
        <Link>
          <img className="h-20" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-3 px-1">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-700 navBtn" : "navBtn"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="Btn3">
            <details>
              <summary>Academic</summary>
              <ul className="p-2">
                <li className="hover:bg-blue-100">
                  <Link to="academic/routine">Routine</Link>
                </li>
                <li className="hover:bg-blue-100">
                  <Link to="academic/notes">Notes</Link>
                </li>
                <li className="hover:bg-blue-100">
                  <Link to="academic/tutorial">Tutorial</Link>
                </li>
                <li className="hover:bg-blue-100">
                  <Link to="academic/questionbank">Question Bank</Link>
                </li>
              </ul>
            </details>
          </li>
          <li className="Btn3">
            <details>
              <summary>Students</summary>
              <ul className="p-2">
                <li className="hover:bg-blue-100">
                  <Link to="students/profileCard">Profile</Link>
                </li>
                <li className="hover:bg-blue-100">
                  <Link to="students/idCard">ID Card</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-700 navBtn" : "navBtn"
              }
              to="/faculty"
            >
              Faculty
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button onClick={handleMsgShow} className="Btn2">
          Message{" "}
          <ChatBubbleLeftRightIcon className="h-5"></ChatBubbleLeftRightIcon>{" "}
        </button>
      </div>
    </div>
  );
};

export default MyNav;
