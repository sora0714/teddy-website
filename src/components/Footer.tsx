import Reddit from "./svgs/Reddit"
import Telegram from "./svgs/Telegram"
import X from "./svgs/X"
import Github from "./svgs/github"

const Footer = () => {
  const socials = [
    {
      image: Github,
      link: "https://github.com/PontedProtocol",
    },
    {
      image: X,
      link: "https://x.com/pontedprotocol",
    },
    {
      image: Telegram,
      link: "https://t.me/PontedProtocol",
    },
    {
      image: Reddit,
      link: "https://reddit.com/r/pontedofficial",
    },
  ]

  return (
    <footer className="flex justify-center relative overflow-hidden bg-white pt-10">
      <div className="container px-5 md:px-10 lg:px-[150px] 3xl:px-0 z-[1]">
        <div className="flex max-lg:flex-wrap justify-between lg:space-x-16">
          <div className="max-lg:w-full">
            <img
              src={Logo.src}
              alt="logo"
              className="max-md:w-[72px] max-lg:w-[100px]"
            />
            <p className="max-md:text-xs mt-5 lg:mt-8 leading-8 lg:max-w-[480px]">
              At Ponted, we adhere to a philosophy of embracing new technologies
              amidst the rapid evolution of our industry. Remaining fluid and
              adaptable, shaping ourselves to seamlessly integrate with the
              ever-changing landscape of blockchain inscriptions.
            </p>
          </div>
          <div className="flex flex-col min-w-[80px] lg:min-w-[130px] xl:min-w-[170px] pt-6 md:pt-9">
            <h4 className="font-bold lg:font-medium text-sm md:text-2xl">
              Products
            </h4>
            <span
              // href={"/"}
              // target="_blank"
              // rel="noreferrer"
              className="text-xs md:text-lg hover:brightness-75 active:brightness-95 transition-all mt-4 lg:mt-10 cursor-pointer"
            >
              Token Bridge
            </span>
            <span
              // href={"/"}
              // target="_blank"
              // rel="noreferrer"
              className="text-xs md:text-lg hover:brightness-75 active:brightness-95 transition-all mt-3 lg:mt-6 cursor-pointer"
            >
              NFT Bridge
            </span>
            <span
              // href={"/"}
              // target="_blank"
              // rel="noreferrer"
              className="text-xs md:text-lg hover:brightness-75 active:brightness-95 transition-all mt-3 lg:mt-6 cursor-pointer"
            >
              Dashboard
            </span>
          </div>
          <div className="flex flex-col min-w-[90px] lg:min-w-[130px] xl:min-w-[170px] pt-6 md:pt-9">
            <h4 className="font-bold lg:font-medium text-sm md:text-2xl">
              Developer
            </h4>
            <span
              // href={"/"}
              // target="_blank"
              // rel="noreferrer"
              className="text-xs md:text-lg hover:brightness-75 active:brightness-95 transition-all mt-4 lg:mt-10 cursor-pointer"
            >
              Documentation
            </span>
            <Link
              href={"https://github.com/PontedProtocol"}
              target="_blank"
              rel="noreferrer"
              className="text-xs md:text-lg hover:brightness-75 active:brightness-95 transition-all mt-3 lg:mt-6"
            >
              Github
            </Link>
            <Link
              href={"Ponted_Branding_Guidelines.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-lg hover:brightness-75 active:brightness-95 transition-all mt-3 lg:mt-6"
            >
              Brand Guidelines
            </Link>
          </div>
          <div className="flex flex-col max-md:w-[108px] max-md:max-w-[calc(100%-170px)] lg:min-w-fit pt-6 md:pt-9">
            <h4 className="font-bold lg:font-medium text-sm md:text-2xl">
              Socials
            </h4>
            <Link
              href={"https://x.com/pontedprotocol"}
              target="_blank"
              rel="noreferrer"
              className="text-xs md:text-lg hover:brightness-75 active:brightness-95 transition-all mt-4 lg:mt-10"
            >
              X (Twitter)
            </Link>
            <Link
              href={"https://t.me/PontedProtocol"}
              target="_blank"
              rel="noreferrer"
              className="text-xs md:text-lg hover:brightness-75 active:brightness-95 transition-all mt-3 lg:mt-6"
            >
              Telegram
            </Link>
            <Link
              href={
                "https://pontedprotocol.notion.site/6f749ba698d5403c82cd39c69ba669e2?v=6d29a2151a60499dacd917bf5c2d5ace"
              }
              target="_blank"
              rel="noreferrer"
              className="text-xs md:text-lg hover:brightness-75 active:brightness-95 transition-all mt-3 lg:mt-6"
            >
              Media Kit
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center mt-10 lg:mt-14 w-full">
          <Link
            href={"mailto:team@ponted.io"}
            target="_blank"
            rel="noreferrer"
            className="text-xs md:text-lg hover:brightness-75 active:brightness-95 transition-all text-[#0085FF]"
          >
            team@ponted.io
          </Link>
          <div className="flex items-center space-x-2.5 w-full justify-center mt-4">
            {socials.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center w-[25px] lg:w-10 h-[25px] lg:h-10 hover:brightness-75 active:brightness-95 transition-all"
              >
                <Image
                  src={item.image.src}
                  width={item.image.width}
                  height={item.image.height}
                  alt="social"
                  className="w-full h-full"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t border-[#CDD6D7] text-center text-xs md:text-lg pt-2 lg:pt-5 pb-4 lg:pb-9 mt-2">
          © Copyright 2024 Ponted Protocol. ® All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer
