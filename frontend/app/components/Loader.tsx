import React from "react";

const Loader = () => {
  return (
    <div className="w-full gap-x-2 flex justify-center items-center">
      <div className="w-5 bg-[#f9ffc9] animate-pulse h-5 rounded-full  delay-0"></div>
      <div className="w-5 animate-pulse h-5 bg-[#dcff50] rounded-full delay-75"></div>
      <div className="w-5 h-5 animate-pulse bg-[#9cb230] rounded-full  delay-150"></div>
    </div>
  );
};

export default Loader;
