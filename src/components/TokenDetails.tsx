import Image from "next/image";

import Token from "@/assets/token.jpg";
import Logo from "@/assets/logo.png";
import Link from "next/link";

const TokenDetails = () => {
  const info = [
    {
      title: "Token Name",
      value: "Teddy Bear INU",
    },
    {
      title: "Token Symbol",
      value: "$TBI",
    },
    { title: "Max Token Supply", value: "9,000,000,210" },
    { title: "Token Pair", value: "TBI\\WPLS" },
    { title: "Decimals", value: "18" },
    { title: "Token Type", value: "PRC-20 Standard" },
    { title: "Blockchain", value: "Pulsechain" },
    { title: "Tax In / Tax Out", value: "0% - 0%" },
  ];

  return (
    <div>
      <div className="container block 1xl:flex items-center mt-[108px] ">
        <Image
          src={Token.src}
          width={Token.width}
          height={Token.height}
          alt="token"
          className=" rounded-[50px] 1xl:ml-0 1xl:rounded-se-[50px]  1xl:rounded-ee-[50px]  w-[39vw] "
        />
        <div className="-mt-[79px]">
          <h2 className="2xl:text-5xl text-[24px] font-bold ml-[25px]">The Token</h2>
          <span className="2xl:text-2xl text-[16px] font-semibold text-[#00186C]/50 ml-[25px]">
            Token Details
          </span>
          <div className="relative flex items-center border border-r-0 border-black bg-white rounded-ss-[50px] rounded-es-[50px] py-[22px] -ml-[9vw] mt-7 w-[69vw]">
            <Image
              src={Logo.src}
              width={Logo.width}
              height={Logo.height}
              alt="logo"
              className="absolute top-0 left-0 w-[120px] -translate-y-1/2 -translate-x-1/3"
            />
            <div className="border-r border-black space-y-7 pr-8 pl-[2vw]">
              {info.map((item) => (
                <div
                  key={item.title}
                  className="text-[16px] 2xl:text-2xl font-semibold whitespace-nowrap"
                >
                  {item.title}:{" "}
                  <span className="font-extrabold">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="ml-8">
              <h3 className="text-4xl font-extrabold">Overview</h3>
              <p className="text-[16px] 2xl:text-2xl font-semibold mt-6 pr-7">
                <span className="font-extrabold">Teddy Bear Inu</span> offers
                the best of both worlds: the fun of a cute meme coin and the
                value of an ultra-scarce crypto asset. Every new holder and
                buyer of the limited supply contributes to pushing{" "}
                <span className="font-extrabold">$TBI</span> price upwards,
                following simple supply/demand economics, offering early
                adopters the potential for significant profits.
              </p>
              <h3 className="2xl:text-4xl text-[20px] font-extrabold mt-6">Key Features</h3>
              <ul className="2xl:text-2xl text-[16px] font-semibold list-disc mt-6 ml-4">
                <li>
                  Micro{" "}
                  <span className="font-extrabold text-[#287803]">
                    9 Billion
                  </span>{" "}
                  max supply
                </li>
                <li>
                  <span className="font-extrabold text-[#287803]">
                    ZERO buy/sell
                  </span>{" "}
                  taxes for price pump potential
                </li>
                <li>
                  <span className="font-extrabold text-[#287803]">$95,000</span>{" "}
                  Liquidity
                </li>
                <li>
                  Strong{" "}
                  <span className="font-extrabold text-[#287803]">
                    Community
                  </span>{" "}
                  of holders
                </li>
                <li>
                  Accessible{" "}
                  <span className="font-extrabold text-[#287803]">ONLY</span> on{" "}
                  {""}
                  <span className="font-extrabold bg-[linear-gradient(90.37deg,#00F0FF_0%,#000AFF_46%,#EA00FE_90%)] bg-clip-text text-transparent">
                    PulseChain
                  </span>{" "}
                  DEXs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto flex items-center w-fit bg-[linear-gradient(101.95deg,#000000_4.57%,#454545_104.53%)] rounded-full p-1.5 pr-16 mt-[66px] z-[1]">
        <Image
          src={Logo.src}
          width={Logo.width}
          height={Logo.height}
          alt="logo"
          className="w-[42px] 2xl:w-[78px]"
        />
        <span className="text-white text-[16px] 2xl:text-[32px] font-bold ml-[30px]">
          Contract Address :{" "}
          <Link
            href={
              "https://scan.mypinata.cloud/ipfs/bafybeidn64pd2u525lmoipjl4nh3ooa2imd7huionjsdepdsphl5slfowy/#/token/0xee9082DaEA925Be8F79f1b2c457fC9470A104414"
            }
            target="_blank"
            rel="noreferrer"
            className="underline hover:brightness-75 active:brightness-95 transition-all"
          >
            0xee9082DaEA925Be8F79f1b2c457fC9470A104414
          </Link>
        </span>
      </div>
    </div>
  );
};

export default TokenDetails;
