import React from "react";

const ScubsCard = () => {
  return (
    <div className="w-full max-w-[960px] flex flex-col justify-start items-start py-20 gap-8">
      <div className="w-full flex justify-start items-center text-5xl font-medium">
        Choose Your Plant Subscription
      </div>
      <div className="w-full flex justify-between items-start gap-6">
        <div className="w-1/3 min-h-full flex flex-col justify-start items-start gap-2 font-light text-[#dfdfdf] py-4 hover:border-y-2 hover:hover-[#dfdfdf] duration-75 ease-in">
          <h4 className=" text-2xl font-medium text-[#fdfdfd]">Mono</h4>
          <p>
            Gift a single plant for a special event, providing a meaningful way
            to celebrate with nature.
          </p>
          <ol className="list-decimal list-inside flex flex-col justify-start items-start gap-1">
            <li>Customizable plant options</li>
            <li>Personalized gift cards</li>
            <li>Flexible delivery options</li>
          </ol>
        </div>
        <div className="w-1/3 min-h-full flex flex-col justify-start items-start gap-2 font-light  text-[#dfdfdf] py-4 hover:border-y-2 hover:hover-[#dfdfdf] duration-75 ease-in">
          <h4 className=" text-2xl font-medium text-[#fdfdfd]">Quad</h4>
          <p>
            Receive 4 beautiful plants for special occasions, perfect for those
            who appreciate long-lasting greenery.
          </p>
          <ol className="list-decimal list-inside flex flex-col justify-start items-start gap-1">
            <li>Unique plant choices</li>
            <li>Exceptional plant quality</li>
            <li>Personalized care guidance</li>
          </ol>
        </div>
        <div className="w-1/3 min-h-full flex flex-col justify-start items-start gap-2 font-light text-[#dfdfdf] py-4 hover:border-y-2 hover:hover-[#dfdfdf] duration-75 ease-in">
          <h4 className=" text-2xl font-medium text-[#fdfdfd]">Multi</h4>
          <p>
            Enjoy fresh surprises for all your special occasions with curated
            plants tailored to your preferences.
          </p>
          <ol className="list-decimal list-inside flex flex-col justify-start items-start gap-1">
            <li>Diverse plant selection</li>
            <li>Seasonal variety</li>
            <li>Easy care instructions</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ScubsCard;
