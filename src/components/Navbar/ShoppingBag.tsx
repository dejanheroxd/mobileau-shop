import { Bag } from "phosphor-react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";

interface ShoppingBagProps {
  openShopNavbar: () => void;
  cartSize: number;
}

export default function ShoppingBag({
  openShopNavbar,
  cartSize,
}: ShoppingBagProps) {
  const location = useLocation();
  const { cartItems } = useContext(ShopContext);

  return (
    <button
      onClick={() => openShopNavbar()}
      className={`${
        location.pathname === "/" ? "text-white" : "text-black"
      } relative tablet:hidden`}
    >
      <Bag size={31} weight="thin" />
      <p className="absolute left-3 top-[9px] text-[12px]">{cartSize}</p>
    </button>
  );
}
