import { Bag } from "phosphor-react";
import { useLocation } from "react-router-dom";

interface ShoppingBagProps {
  openShopNavbar: () => void;
}

export default function ShoppingBag({ openShopNavbar }: ShoppingBagProps) {
  const location = useLocation();

  return (
    <button
      onClick={() => openShopNavbar()}
      className={`${
        location.pathname === "/" ? "text-white" : "text-black"
      } relative tablet:hidden`}
    >
      <Bag size={31} weight="thin" />
      <p className="absolute left-3 top-[9px] text-[12px]">0</p>
    </button>
  );
}
