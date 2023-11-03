import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import ItemsToPay from "./ItemsToPay";

export default function PaymentInputs() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const credentials = [
    {
      name: "Town / City",
    },
    {
      name: "Postcode / ZIP",
    },
    {
      name: "Phone",
    },
    {
      name: "Email adress",
    },
  ];

  const countries = [
    {
      name: "France",
    },
    {
      name: "Italy",
    },
    {
      name: "Germany",
    },
    {
      name: "United State (US)",
    },
    {
      name: "Greece",
    },
  ];

  const totalAmount = getTotalCartAmount();

  return (
    <div className="lg:flex lg:gap-x-7 2xl:gap-x-24">
      <div className="lg:w-[600px] xl:w-[800px] 2xl:w-[1300px]">
        <div className="w-full lg:flex lg:gap-x-4">
          <div className="w-full">
            <p className="pb-2 text-[18px]">First name</p>
            <input
              className="mb-5 h-10 w-full border border-neutral-300 pl-2 focus:border-black focus:outline-none sm:h-[52px] 2xl:h-14"
              type="text"
            />
          </div>
          <div className="w-full">
            <p className="pb-2 text-[18px]">Last name</p>
            <input
              className="mb-5 h-10 w-full border border-neutral-300 pl-2 focus:border-black focus:outline-none sm:h-[52px] 2xl:h-14"
              type="text"
            />
          </div>
        </div>
        <div>
          <p className="pb-2 text-[18px]">Country / Region</p>
          <select
            className="mb-5 h-14 w-full border border-neutral-300 bg-white pl-4 text-neutral-700 hover:cursor-pointer focus:border-black focus:outline-none 2xl:h-16"
            name=""
            id=""
          >
            {countries.map((country) => {
              return (
                <option key={country.name} value="">
                  {country.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <p className="pb-2 text-[18px]">Street address</p>
          <div className="mb-5 flex flex-col gap-y-5">
            <input
              className="h-10 w-full border border-neutral-300 pl-2 placeholder:text-neutral-400/50 focus:border-black focus:outline-none sm:h-[52px] 2xl:h-14"
              type="text"
              placeholder="House number and street"
            />
            <input
              className="h-10 w-full border border-neutral-300 pl-2 placeholder:text-neutral-400/50 focus:border-black focus:outline-none sm:h-[52px] 2xl:h-14"
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
            />
          </div>
        </div>
        {credentials.map((credential) => {
          return (
            <div key={credential.name} className="mb-5">
              <p className="pb-2 text-[18px]">{credential.name}</p>
              <input
                className="h-10 w-full border border-neutral-300 pl-2 focus:border-black focus:outline-none sm:h-[52px] 2xl:h-14"
                type="text"
              />
            </div>
          );
        })}
        <div className="pb-9">
          <p className="pb-2 text-[18px]">Order notes (optional)</p>
          <textarea
            className="w-full border border-neutral-300 pl-2 pr-2 pt-2 placeholder:text-neutral-400/50 focus:border-black focus:outline-none"
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Notes about your order, e.g. special notes for delivery."
          ></textarea>
        </div>
      </div>
      <div className="h-full border border-neutral-300 2xl:mt-[34px]">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <ItemsToPay
                key={product.id}
                frontImg={product.frontImg}
                price={product.price}
                name={product.productName}
                amount={cartItems[product.id]}
              />
            );
          }
        })}
        <div className="px-4 pb-3 pt-5">
          <div className="w-[250px]">
            <p className="pb-2 text-3xl">Shipping</p>
            <p className="text-[18px]">Flat Rate standard shipping: $15</p>
            <p className="text-[18px]">
              Flat Rate express shipping: $30 sales tax $65
            </p>
          </div>
          <div className="flex w-full justify-between pt-5">
            <p className="text-3xl">Total</p>
            <p className="text-[18px]">${totalAmount},00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
