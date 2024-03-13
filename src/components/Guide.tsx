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
      className={`relative text-white text-2xl font-extrabold text-center pt-14 pb-12 px-28 w-[1200px] ${
        right
          ? "-mr-10 rounded-ss-[50px] rounded-es-[50px] bg-[linear-gradient(88.82deg,#454545_0.86%,#000000_100%)]"
          : "-ml-10 rounded-se-[50px] rounded-ee-[50px] bg-[linear-gradient(91.26deg,#000000_2.48%,#454545_100%)]"
      } ${className ?? ""}`}
    >
      <div
        className={`absolute top-0 ${
          right ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
        } -translate-y-1/2 w-[200px] h-[200px] flex items-center justify-center bg-[#7EA6EC] rounded-full text-[128px] text-white font-extrabold`}
      >
        {id}
      </div>
      <div
        className={`absolute flex items-center justify-center top-0 left-1/2 w-[400px] h-[80px] -translate-y-1/2 -translate-x-1/2 bg-white rounded-[40px] ${
          right ? "rounded-ee-none" : "rounded-es-none"
        }`}
      >
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt="image"
          className=""
        />
      </div>
      {children}
    </div>
  );
};

const Guide = () => {
  return (
    <div className="overflow-hidden mt-16">
      <h2 className="text-5xl font-bold ml-20">Guide</h2>
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
