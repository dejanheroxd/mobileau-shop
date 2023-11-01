import React from "react";
import aboutSalon from "../../assets/Luminosité Louis/aboutSalon.webp";

export default function DescriptionSectionAbout() {
  return (
    <div className="pb-7 xl:pb-0">
      <div className="px-5 sm:px-0 sm:pb-9 sm:pt-9">
        <p className="py-5 text-3xl leading-8 sm:text-6xl">
          "I have always been fascinated by the idea of imagining everyday
          objects and bringing them to life. I like to be able to convey emotion
          to you through and beyond the screen."
        </p>
      </div>
      <div className="px-5 sm:flex sm:justify-end sm:gap-x-8 sm:px-0 2xl:pb-24">
        <p className="pb-4 sm:w-[230px] sm:text-2xl md:w-[300px] lg:w-[250px] xl:w-[350px] 2xl:w-[500px]">
          André Louis has developed a very personal style in graphic design, as
          well as through his dreamlike 3D universe. He achieves a contemporary
          vision for interiors by mixing dream with reality as touches of
          haute-couture and influences from the world of fashion combine to
          inspire him.
        </p>
        <div className="sm:w-[230px] md:w-[300px] lg:w-[250px] xl:w-[350px] 2xl:w-[500px]">
          <p className="pb-4  sm:text-2xl">
            As a designer, he is constantly challenging himself as he imagines
            and reinvents the house of tomorrow. The personal nature of his work
            results in subtle chic creations that are enhanced with colors that
            are renewed each season to match the mood of the day.
          </p>
          <p className="pb-4 sm:text-2xl">
            This project has a name: his – Château Louis.
          </p>
        </div>
      </div>
      <div>
        <img src={aboutSalon} alt="" />
      </div>
    </div>
  );
}
