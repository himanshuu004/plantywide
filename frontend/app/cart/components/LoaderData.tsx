import React from "react";

interface LoaderDataProps {
  size: number;
}

const LoaderData: React.FC<LoaderDataProps> = ({ size }) => {
  return (
    <div className="flex-col gap-1 w-full flex items-center justify-center">
      <div
        className={`w-${size} h-${size} border-2 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full`}
      ></div>
    </div>
  );
};

export default LoaderData;
