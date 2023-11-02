import React from "react";
import { PRODUCTS } from "../../products";

interface ProductsDescriptionProps {
  isTableActive: boolean;
  chair?: boolean;
  productNumber: number;
  onTableTrue: () => void;
  onTableFalse: () => void;
}

export default function ProductsDescription({
  isTableActive,
  chair,
  productNumber,
  onTableTrue,
  onTableFalse,
}: ProductsDescriptionProps) {
  return (
    <div className="order-2 mx-5 border-t border-neutral-300 pt-6 sm:mx-[31px] 2xl:border-b 2xl:pb-6">
      <div>
        <div className="flex gap-x-4 pb-2">
          <p
            className={`${
              isTableActive ? "border-b border-black" : "text-neutral-500/80"
            } text-[17px] font-semibold hover:cursor-pointer`}
            onClick={() => onTableTrue()}
          >
            DESCRIPTION
          </p>
          <p
            className={`${
              isTableActive ? "text-neutral-500/80" : "border-b border-black"
            } text-[17px] font-semibold hover:cursor-pointer`}
            onClick={() => onTableFalse()}
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
                  Electrical system: {PRODUCTS[productNumber].electricalSystem}
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
  );
}
