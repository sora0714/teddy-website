import Link from "next/link";

import PulseX from "@/assets/pulsex.svg";
import Ninemm from "@/assets/9mm.png";
import PulseBridge from "@/assets/pulsebridge.svg";
import PortalX from "@/assets/portalx.svg";
import Dextools from "@/assets/dextools.svg";
import Dexscreener from "@/assets/dexscreener.png";
import Image from "next/image";

const Dapps = () => {
  return (
    <div className="mt-32">
      <div className="container pl-[66px]">
        <h2 className="text-5xl font-bold">DAPPS</h2>
        <span className="text-2xl font-semibold text-[#00186C]/50">
          Get in touch with TeddyBear INU
        </span>
      </div>
      <div className="bg-black py-[60px] mt-9">
        <div className="container flex justify-between">
          <div className="flex flex-col items-center w-full mx-12">
            <span className="text-5xl font-bold text-white underline">DEX</span>
            <Link
              href={"/"}
              target="_blank"
              rel="noreferrer"
              className="mt-20 hover:scale-105 transition-all"
            >
              <Image
                src={PulseX.src}
                width={PulseX.width}
                height={PulseX.height}
                alt="pulsex"
              />
            </Link>
            <Link
              href={"/"}
              target="_blank"
              rel="noreferrer"
              className="mt-20 hover:scale-105 transition-all"
            >
              <Image
                src={Ninemm.src}
                width={Ninemm.width}
                height={Ninemm.height}
                alt="9mm"
              />
            </Link>
          </div>
          <div className="w-px bg-white shadow-[0_0_8.5px_#FFF,0_0_8.5px_#FFF,0_0_8.5px_#FFF,0_0_8.5px_#FFF,0_0_8.5px_#FFF,0_0_8.5px_#FFF,0_0_8.5px_#FFF,0_0_8.5px_#FFF]" />
          <div className="flex flex-col items-center w-full mx-12">
            <span className="text-5xl font-bold text-white underline">
              Bridge
            </span>
            <Link
              href={"/"}
              target="_blank"
              rel="noreferrer"
              className="mt-28 hover:scale-105 transition-all"
            >
              <Image
                src={PulseBridge.src}
                width={PulseBridge.width}
                height={PulseBridge.height}
                alt="pulse-bridge"
              />
            </Link>
            <Link
              href={"/"}
              target="_blank"
              rel="noreferrer"
              className="mt-[120px] hover:scale-105 transition-all"
            >
              <Image
                src={PortalX.src}
                width={PortalX.width}
                height={PortalX.height}
                alt="portal-x"
              />
            </Link>
          </div>
          <div className="w-px bg-white shadow-[0_0_8.5px_#FFF,0_0_8.5px_#FFF,0_0_8.5px_#FFF,0_0_8.5px_#FFF,0_0_8.5px_#FFF,0_0_8.5px_#FFF,0_0_8.5px_#FFF,0_0_8.5px_#FFF]" />
          <div className="flex flex-col items-center w-full mx-12">
            <span className="text-5xl font-bold text-white underline">
              Charts
            </span>
            <Link
              href={"/"}
              target="_blank"
              rel="noreferrer"
              className="mt-[86px] hover:scale-105 transition-all"
            >
              <Image
                src={Dextools.src}
                width={Dextools.width}
                height={Dextools.height}
                alt="dextools"
              />
            </Link>
            <Link
              href={"/"}
              target="_blank"
              rel="noreferrer"
              className="mt-[120px] hover:scale-105 transition-all"
            >
              <Image
                src={Dexscreener.src}
                width={Dexscreener.width}
                height={Dexscreener.height}
                alt="dexscreener"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dapps;
