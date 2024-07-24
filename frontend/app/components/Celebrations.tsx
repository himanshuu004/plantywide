import React from "react";
import "./Celebrations.css";

const Celebrations = () => {
  return (
    <div className="w-full max-w-[960px] flex flex-col  justify-start items-start py-20 gap-8  text-[#212121]">
      <div className="w-full flex justify-start  items-center text-5xl font-medium ">
        Occasions We Celebrate
      </div>
      <div className=" w-full flex justify-start items-start gap-4">
        <div className=" flex flex-col items-start justify-start text-2xl align-text-bottom ">
          <div className="hexagon-concave flex justify-center items-center ">
            {" "}
            1
          </div>
          <div className="hexagon-concave flex justify-center items-center ">
            {" "}
            2
          </div>
          <div className="hexagon-concave flex justify-center items-center ">
            {" "}
            3
          </div>
          <div className="hexagon-concave flex justify-center items-center ">
            {" "}
            4
          </div>
          <div className="hexagon-concave flex justify-center items-center ">
            {" "}
            5
          </div>
        </div>
        <div className=" flex flex-col items-start justify-start text-lg align-text-bottom">
          <div className=" w-auto h-[150px] flex flex-col justify-start items-start py-4">
            <h4 className=" font-bold text-2xl ">Birthdays</h4>
            <p>
              {" "}
              Celebrate new beginnings with a vibrant plant symbolizing growth
              and joy.
            </p>
          </div>
          <div className=" w-auto h-[150px] flex flex-col justify-start items-start py-4">
            <h4 className=" font-bold text-2xl ">Anniversaries</h4>
            <p>
              {" "}
              Commemorate love and commitment with a timeless plant that
              represents enduring beauty.
            </p>
          </div>
          <div className=" w-auto h-[150px] flex flex-col justify-start items-start py-4">
            <h4 className=" font-bold text-2xl ">Graduations</h4>
            <p>
              {" "}
              Congratulate achievements with a plant that signifies new chapters
              and exciting opportunities.
            </p>
          </div>
          <div className=" w-auto h-[150px] flex flex-col justify-start items-start py-4">
            <h4 className=" font-bold text-2xl ">Holidays</h4>
            <p>
              {" "}
              Spread festive cheer with seasonal plants that bring a touch of
              nature indoors.
            </p>
          </div>
          <div className=" w-auto h-[150px] flex flex-col justify-start items-start py-4">
            <h4 className=" font-bold text-2xl ">New Home</h4>
            <p>
              {" "}
              Welcome loved ones to their new abode with a plant that symbolizes
              growth and prosperity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Celebrations;
