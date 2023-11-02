import { X } from "phosphor-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import ShoppingBag from "./ShoppingBag";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isNavActive, setIsNavActive] = useState(false);
  const location = useLocation();

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

  function deactivateNav() {
    if (window.innerWidth < 600) {
      setIsNavActive(false);
    }
  }

  const navVars = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  const smallerThan600 = window.innerWidth < 600;

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
          <motion.div
            variants={navVars}
            initial="initial"
            animate="animate"
            className="absolute bottom-4 left-3 flex flex-col text-3xl font-semibold tablet:relative  tablet:flex tablet:gap-x-3  tablet:text-[19px] sm:flex-row"
          >
            <li
              onClick={() => deactivateNav()}
              className="relative
                inline-block
                cursor-pointer
                capitalize
                transition-all
                duration-500
                before:absolute
                before:-bottom-[-5px]
                before:left-0
                before:h-[1px]
                before:w-0
                before:rounded-full
                before:bg-black
                before:transition-all
                before:duration-500
                before:content-['']
                hover:before:w-full
                hover:before:opacity-100"
            >
              <Link
                to="/"
                className={`${
                  location.pathname === "/" && "border-b border-black"
                }`}
              >
                SHOP
              </Link>
            </li>
            <li
              onClick={() => deactivateNav()}
              className="relative
                inline-block
                cursor-pointer
                capitalize
                transition-all
                duration-500
                before:absolute
                before:-bottom-[-5px]
                before:left-0
                before:h-[1px]
                before:w-0
                before:rounded-full
                before:bg-black
                before:transition-all
                before:duration-500
                before:content-['']
                hover:before:w-full
                hover:before:opacity-100"
            >
              <Link
                to="/about"
                className={`${
                  location.pathname === "/about" && "border-b border-black"
                }`}
              >
                ABOUT
              </Link>
            </li>
          </motion.div>
        </ul>
      )}
      <BurgerMenu onSetNavActiveClick={handleSetNavActive} />
      <motion.div variants={navVars} initial="initial" animate="animate">
        <Link
          to="/"
          className={`${
            location.pathname === "/" && smallerThan600
              ? "text-white"
              : "text-black"
          } text-[21px] font-semibold tablet:text-[27px]`}
        >
          CHÂTEAU LOUIS
        </Link>
      </motion.div>
      <ShoppingBag />
      <motion.p
        variants={navVars}
        initial="initial"
        animate="animate"
        className={`${
          location.pathname === "/chair" ||
          location.pathname === "/lampWhie" ||
          location.pathname === "/lampMini"
            ? "pl-2"
            : "tablet:pl-12"
        } hidden text-[19px] font-semibold tablet:block `}
      >
        CART (0)
      </motion.p>
    </nav>
  );
}
