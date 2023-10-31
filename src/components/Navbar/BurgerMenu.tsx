import React from "react";

interface BurgerMenuProps {
  onSetNavActiveClick: () => void;
}

export default function BurgerMenu({ onSetNavActiveClick }: BurgerMenuProps) {
  return (
    <div
      className="tablet:hidden flex flex-col gap-y-[7px] hover:cursor-pointer"
      onClick={() => onSetNavActiveClick()}
    >
      <span className="block h-[1px] w-8 bg-white"></span>
      <span className="block h-[1px] w-8 bg-white"></span>
      <span className="block h-[1px] w-8 bg-white"></span>
    </div>
  );
}
