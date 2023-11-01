import { Bag } from "phosphor-react";
import { useLocation } from "react-router-dom";

export default function ShoppingBag() {
  const location = useLocation();

  return (
    <button
      className={`${
        location.pathname === "/" ? "text-white" : "text-black"
      } relative tablet:hidden`}
    >
      <Bag size={31} weight="thin" />
      <p className="absolute left-3 top-[9px] text-[12px]">0</p>
    </button>
  );
}
