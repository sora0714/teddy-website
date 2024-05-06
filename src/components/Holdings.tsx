import Image, { StaticImageData } from "next/image";

import HoldingsImg from "@/assets/holding.jpg";
import Whale from "@/assets/holdings/whale.jpg";
import Shark from "@/assets/holdings/shark.jpg";
import Dolphin from "@/assets/holdings/dolphin.jpg";
import Squid from "@/assets/holdings/squid.jpg";
import Turtle from "@/assets/holdings/turtle.jpg";
import Crab from "@/assets/holdings/crab.jpg";
import Shrimp from "@/assets/holdings/shrimp.jpg";

interface HoldingCardProps {
  image: StaticImageData;
  title: string;
  value: string;
  className?: string;
}

const HoldingCard: React.FC<HoldingCardProps> = ({
  image,
  title,
  value,
  className,
}) => {
  return (
    <div
      className={`flex items-center bg-white p-2.5 rounded-full 1xl:rounded-se-full rounded-es-full w-full ${
        className ?? ""
      }`}
    >
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={title}
        className="w-[64px] 2ml:w-[80px] 2xl:w-[180px]  rounded-full"
      />
      <div className="ml-[10px] 1xl:ml-20 flex flex-col">
        <span className="text-[12px] 2ml:text-[20px] 2xl:text-[40px] font-semibold">{title}</span>
        <span className="text-[15px] 2ml:text-[20px] 2xl:text-[56px] font-black">{value} TBI</span>
      </div>
    </div>
  );
};

const Holdings = () => {
  const info = [
    {
      title: "WhaleINU",
      value: "90,000,000",
      image: Whale,
    },
    {
      title: "SharkINU",
      value: "9,000,000",
      image: Shark,
    },
    {
      title: "DolphinINU",
      value: "900,000",
      image: Dolphin,
    },
    {
      title: "SquidINU",
      value: "90,000",
      image: Squid,
    },
    {
      title: "TurtleINU",
      value: "9,000",
      image: Turtle,
    },
    {
      title: "CrabINU",
      value: "900",
      image: Crab,
    },
    { title: "ShrimpINU", value: "90", image: Shrimp },
  ];

  return (
    <div className="container mt-[55px]">
      <div className="mr-[66px] flex flex-col">
        <h2 className="text-[24px] 2xl:text-5xl font-bold text-right">TBI Holdings Rank</h2>
        <span className="text-[16px] 2xl:text-2xl font-semibold text-[#00186C]/50 text-right">
          Check your ranking
        </span>
      </div>
      <div className="block px-[22vw] 1xl:flex 1xl:px-0 items-center mt-10">
        <Image
          src={HoldingsImg.src}
          width={HoldingsImg.width}
          height={HoldingsImg.height}
          alt="holding"
          className="rounded-[50px] 1xl:rounded-se-[50px] rounded-ee-[50px] w-[55vw]  object-cover object-center mr-16"
        />
        <div className="flex flex-col space-y-2 2xl:space-y-9 w-full">
          {info.map((item) => (
            <HoldingCard
              key={item.title}
              image={item.image}
              title={item.title}
              value={item.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Holdings;
