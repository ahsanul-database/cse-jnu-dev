import React, { useEffect, useState } from "react";
import anim from "../assets/chatbox.json";
import Lottie from "lottie-react";
import { FaSync } from "react-icons/fa";

const Message = () => {
  const [message, setMessage] = useState([]);
  const [randomIndex, setrandomIndex] = useState(0);
  const [msg, setMsg] = useState(message[0]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ahsanul-database/fakeDB/main/messageforyou.json"
    )
      .then((res) => res.json())
      .then((data) => setMessage(data));
  }, [message]);
  useEffect(() => {
    const position = Math.floor(Math.random() * message.length);
    const msg = message[position];
    setMsg(msg);
  }, [msg]);

  const randowmIndex = () => {
    const position = Math.floor(Math.random() * message.length);
    const msg = message[position];
    // setMsg(msg);
    // return msg;
  };
  const handleMsgShow = () => {
    const length = message.length;
    const position = Math.floor(Math.random() * length);
    const msg = message[position];
    setMsg(msg);
  };
  return (
    <div className="flex gap-5 lg:px-20  py-10">
      <div className="w-full hidden lg:block">
        <Lottie className="h-60" animationData={anim}></Lottie>
      </div>
      <div className="w-full ">
        <div className=" bg-gradient-to-tr rounded from-pink-300 to-blue-300 p-0.5 shadow-lg">
          <div className="bg-base-100 h-60 rounded p-5 relative flex flex-col">
            <img
              onClick={handleMsgShow}
              className="absolute -top-9  w-[60px] border h-[60px] object-cover rounded-full p-2 bg-slate-100 duration-300 hover:scale-105"
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL2pvYjk2OC1lbGVtZW50LTAxMi14LmpwZw.jpg"
              alt=""
            />
            <p className="py-5 myText flex-1">
              {msg ? (
                msg
              ) : (
                <p>Click Icon(Diamond or Double Arrow) to get Your Message!</p>
              )}
            </p>
            <div className="flex justify-center mt-5">
              <button onClick={handleMsgShow}>
                <FaSync />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
