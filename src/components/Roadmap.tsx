import Rocket from "./svgs/Rocket";
import Image from "next/image";
import Vector from "../assets/Vector.svg";
import Vector1 from "../assets/vertor1.png";
import Rocket1 from "../assets/rocket1.svg";
interface PhaseCardProps {
  id: number;
  title: string;
  items: string[];
  className?: string;
  className2?:string;
}

const PhaseCard: React.FC<PhaseCardProps> = ({
  id,
  title,
  items,
  className,
  className2
}) => {
  return (
    <div className="mx-4">
      <h4 className={`text-[16px] 2ml:text-xl font-bold  text-center  px-0 w-[350px]  ${className2 ??""}`} >
        Phase {id}: {title}
      </h4>
      <div className="flex"><ul className="bg-white border-4 border-black rounded-[50px] w-[250px] 2ml:w-[384px] h-[681px] py-[75px] text-center mx-[10px]">
        {items.map((item, i) => (
          <li key={i} className="text-[15px] 2ml:text-xl font-medium flex py-[5px] px-2 text-left">
            <Image src={Vector} alt=""  className="w-5 h-4 mt-1 px-1"  />
            {item}
          </li>
        ))}
        
      </ul>
      <Image src={Vector1} alt="" className={`w-[24px] h-[18px] mt-[382px] ml-6 hidden 2xl:blcok ${className ?? ""}`}/></div>
      
    </div>
  );
};

const Roadmap = () => {
  const info = [
    { id: 1,
      title: "Research & Planning",
      items: [
        "Clearly define TBI's unique value prop focused on the memecoin theme",
        "Develop strong holding community.",
        "Assemble top-tier development team with memecoin experience",
        "Produce detailed technical whitepaper outlining TBI's architecture",
        "Coin Gecko",
        "Dextools",
        "Dexscreener",
        "LP provided PLS, eDAI",
      ],
      className2:"my-[30px]"
    },
    {id:2,
      title: "Testing",
      items: [
        "Contract Verified ",
        "Rigorous testing, bug bounties, testnet simulations completed",
        "Owner Renounced",
        "Holder Increase",
        "Telegram 400+ members",
        "Meme contest",
        "X account 200+ members",
      ],
      className2:"my-[30px]"
    },
    {id:3,
      title: " Launch & Ecosystem Growth",
      items: [
        "Major marketing push engaging top crypto/meme influencers",
        "Establish partnerships with leading brands in the private sector",
        "Office location",
        "Company registration ",
        "In house graphic designers",
        "Content creators",
        "Onboard strategic partners",
        "I’s dotted and t’s crossed",
      ],
      className2:"my-[17px]"
    },
    {id:4,
      title: "Research & Planning",
      items: [
        "Ecosystem fund and development grants",
        "Launch of Comic",
        "Launch education videos ",
        "TBI merchant integration with major e-commerce retailers",
        "Launch initial TBI ecosystem dApps - NFTs, merch store, games",
        "Implement full community governance and proposals system.",
      ],
      className2:"my-[30px]",
      className:"hidden"
    },
  ];

  return (
    <div>
      <div className="container px-[35px] mt-16 mb-[248px]">
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center">
          <h2 className=" text-[20px] 2ml:text-[24px] 2xl:text-5xl font-bold">Roadmap</h2>
          <span className="text-[12px] 2ml:text-[20px] 2xl:text-2xl font-semibold text-[#00186C]/50">
            Future Plans
          </span>
        </div>
        <Rocket className="ml-[15px] 2ml:ml-10 w-[38px] 2ml:w-[53px] 2xl:w-[70px]" />
      </div>
      <div className="flex-col  2ml:flex justify-between flex items-center 2ml:flex-wrap ">
      {info.map((data) => (
            <PhaseCard
              key={data.id}
              id={data.id}
              title={data.title}
              items={data.items}
              className={data.className}
              className2={data.className2}
            />
          ))}
        

      </div>
      <Image src={Rocket1} alt="" className="float-right"></Image>
    </div>
    </div>
    
  );
};

export default Roadmap;
