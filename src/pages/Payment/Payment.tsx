import React from "react";
import PaymentInputs from "./PaymentInputs";
import SecuredPaymentOrder from "./SecuredPaymentOrder";

export default function Payment() {
  return (
    <>
      <div className="flex flex-col justify-center bg-white px-[18px] pb-20 pt-[85px] sm:pt-[113px]">
        <div className="flex w-full flex-col justify-center">
          <p className="py-5 text-[25px]">Shipping & Payment</p>
          <p className="pb-3 text-[25px]">Biling details</p>
          <PaymentInputs />
          <SecuredPaymentOrder />
          <div></div>
        </div>
      </div>
      <div className="h-4 w-full bg-primaryColor"></div>
    </>
  );
}
