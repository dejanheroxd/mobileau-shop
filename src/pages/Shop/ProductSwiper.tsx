import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { PRODUCTS } from "../../products";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

interface ProductSwiperProps {
  productNumber: number;
  chair?: boolean;
}

export default function ProductSwiper({
  productNumber,
  chair,
}: ProductSwiperProps) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth > 600);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth > 670);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="px-5 sm:px-[31px]">
      {screenWidth ? (
        <Swiper
          pagination={true}
          modules={[Pagination]}
          style={{ width: "50vw", padding: "0px" }}
        >
          <SwiperSlide style={{ width: "160px", height: "65vw" }}>
            <img
              src={PRODUCTS[productNumber].frontImg}
              alt=""
              style={{ width: "50vw", height: "65vw" }}
            />
          </SwiperSlide>
          <SwiperSlide style={{ width: "160px", height: "65vw" }}>
            {chair ? (
              <img
                src={PRODUCTS[productNumber].sideImg}
                alt=""
                style={{ width: "50vw", height: "65vw" }}
              />
            ) : (
              <img
                src={PRODUCTS[productNumber].topImg}
                alt=""
                style={{ width: "50vw", height: "65vw" }}
              />
            )}
          </SwiperSlide>
          <SwiperSlide style={{ width: "160px", height: "65vw" }}>
            {chair ? (
              <img
                src={PRODUCTS[productNumber].backImg}
                alt=""
                style={{ width: "50vw", height: "65vw" }}
              />
            ) : (
              <img
                src={PRODUCTS[productNumber].onImg}
                alt=""
                style={{ width: "50vw", height: "65vw" }}
              />
            )}
          </SwiperSlide>
          {chair && (
            <SwiperSlide style={{ width: "160px", height: "65vw" }}>
              {chair && (
                <img
                  src={PRODUCTS[productNumber].zoomImg}
                  alt=""
                  style={{ width: "50vw", height: "65vw" }}
                />
              )}
            </SwiperSlide>
          )}
        </Swiper>
      ) : (
        <Swiper pagination={true} modules={[Pagination]}>
          <SwiperSlide>
            <img src={PRODUCTS[productNumber].frontImg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {chair ? (
              <img src={PRODUCTS[productNumber].sideImg} alt="" />
            ) : (
              <img src={PRODUCTS[productNumber].topImg} alt="" />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {chair ? (
              <img src={PRODUCTS[productNumber].backImg} alt="" />
            ) : (
              <img src={PRODUCTS[productNumber].onImg} alt="" />
            )}
          </SwiperSlide>
          {chair && (
            <SwiperSlide>
              {chair && <img src={PRODUCTS[productNumber].zoomImg} alt="" />}
            </SwiperSlide>
          )}
        </Swiper>
      )}
    </div>
  );
}
