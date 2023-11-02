import React from "react";

interface ColoursButtonsProps {
  productNumber: number;
  chair?: boolean;
  mini?: boolean;
  onChangeProductNumber: (newProductNumber: number) => void;
}

export default function ColoursButtons({
  chair,
  productNumber,
  onChangeProductNumber,
  mini,
}: ColoursButtonsProps) {
  return (
    <div className="flex items-center px-5 pb-1 pt-2 sm:px-[31px] 2xl:pt-4">
      {mini ? (
        <>
          <p className="pr-6 text-lg font-semibold">COLOURS</p>
          <div className="flex gap-x-1">
            <button
              onClick={() => onChangeProductNumber(4)}
              className={`${
                productNumber === 4 && "border border-black"
              } h-9 w-9 rounded-full bg-[#d7ceb7]`}
            ></button>
            <button
              onClick={() => onChangeProductNumber(5)}
              className={`${
                productNumber === 5 && "border border-black"
              } h-9 w-9 rounded-full bg-[#4992b2]`}
            ></button>
            <button
              onClick={() => onChangeProductNumber(6)}
              className={`${
                productNumber === 6 && "border border-black"
              } h-9 w-9 rounded-full bg-[#4e7316]`}
            ></button>
          </div>
        </>
      ) : (
        <>
          <p className="pr-6 text-lg font-semibold">COLOURS</p>
          {!chair ? (
            <div className="flex gap-x-1">
              <button
                onClick={() => onChangeProductNumber(2)}
                className={`${
                  productNumber === 2 && "border border-black"
                } h-9 w-9 rounded-full bg-[#db759d]`}
              ></button>
              <button
                onClick={() => onChangeProductNumber(1)}
                className={`${
                  productNumber === 1 && "border border-black"
                } h-9 w-9 rounded-full bg-[#ece5d2]`}
              ></button>
              <button
                onClick={() => onChangeProductNumber(3)}
                className={`${
                  productNumber === 3 && "border border-black"
                } h-9 w-9 rounded-full bg-[#ebd98d]`}
              ></button>
            </div>
          ) : (
            <button className="h-9 w-9 rounded-full border border-black bg-[#9e5f28]"></button>
          )}
        </>
      )}
    </div>
  );
}
