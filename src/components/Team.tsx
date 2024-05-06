import TeamImg from "@/assets/team.jpg";
import Image from "next/image";

const Team = () => {
  return (
    <div className="container block 2ml:flex items-center pl-[66px] pb-[61px] bg-white">
      <div className="flex flex-col mr-[20px] mt-[20]px 2xl:-mt-[80px] mr-[80px]">
        <h2 className="text-[24px] font-bold text-right 2xl:text-5xl">The Team</h2>
        <span className="text-[16px] font-semibold text-[#00186C]/50 text-right 2xl:text-2xl">
          Spotlight
        </span>
        <p className="text-[16px] font-semibold mt-[68px] 2xl:text-2xl">
          <span className="font-extrabold">Our objective:</span> To showcase to
          the broader crypto community the viability and vibrancy of
          contributing to this thrilling ecosystem. We aim to foster an
          environment where creativity thrives, self-expression flourishes, and
          inclusivity reigns supreme. Behind the scenes, our efforts are
          dedicated to fortifying the foundation. We bolster resilience, infuse
          liquidity into the ecosystem daily, and forge alliances with fellow
          community-driven projects, fostering opportunities for all. <br />
          <br />
          <span className="font-extrabold">Teddy Bear INU</span> isn't just a
          token; it's your companion in this journey. Everyone deserves a
          reliable ally. Let's embark on this adventure together!
        </p>
      </div>
      <Image
        src={TeamImg.src}
        width={TeamImg.width}
        height={TeamImg.height}
        alt="team"
        className="ml-[25%] 2ml:ml-0 w-[43%] rounded-[50px] 2ml:rounded-ss-[50px] rounded-es-[50px] object-cover object-[center_19%] mt-[61px]"
      />
    </div>
  );
};

export default Team;
