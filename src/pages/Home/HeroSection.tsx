import React from "react";
import heroVideo from "../../assets/Luminosité Louis/heroVideo.mp4";

export default function HeroSection() {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative ">
        <video
          className="tablet:px-[31px] tablet:h-[76vw] h-[100vw] w-full object-cover xl:h-[70vw] 2xl:h-[68vw]"
          autoPlay
          loop
          muted
        >
          <source src={heroVideo} />
        </video>
        <div className="absolute bottom-6 z-20 w-full text-center text-white md:bottom-14">
          <h1 className="tablet:text-[13vw] tablet:mb-[-19px] mb-[-5px] text-[14.5vw] font-semibold md:mb-[-29px] lg:text-[9vw]">
            THE MIKADO
          </h1>
          <p className="tablet:text-2xl tablet:leading-[9px] text-xl leading-[8px] md:text-3xl md:leading-[18px]">
            New drop
          </p>
          <p className="tablet:text-2xl text-xl md:text-3xl">
            June 12 (6pm CET)
          </p>
        </div>
      </div>
    </div>
  );
}
