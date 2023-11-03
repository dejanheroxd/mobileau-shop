import { X } from "phosphor-react";
import { AnimatePresence, motion } from "framer-motion";
import CartItem from "./CartItem";
import { ShopContext } from "../../context/shop-context";
import { useContext, useEffect, useRef } from "react";
import { PRODUCTS } from "../../products";
import { Link } from "react-router-dom";

interface ShopNavProps {
  onCloseNav: () => void;
}

const shopNavVars = {
  initial: { x: "100%" },
  animate: { x: 0, transition: { duration: 0.25 } },
  exit: { x: "100%", transition: { duration: 0.25 } },
};

export default function ShopNav({ onCloseNav }: ShopNavProps) {
  const {
    addToCart,
    removeFromCart,
    cartItems,
    // updateCartItemAmount,
    getTotalCartAmount,
  } = useContext(ShopContext);
  const shopRef = useRef<HTMLDivElement | null>(null);
  const totalAmount = getTotalCartAmount();

  useEffect(() => {
    function handler(e: any) {
      if (!shopRef.current?.contains(e.target)) {
        onCloseNav();
      }
    }

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <AnimatePresence>
      <motion.div
        ref={shopRef}
        variants={shopNavVars}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed bottom-0 right-0 top-0 z-40 flex w-[300px] flex-col justify-between bg-[#e9e6d6] px-3 py-3 sm:w-[555px]"
      >
        <div>
          <p className="text-7xl font-bold">CART</p>
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return (
                <CartItem
                  key={product.id}
                  frontImg={product.frontImg}
                  name={product.productName}
                  price={product.price}
                  amount={cartItems[product.id]}
                  id={product.id}
                  // updateCartItemAmount={updateCartItemAmount}
                  onAddToCart={addToCart}
                  onRemoveFromCart={removeFromCart}
                />
              );
            }
          })}
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex justify-between border-b border-black pb-4 text-xl font-semibold">
            <p>TOTAL (INCL. VAT)</p>
            <p>€{totalAmount},00</p>
          </div>
          <p className="py-3 text-center text-[13px]">
            Shipping costs will be calculated in the next step
          </p>
          <Link to={"/payment"} onClick={() => onCloseNav()}>
            <button className="w-full bg-black py-4 text-[18px] text-white duration-300 ">
              PROCCED TO PAYMENT
            </button>
          </Link>
        </div>
        <button onClick={() => onCloseNav()} className="absolute right-3 top-3">
          <X size={37} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
