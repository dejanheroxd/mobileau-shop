import React from "react";
import { useState } from "react";
import { X } from "phosphor-react";

interface ShopNavProps {
  onCloseNav: () => void;
}

export default function ShopNav({ onCloseNav }: ShopNavProps) {
  return (
    <div className="fixed inset-0 z-40 flex flex-col justify-between bg-[#d9719c] px-3 py-3">
      <div>
        <p className="text-7xl font-bold">CART</p>
        <p className="text-xl">Your cart is empty</p>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex justify-between border-b border-black pb-4 text-xl font-semibold">
          <p>TOTAL (INCL. VAT)</p>
          <p>€0.00</p>
        </div>
        <p className="py-3 text-center text-[13px]">
          Shipping costs will be calculated in the next step
        </p>
        <button className="bg-black py-4 text-[18px] text-white">
          PROCCED TO PAYMENT
        </button>
      </div>
      <button onClick={() => onCloseNav()} className="absolute right-3 top-3">
        <X size={37} />
      </button>
    </div>
  );
}
