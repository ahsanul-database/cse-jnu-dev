import React from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

const Languages = () => {
  const percentage = 60;
  return (
    <div className="py-10">
      <h1 className="text-3xl">Language I Know</h1>
      <div className="grid grid-cols-4 gap-10  px-5  py-5">
        <div>
          <CircularProgressbarWithChildren className="h-28" value={72}>
            <img
              className="h-10"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/459px-ISO_C%2B%2B_Logo.svg.png"
              alt=""
            />
          </CircularProgressbarWithChildren>
        </div>
        <div>
          <CircularProgressbarWithChildren className="h-28" value={90}>
            <img
              className="h-10 text-center "
              src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"
              alt=""
            />
          </CircularProgressbarWithChildren>
        </div>
        <div>
          <CircularProgressbarWithChildren className="h-28" value={85}>
            <img
              className="h-10"
              src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
              alt=""
            />
          </CircularProgressbarWithChildren>
        </div>
        <div>
          <CircularProgressbarWithChildren className="h-28" value={85}>
            <img
              className="h-10"
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt=""
            />
          </CircularProgressbarWithChildren>
        </div>
        <div>
          <CircularProgressbarWithChildren className="h-28" value={45}>
            <img
              className="h-10"
              src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
              alt=""
            />
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </div>
  );
};

export default Languages;
