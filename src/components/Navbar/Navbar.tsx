import { X } from "phosphor-react";
import { useState, useEffect } from "react";
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
    <nav className="fixed left-0 right-0 top-0 z-40 flex h-[72px] items-center justify-between bg-transparent px-5 text-white tablet:h-[100px] tablet:justify-between tablet:bg-primaryColor tablet:px-[31px] tablet:text-black sm:absolute">
      {isNavActive && (
        <ul className="absolute left-0 right-0 top-0 flex h-[186px] flex-col bg-primaryColor text-black tablet:relative tablet:ml-[-12px] tablet:h-full tablet:items-center tablet:justify-center tablet:pt-8 tablet:font-semibold ">
          <button className="absolute left-2 top-2">
            <X
              size={32}
              onClick={() => setIsNavActive(false)}
              className="tablet:hidden"
            />
          </button>
          <div className="absolute bottom-4 left-3 text-3xl font-semibold  tablet:relative tablet:flex  tablet:gap-x-3 tablet:text-[19px]">
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
      <Link to="/" className="text-[21px] font-semibold tablet:text-[27px]">
        CHÂTEAU LOUIS
      </Link>
      <ShoppingBag />
      <p className="hidden text-[19px] font-semibold tablet:block tablet:pl-9">
        CART (0)
      </p>
    </nav>
  );
}
