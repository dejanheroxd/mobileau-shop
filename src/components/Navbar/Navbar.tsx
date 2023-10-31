import { X, Bag } from "phosphor-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import ShoppingBag from "./ShoppingBag";

export default function Navbar() {
  const [isNavActive, setIsNavActive] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 600) {
        setIsNavActive(true);
      } else {
        setIsNavActive(false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleSetNavActive() {
    setIsNavActive(true);
  }

  return (
    <nav className="tablet:h-[100px] tablet:justify-between tablet:bg-primaryColor tablet:px-[31px] tablet:text-black fixed left-0 right-0 top-0 z-40 flex h-[72px] items-center justify-between bg-transparent px-5 text-white sm:absolute">
      {isNavActive && (
        <ul className="tablet:relative tablet:ml-[-12px] tablet:h-full tablet:items-center tablet:justify-center tablet:pt-8 tablet:font-semibold absolute left-0 right-0 top-0 flex h-[186px] flex-col bg-primaryColor text-black ">
          <button className="absolute left-2 top-2">
            <X
              size={32}
              onClick={() => setIsNavActive(false)}
              className="tablet:hidden"
            />
          </button>
          <div className="tablet:relative tablet:flex tablet:gap-x-3 tablet:text-[19px] absolute  bottom-4 left-3  text-3xl font-semibold">
            <li>
              <Link to="/">SHOP</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
          </div>
        </ul>
      )}
      <BurgerMenu onSetNavActiveClick={handleSetNavActive} />
      <Link to="/" className="tablet:text-[27px] text-[21px] font-semibold">
        CHÂTEAU LOUIS
      </Link>
      <ShoppingBag />
      <p className="tablet:block tablet:pl-9 hidden text-[19px] font-semibold">
        CART (0)
      </p>
    </nav>
  );
}
