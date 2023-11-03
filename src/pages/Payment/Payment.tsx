import React from "react";
import PaymentInputs from "./PaymentInputs";
import SecuredPaymentOrder from "./SecuredPaymentOrder";

export default function Payment() {
  return (
    <>
      <div className="flex flex-col justify-center bg-white px-[18px] pb-20 pt-[85px] sm:px-[30px] sm:pt-[113px] xl:pt-40">
        <div className="flex w-full flex-col justify-center">
          <p className="py-5 text-[25px] 2xl:text-[28px]">Shipping & Payment</p>
          <p className="pb-3 text-[25px] 2xl:text-[28px]">Billing details</p>
          <PaymentInputs />
          <SecuredPaymentOrder />
          <div></div>
        </div>
      </div>
      <div className="h-4 w-full bg-primaryColor"></div>
    </>
  );
}
