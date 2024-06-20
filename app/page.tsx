import Image from "next/image";
import Hero from "./components/Hero";
import Occasions from "./components/occasions";
import ScubsCard from "./components/ScubsCard";
import PlantPicks from "./components/PlantPicks";
import Celebrations from "./components/Celebrations";
import GetStarted from "./components/GetStarted";
import { JetBrains_Mono } from "@next/font/google";
import GifthGrowth from "./components/GifthGrowth";
import WhyUs from "./components/WhyUs";

const jetBrainsMono = JetBrains_Mono({
  weight: ["200", "300", "400", "500", "600", "700", "800"], // You can specify the weight and other options
  subsets: ["latin"], // Specify the subsets you want to use
});
export default function Home() {
  return (
    <main
      className={`w-full h-full bg-[#212121] text-[#fdfdfd] flex flex-col justify-center items-center ${jetBrainsMono.className}`}
    >
      <div className="w-full h-full bg-[#212121] text-[#fdfdfd] flex flex-col justify-center items-center">
        <Hero />
        <Occasions />
        <ScubsCard />
      </div>
      <div className="w-full h-full bg-[#dfdfdf] text-[#fdfdfd] flex flex-col justify-center items-center">
        <PlantPicks />
      </div>
      <div className="w-full h-full bg-[#a9f00f] text-[#fdfdfd] flex flex-col justify-center items-center">
        <Celebrations />
      </div>
      <div className="w-full h-full bg-[#212121] text-[#fdfdfd] flex flex-col justify-center items-center">
        <GifthGrowth />
      </div>
      <div className="w-full h-full bg-[#a9f00f] text-[#fdfdfd] flex flex-col justify-center items-center">
        <WhyUs />
      </div>
      <div className="w-full h-full bg-[#dfdfdf] text-[#fdfdfd] flex flex-col justify-center items-center">
        <GetStarted />
      </div>
    </main>
  );
}
