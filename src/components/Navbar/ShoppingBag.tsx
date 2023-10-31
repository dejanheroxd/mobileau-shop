import React from "react";
import { Bag } from "phosphor-react";

export default function ShoppingBag() {
  return (
    <button className="tablet:hidden relative">
      <Bag size={31} weight="thin" />
      <p className="absolute left-3 top-[9px] text-[12px]">0</p>
    </button>
  );
}
