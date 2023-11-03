import React from "react";

export default function PaymentInputs() {
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
      name: "Germany",
    },
    {
      name: "United State (US)",
    },
    {
      name: "Greece",
    },
  ];

  return (
    <div>
      <div>
        <div>
          <p className="pb-2 text-[18px]">First name</p>
          <input
            className="mb-5 h-10 w-full border border-neutral-300 pl-2 focus:border-black focus:outline-none sm:h-[52px]"
            type="text"
          />
        </div>
        <div>
          <p className="pb-2 text-[18px]">Last name</p>
          <input
            className="mb-5 h-10 w-full border border-neutral-300 pl-2 focus:border-black focus:outline-none sm:h-[52px]"
            type="text"
          />
        </div>
      </div>
      <div>
        <p className="pb-2 text-[18px]">Country / Region</p>
        <select
          className="mb-5 h-14 w-full border border-neutral-300 bg-white pl-4 text-neutral-700 hover:cursor-pointer focus:border-black focus:outline-none"
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
            className="h-10 w-full border border-neutral-300 pl-2 placeholder:text-neutral-400/50 focus:border-black focus:outline-none sm:h-[52px]"
            type="text"
            placeholder="House number and street"
          />
          <input
            className="h-10 w-full border border-neutral-300 pl-2 placeholder:text-neutral-400/50 focus:border-black focus:outline-none sm:h-[52px]"
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
              className="h-10 w-full border border-neutral-300 pl-2 focus:border-black focus:outline-none sm:h-[52px]"
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
  );
}
