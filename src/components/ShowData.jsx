import React from "react";

const ShowData = ({ fieldName, data, className }) => {
  return (
    <div className="flex gap-1" key={fieldName}>
      <h1 className="font-bold text-lg lg:text-xl capitalize">
        {fieldName} :{" "}
      </h1>
      <p className="text-lg ">{data}</p>
    </div>
  );
};

export default ShowData;
