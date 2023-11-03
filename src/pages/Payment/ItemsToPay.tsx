import React from "react";

interface ItemsToPayProps {
  frontImg: string;
  price: string;
  name: string;
  amount: number;
}

export default function ItemsToPay({
  frontImg,
  price,
  name,
  amount,
}: ItemsToPayProps) {
  return (
    <div className="2xl: flex items-center gap-x-4 p-4 xl:gap-x-6 2xl:gap-x-10">
      <div className="w-30 h-32">
        <img src={frontImg} className="h-full w-full object-cover" alt="" />
      </div>
      <div className="text-[18px] 2xl:ml-[-22px]">
        <p>{name}</p>
      </div>
      <p className="text-[14px] text-neutral-400">x {amount}</p>
      <div className="text-[18px]">€{price}</div>
    </div>
  );
}
