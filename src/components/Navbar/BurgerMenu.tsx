// import { useLocation } from "react-router-dom";

// interface BurgerMenuProps {
//   onSetNavActiveClick: () => void;
// }

// export default function BurgerMenu({ onSetNavActiveClick }: BurgerMenuProps) {
//   const location = useLocation();

//   const smallerThan600 = window.innerWidth < 600;

//   return (
//     <div
//       className="flex flex-col gap-y-[7px] hover:cursor-pointer tablet:hidden"
//       onClick={() => onSetNavActiveClick()}
//     >
//       <span
//         className={`${
//           location.pathname === "/" && smallerThan600 ? "bg-white" : "bg-black"
//         } block h-[1px] w-8 bg-white`}
//       ></span>
//       <span
//         className={`${
//           location.pathname === "/" && smallerThan600 ? "bg-white" : "bg-black"
//         } block h-[1px] w-8 bg-white`}
//       ></span>
//       <span
//         className={`${
//           location.pathname === "/" && smallerThan600 ? "bg-white" : "bg-black"
//         } block h-[1px] w-8 bg-white`}
//       ></span>
//     </div>
//   );
// }

import { useLocation } from "react-router-dom";

interface BurgerMenuProps {
  onSetNavActiveClick: () => void;
}

export default function BurgerMenu({ onSetNavActiveClick }: BurgerMenuProps) {
  const location = useLocation();

  const smallerThan600 = window.innerWidth < 600;
  const isPathWhite = location.pathname === "/";

  return (
    <div
      className="flex flex-col gap-y-[7px] hover:cursor-pointer tablet:hidden"
      onClick={() => onSetNavActiveClick()}
    >
      <span
        className={`${
          isPathWhite && smallerThan600 ? "bg-white" : "bg-black"
        } block h-[1px] w-8 `}
      ></span>
      <span
        className={`${
          isPathWhite && smallerThan600 ? "bg-white" : "bg-black"
        } block h-[1px] w-8 `}
      ></span>
      <span
        className={`${
          isPathWhite && smallerThan600 ? "bg-white" : "bg-black"
        } block h-[1px] w-8 `}
      ></span>
    </div>
  );
}
