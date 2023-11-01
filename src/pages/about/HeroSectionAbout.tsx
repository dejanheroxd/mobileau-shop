import React from "react";
import aboutKuche from "../../assets/Luminosité Louis/aboutKuche.webp";

export default function HeroSectionAbout() {
  return (
    <div className="px-5 sm:px-0 xl:pt-5">
      <div>
        <p className="w-[170px] pb-5 pt-4 text-[38px] font-semibold leading-8 sm:pb-12 sm:pt-14 sm:text-[70px] sm:leading-[55px] md:text-[87px] md:leading-[67px] lg:text-[115px] lg:leading-[90px] xl:text-[140px] xl:leading-[110px] 2xl:text-[145px] 2xl:leading-[114px]">
          CHÂTEAU LOUIS
        </p>
      </div>
      <div className="flex w-full justify-end">
        <img
          className="sm:h-[430px] sm:w-[330px] md:h-[500px] md:w-[400px] lg:h-[650px] lg:w-[550px] 2xl:h-[1150px] 2xl:w-[1050px]"
          src={aboutKuche}
          alt=""
        />
      </div>
    </div>
  );
}
