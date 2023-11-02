import React from "react";

interface CartItemProps {
  frontImg: string;
  name: string;
  price: string;
  amount: number;
  id: number;
  updateCartItemAmount: (newAmount: number, id: number) => void;
  onAddToCart: (id: number) => void;
  onRemoveFromCart: (id: number) => void;
}

export default function CartItem({
  frontImg,
  name,
  price,
  amount,
  id,
  updateCartItemAmount,
  onAddToCart,
  onRemoveFromCart,
}: CartItemProps) {
  return (
    <div className="mt-5 flex h-[91px]">
      <div className="h-[90px] w-[80px]">
        <img className="h-full w-full object-cover" src={frontImg} alt="" />
      </div>
      <div className=" pl-2 pt-2">
        <p className="text-[17px] font-semibold">{name}</p>
        <div className="mt-4 flex">
          <button
            onClick={() => onRemoveFromCart(id)}
            className="w-[25px] bg-black text-white"
          >
            -
          </button>
          <input
            value={amount}
            onChange={(e) => updateCartItemAmount(Number(e.target.value), id)}
            type="text"
            className="w-[70px]  pl-3"
          />
          <button
            onClick={() => onAddToCart(id)}
            className="w-[25px] bg-black text-white"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex h-full flex-col justify-end pb-3 pl-5">
        <p className="text-[17px] font-semibold">€{price}</p>
      </div>
    </div>
  );
}
