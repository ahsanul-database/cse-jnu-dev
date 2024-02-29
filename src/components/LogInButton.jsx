import React from "react";

const LogInButton = ({ children, ...rest }) => {
  return (
    <button
      className="w-fit px-8 z-30 h-12 border-2 border-sky-300 text-sky-800 font-black rounded-full hover:text-white duration-300 relative group"
      {...rest}
    >
      <span className="absolute w-8 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span>
      {children}
    </button>
  );
};

export default LogInButton;
