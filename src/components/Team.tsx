import TeamImg from "@/assets/team.jpg";
import Image from "next/image";

const Team = () => {
  return (
    <div className="container flex items-center pl-[66px]">
      <div className="flex flex-col mr-[90px] -mt-[80px]">
        <h2 className="text-5xl font-bold text-right">The Team</h2>
        <span className="text-2xl font-semibold text-[#00186C]/50 text-right">
          Spotlight
        </span>
        <p className="text-2xl font-semibold mt-[68px]">
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
        className="w-[830px] min-w-[830px] h-[720px] rounded-ss-[50px] rounded-es-[50px] object-cover object-[center_19%]"
      />
    </div>
  );
};

export default Team;
