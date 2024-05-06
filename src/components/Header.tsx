import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/logo.png";

const Header = () => {
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/",
    },
    {
      title: "Team",
      link: "/",
    },
    {
      title: "Guide",
      link: "/",
    },
    {
      title: "Swap",
      link: "/",
    },
    {
      title: "Token",
      link: "/",
    },
    {
      title: "Dapps",
      link: "/",
    },
    {
      title: "Roadmap",
      link: "/",
    },
  ];

  return (
    <header className="container flex items-center justify-between bg-[#FFF970] py-1.5">
      <div className="flex items-center">
        <Image src={Logo.src} width={Logo.width} height={Logo.height} alt="logo" className="  w-[40px]  ml-[30px]1ml:w-[51px] 2ml:w-[65px] 1xl:w-[80px] 2xl:w-[127px]"  />
        <span className="2xl:text-[40px] uppercase font-black ml-3 1ml:text- xzx[30px] 2ml:text-[35px] ">Teddy Bear INU</span>
      </div>
      <div className="text-xl font-bold border-[3px] py-1 px-8 rounded-full border-black bg-white 0xl:hidden  2xl:block ">
        $0.0001243
      </div>
      <div className="flex items-center space-x-6">
        {links.map((item) => (
          <Link href={item.link}
            className="text-[#000B33]/50 text-20 font-bold hover:text-black transition-all 0xl:hidden 1xl:block 2xl:text-xl "
          >
            {item.title}
          </Link>
        ))}
      </div>
      <a
        href="/"
        target="_blank"
        rel="noreferrer"
        className="text-white text-xl font-extrabold py-2 px-6 rounded-full bg-[linear-gradient(101.95deg,#000000_4.57%,#8E8E8E_104.53%)] hidden 2xl:block"
      >
        Buy Now
      </a>
    </header>
  );
};

export default Header;
