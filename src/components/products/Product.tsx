import React from "react";

interface ProductProps {
  imgFront: string;
  imgBack: string;
}

export default function Product({ imgFront, imgBack }: ProductProps) {
  return (
    <div className="group/product relative border hover:cursor-pointer">
      <img
        className="absolute opacity-0 duration-700 group-hover/product:opacity-100"
        src={imgBack}
        alt="back chair img"
      />
      <img
        className="duration-400 absolute duration-[650ms] group-hover/product:opacity-0"
        src={imgFront}
        alt="front chair img"
      />
    </div>
  );
}
