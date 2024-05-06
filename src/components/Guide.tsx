import Image, { StaticImageData } from "next/image";

import Metamask from "@/assets/metamask.svg";
import Pulsechain from "@/assets/pulsechain.svg";
import Bridge from "@/assets/bridge.svg";
import Link from "next/link";

interface GuideCardProps {
  image: StaticImageData;
  id: number;
  children: React.ReactNode;
  right?: boolean;
  className?: string;
}

const GuideCard: React.FC<GuideCardProps> = ({
  image,
  id,
  children,
  right,
  className,
}) => {
  return (
    <div
      className={`relative text-white text-[12px] 2ml:text-[16px]font-extrabold text-center py-[22px] px:[17px] 2ml:pt-[53px] 2ml:pb-[53px] 2ml:px-[72px] w-[100%] 1ml:w-[428px] 2ml:w-[840px] 2xl:w-[1200px] 2xl:text-[24px] 2xl:pt-14 2xl:pb-12  2xl:px-28 ${
        right
          ? "-mr-10 rounded-ss-[50px] rounded-es-[50px]"
          : "-ml-10 rounded-se-[50px] rounded-ee-[50px]"
      } border-[3px] border-transparent ${className ?? ""}`}
      style={{
        background: right
          ? "linear-gradient(88.82deg,#454545 0.86%,#000000 100%) padding-box,linear-gradient(88.82deg,#00F0FF 0%,#000AFF 24%,#8F00FF 51%,#EA00FE 75%,#FE0000 100%) border-box"
          : "linear-gradient(91.26deg,#000000 2.48%,#454545 100%) padding-box,linear-gradient(88.82deg,#00F0FF 0%,#000AFF 24%,#8F00FF 51%,#EA00FE 75%,#FE0000 100%) border-box",
      }}
    >
      <div
        className={`absolute top-0 ${
          right ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
        } -translate-y-1/2 w-[50px] h-[50px] 2xl:w-[200px] 2xl:h-[200px] 2ml:w-[86px] 2ml:h-[86px] flex items-center justify-center bg-[#61ccf8] rounded-full 2xl:text-[128px] text-[30px] 2ml:text-[70px] text-white font-extrabold`}
      >
        {id}
      </div>
      <div
        className={`absolute flex items-center justify-center top-0 left-1/2 2xl:w-[400px] 2xl:h-[80px]  xl:w-[258px] -translate-y-1/2 -translate-x-1/2 border-[3px] border-transparent rounded-[40px] ${
          right ? "rounded-ee-none" : "rounded-es-none"
        }`}
        style={{
          background:
            "linear-gradient(-198deg,#fff,#fff) padding-box,linear-gradient(135deg,#00F0FF 0%,#000AFF 24%,#8F00FF 51%,#EA00FE 75%,#FE0000 98%) border-box",
        }}
      >
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt="image"
          className="w-[80%]"
        />
      </div>
      {children}
    </div>
  );
};

const Guide = () => {
  return (
    <div className="container overflow-hidden mt-16 mb-[50px]">
      <h2 className="  2ml:text-5xl font-bold ml-20">Guide</h2>
      <span className="text-2xl font-semibold text-[#00186C]/50 ml-20">
        Step by Step
      </span>
      <GuideCard id={1} image={Metamask} className="mt-20">
        Download MetaMask or your preferred wallet from google play or App
        Store.
        <br />
        <br />
        Alternatively, you can visit{" "}
        <Link
          href={"https://metamask.io"}
          target="_blank"
          rel="noreferrer"
          className="hover:brightness-90 active:brightness-95 transition-all underline"
        >
          metamask.io
        </Link>
         to get the Google chrome extension for desktop users.
      </GuideCard>
      <GuideCard id={2} image={Pulsechain} right className="mt-32 ml-auto">
        Visit the{" "}
        <Link
          href={"https://pulsechain.com"}
          target="_blank"
          rel="noreferrer"
          className="hover:brightness-90 active:brightness-95 transition-all underline"
        >
          pulsechain.com
        </Link>
         website. Click the ‘add Pulsechain to MetaMask’ button on their
        homepage. Click ‘Confirm’ on your MetaMask wallet to add the Pulsechain
        network.
      </GuideCard>
      <GuideCard id={3} image={Bridge} className="mt-32">
        If you need to bridge ERC20 tokens into $PLS you can bridge using
        portalXswap.io and bridge in from networks such as Ethereum, BSC, Avax,
        Solana, Polygon and much more.
        <br />
        Once bridged you can swap $PLS for $TBI using{" "}
        <Link
          href={"https://piteas.io"}
          target="_blank"
          rel="noreferrer"
          className="hover:brightness-90 active:brightness-95 transition-all underline"
        >
          piteas.io
        </Link>
      </GuideCard>
    </div>
  );
};

export default Guide;
