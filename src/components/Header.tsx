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
    <header className="container flex items-center justify-between bg-[#FFE294] py-1.5">
      <div className="flex items-center">
        <Image src={Logo.src} width={Logo.width} height={Logo.height} alt="logo" className="w-[80px]" />
        <span className="uppercase text-[40px] font-black ml-3">Teddy Bear INU</span>
      </div>
      <div className="text-xl font-bold border-[3px] py-1 px-8 rounded-full border-black bg-white">
        $0.0001243
      </div>
      <div className="flex items-center space-x-6">
        {links.map((item) => (
          <Link
            href={item.link}
            className="text-[#000B33]/50 text-xl font-bold hover:text-black transition-all"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <a
        href="/"
        target="_blank"
        rel="noreferrer"
        className="text-white text-xl font-extrabold py-2 px-6 rounded-full bg-[linear-gradient(101.95deg,#000000_4.57%,#8E8E8E_104.53%)]"
      >
        Buy Now
      </a>
    </header>
  );
};

export default Header;
