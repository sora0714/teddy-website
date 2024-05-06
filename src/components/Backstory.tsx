
  "use client";

  import Image from "next/image";
  import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
  import { Autoplay } from "swiper/modules";

  import BackstoryImg from "@/assets/backstory.jpg";
  import Carousel1 from "@/assets/carousel/1.jpg";
  import Carousel2 from "@/assets/carousel/2.jpg";
  import Carousel3 from "@/assets/carousel/3.jpg";
  import Carousel4 from "@/assets/carousel/4.jpg";
  import Carousel5 from "@/assets/carousel/5.jpg";
  import Carousel6 from "@/assets/carousel/6.jpg";
  import Carousel7 from "@/assets/carousel/7.jpg";
  import Carousel8 from "@/assets/carousel/8.jpg";
  import ArrowLine from "@/assets/arrowline.svg";
  import Logo from "@/assets/logo.png";
  import ArrowLeft from "./svgs/ArrowLeft";
  import Ring from "./svgs/Ring";
  import { useEffect, useRef, useState } from "react";
  const Backstory = () => {
    const slides = [
      Carousel1,
      Carousel2,
      Carousel3,
      Carousel4,
      Carousel5,
      Carousel6,
      Carousel7,
      Carousel8,
    ];
    const ref = useRef<SwiperRef>(null);
    const descRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [bgOffset, setBGOffset] = useState(0);

    useEffect(() => {
      setBGOffset(
        (descRef.current?.getBoundingClientRect()?.height ?? 0) / 2 -
          (titleRef.current?.getBoundingClientRect()?.height ?? 0)
      );
    }, [descRef, titleRef]);

    return (
      <div id="about" className="overflow-hidden">
        <div className="relative">
          <div className="relative container 2ml:flex items-center space-x-6 mt-16 lg:mt-44 pr-10 lg:pr-[66px] block">
            <Image
              src={BackstoryImg.src}
              width={BackstoryImg.width}
              height={BackstoryImg.height}
              alt="backstory"
              className="rounded-se-[50px] rounded-ee-[50px] mb-[33px] 2ml:w-[53.7%] aspect-[1.777] object-cover object-[center_31%] drag-none select-none"
            />
            <Image
              src={ArrowLine.src}
              width={ArrowLine.width}
              height={ArrowLine.height}
              alt="arrowline"
              className="absolute -top-[870px] left-[105px] -z-[1]"
            />
            <Image
              src={Logo.src}
              width={Logo.width}
              height={Logo.height}
              alt="logo"
              className="absolute top-0 left-1/2 -translate-y-1/2 opacity-5 w-[700px] -z-[1]"
            />
            <Image
              src={Logo.src}
              width={Logo.width}
              height={Logo.height}
              alt="logo"
              className="absolute bottom-0 right-[150px] translate-y-1/2 opacity-5 w-[240px] -z-[1]"
            />
            <div ref={descRef}>
              <h2
                className="text-2xl lg:text-4xl font-bold leading-none"
                ref={titleRef}
              >
                In a World Of Soft Cuddles
              </h2>
              <span className="lg:text-2xl font-semibold text-[#00186C]/50 mt-0.5 leading-none">
                Backstory
              </span>
              <p className="lg:text-2xl font-semibold mt-4 lg:mt-6">
                Introducing the adorably unique meme coin! While other coins like
                Doge and Shiba flood the market with billions of tokens annually,
                Teddy Bear Inu stands out with genuine scarcity.
              </p>
            </div>
          </div>
          <div
            className="absolute bottom-0 left-0 bg-white w-full -z-[2]"
            style={{
              height: `calc(50% + ${bgOffset}px`,
            }}
          />
        </div>
        <div className="pt-[60px] lg:pt-20 pb-12 relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-white -z-[2]" />
          <div className="container">
            <Swiper
              ref={ref}
              slidesPerView={5}
              spaceBetween={72}
              centeredSlides={true}
              autoplay={{ delay: 5000 }}
              loop={true}
              modules={[Autoplay]}
              className="[&_.swiper-slide-active]:!w-[220px] 2ml:[&_.swiper-slide-active]:!w-[300px] lg:[&_.swiper-slide-active]:!w-[450px] [&>.swiper-wrapper]:items-center [&>.swiper-wrapper]:!-ml-[40px] lg:[&>.swiper-wrapper]:!-ml-[75px] [&>.swiper-wrapper]:h-[300px] lg:[&>.swiper-wrapper]:h-[450px] [&_.swiper-slide]:transition-all [&_.swiper-slide]:flex"
            >
              {slides.map((item, i) => (
                <SwiperSlide key={i}>
                  <Image
                    src={item.src}
                    width={item.width}
                    height={item.height}
                    alt="carousel"
                    className="rounded-full my-auto drag-none select-none"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex items-center justify-center space-x-1.5 lg:space-x-3 mt-7 lg:mt-12">
              <button
                className="hover:scale-105 transition-all"
                onClick={() => ref.current?.swiper?.slidePrev()}
              >
                <ArrowLeft className="max-lg:w-[20px]" />
              </button>
              <Ring className="max-lg:w-[20px]" />
              <button
                className="hover:scale-105 transition-all"
                onClick={() => ref.current?.swiper?.slideNext()}
              >
                <ArrowLeft className="rotate-180 max-lg:w-[20px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Backstory;
