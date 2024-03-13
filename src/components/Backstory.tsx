import Image from "next/image";
import BackstoryImg from "@/assets/backstory.jpg";

const Backstory = () => {
  return (
    <div className="container flex items-center space-x-6 mt-44">
      <Image
        src={BackstoryImg.src}
        width={BackstoryImg.width}
        height={BackstoryImg.height}
        alt="backstory"
        className="rounded-se-[50px] rounded-ee-[50px] w-[1000px] min-w-[1000px] h-[580px] object-cover object-[center_31%]"
      />
      <div>
        <h2 className="text-4xl font-bold">In a World Of Soft Cuddles</h2>
        <span className="text-2xl font-semibold text-[#00186C]/50 mt-0.5">
          Backstory
        </span>
        <p className="text-2xl font-semibold mt-6">
          Introducing the adorably unique meme coin! While other coins like Doge
          and Shiba flood the market with billions of tokens annually, Teddy
          Bear Inu stands out with genuine scarcity.
        </p>
      </div>
    </div>
  );
};

export default Backstory;
