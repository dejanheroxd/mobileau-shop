import React, { useState } from "react";
import lamp from "../../assets/Luminosité Louis/lamp/lamp.webp";
import lampStory from "../../assets/Luminosité Louis/lamp/lampStory.webp";
import lampVideo from "../../assets/Luminosité Louis/lamp/lampVideo.webp";
import { PRODUCTS } from "../../products";

interface propNumber {
  number: number;
  chair: boolean;
}

export default function Products({ number, chair }: propNumber) {
  const [isTableActive, setIsTableActive] = useState(true);
  const [productNumber, setProductNumber] = useState(number);

  return (
    <div className="pt-[75px]">
      <div className="px-7">
        <img src={PRODUCTS[productNumber].frontImg} alt="" />
      </div>
      <div className="mx-7 mb-2 border-b border-neutral-300 py-2 pb-6">
        <p className="text-[40px] font-semibold">
          {PRODUCTS[productNumber].productName.toUpperCase()}
        </p>
        <p className="mt-[-10px] text-lg">{PRODUCTS[productNumber].subName}</p>
        <p className="text-xl font-semibold">
          €{PRODUCTS[productNumber].price}
        </p>
      </div>
      <div className="flex items-center px-7 pb-1 pt-2">
        <p className="pr-6 text-lg font-semibold">COLOURS</p>
        {!chair ? (
          <div className="flex gap-x-1">
            <button
              onClick={() => setProductNumber(2)}
              className={`${
                productNumber === 2 && "border border-black"
              } h-9 w-9 rounded-full bg-[#db759d]`}
            ></button>
            <button
              onClick={() => setProductNumber(1)}
              className={`${
                productNumber === 1 && "border border-black"
              } h-9 w-9 rounded-full bg-[#ece5d2]`}
            ></button>
            <button
              onClick={() => setProductNumber(3)}
              className={`${
                productNumber === 3 && "border border-black"
              } h-9 w-9 rounded-full bg-[#ebd98d]`}
            ></button>
          </div>
        ) : (
          <button className="h-9 w-9 rounded-full border border-black bg-[#9e5f28]"></button>
        )}
      </div>
      <div className="mx-7 pb-3">
        <button className=" mt-3 w-full border bg-black py-4 text-white">
          Add to cart
        </button>
      </div>
      <div className="px-7 pb-5 text-lg font-semibold">
        <p>Delivery 2 to 3 weeks</p>
        <p className="mt-[-5px]">Payment in 4X via Paypal </p>
      </div>
      <div className="mx-7 border-t border-neutral-300 pt-6">
        <div>
          <div className="flex gap-x-4 pb-2">
            <p
              className={`${
                isTableActive && "border-b border-black"
              } text-[17px] font-semibold`}
              onClick={() => setIsTableActive(true)}
            >
              DESCRIPTION
            </p>
            <p
              className={`${
                isTableActive ? "" : "border-b border-black"
              } text-[17px] font-semibold`}
              onClick={() => setIsTableActive(false)}
            >
              DETAILS & COMPOSITION
            </p>
          </div>
          {isTableActive ? (
            <p>{PRODUCTS[productNumber].description}</p>
          ) : (
            <div>
              <div className="flex gap-x-1">
                <p>Dimensions :</p>
                <p>{PRODUCTS[productNumber].dimensions}</p>
              </div>
              <div className="flex gap-x-1">
                {chair ? (
                  <div>Seat Height : {PRODUCTS[productNumber].seatHeight}</div>
                ) : (
                  <p>Lampshade:</p>
                )}
                <p>{PRODUCTS[productNumber].lampshade}</p>
              </div>
              <div className="flex gap-x-1">
                {chair ? (
                  <div>Seat depth : {PRODUCTS[productNumber].seatDepth}</div>
                ) : (
                  <div> Base: {PRODUCTS[productNumber].base}</div>
                )}
              </div>
              <div className="flex gap-x-1">
                {chair ? (
                  <div>Wood : {PRODUCTS[productNumber].wood}</div>
                ) : (
                  <div>
                    Electrical system:{" "}
                    {PRODUCTS[productNumber].electricalSystem}
                  </div>
                )}
              </div>
              {chair && (
                <>
                  <div className="flex gap-x-1">
                    <div>Fabrics : {PRODUCTS[productNumber].fabrics}</div>
                  </div>
                  <div className="flex gap-x-1">
                    <div>
                      Manifecturing : {PRODUCTS[productNumber].manufacturing}
                    </div>
                    {PRODUCTS[productNumber].electricalSystem}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="mt-16 h-[290px] w-full overflow-hidden">
        <img
          src={PRODUCTS[productNumber].storyImg}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="px-7">
        <p className="pb-3 pt-5 text-lg font-semibold">THE STORY</p>
        <p className="text-3xl leading-8">
          The first Benjamin desk lamp takes its inspiration from the
          aspirational journey of the 3D visuals of designer Oursroux, Benjamin
          Guedj's other stage name. A creation dictated by his deep desire to
          move from the virtual to the real.
        </p>
      </div>
      <div className="px-7 pt-5">
        <img src={PRODUCTS[productNumber].storyVideo} alt="" />
      </div>
      <p className="px-7 pb-10 pt-5 text-[20px]">
        The transparency of this material allows a warm, muffled and relaxing
        light, creating a warm atmosphere that invites reverie. The texture of
        this material, close to the softness of the skin, plays a full role in
        the elegance of the product.
      </p>
    </div>
  );
}
