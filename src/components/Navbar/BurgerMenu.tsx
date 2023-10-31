interface BurgerMenuProps {
  onSetNavActiveClick: () => void;
}

export default function BurgerMenu({ onSetNavActiveClick }: BurgerMenuProps) {
  return (
    <div
      className="flex flex-col gap-y-[7px] hover:cursor-pointer tablet:hidden"
      onClick={() => onSetNavActiveClick()}
    >
      <span className="block h-[1px] w-8 bg-white"></span>
      <span className="block h-[1px] w-8 bg-white"></span>
      <span className="block h-[1px] w-8 bg-white"></span>
    </div>
  );
}
