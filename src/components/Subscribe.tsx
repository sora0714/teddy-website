import Image from "next/image";
import Subimage from "../assets/subscribe.png"


const Subscribe = () => {
 

  return (
    <div className="block 1xl:flex  mb-[248px]">
  <Image src={Subimage} alt="subimage" className="w-[100vw] h-[80vw] 1xl:w-[50vw] 1xl:h-[40vw]"/>
  <div className="w-[100vw] h-[80vw] 1xl:w-[50vw] 1xl:h-[40vw] bg-white">
    <div className="text-center text-[32px]; 2xl:text-[48px] text-black font-bold pt-[30px]"><div className="text-[32px] 2xl:text-[48px]">Subscribe</div>
        <div className=" text-[16px] 2xl:text-[24px] font-semibold text-[#00186C] mt-0">don't miss out</div>
    </div>
    <div className="mx-[2vw] text-center text-[15px] 2xl:text-[24px] text-black font-extrabold mt-[100px] 2xl:mt-[40px]">Get the latest news, updates, and exclusive offers delivered straight to your inbox.
</div>
<div className=" w-[72vw] 1xl:w-[36vw] h-[4vw] ml-[14vw] 1xl:ml-[9vw] flex mt-[170px] 2xl:mt-[40px]">
<input
      type="text"
      className="bg-white border-b-2 border-black focus:border-gray-600 py-2 px-4 outline-none w-[62%] h-[100%]"
      placeholder="Your E-mail"

    />
    <button className="bg-white text-[14px] 2xl:text-[32px] text-[#FE0000]  rounded text-center border-2 border-black w-[38%] h-[100%]">
       Subscribe
      </button>
  </div>
  <div className="text-center text-[#00186C] text-[12px] 2xl:text-[24px] mt-[7vw]">Be part of our community, and never <br/> miss a beat. </div>
  </div>

    </div>
  );
};

export default Subscribe;
