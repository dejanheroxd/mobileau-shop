import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Link to={"/"}>
      <div className="bg-primaryColor px-5 sm:px-7 lg:pb-10 2xl:mt-20">
        <div className=" flex">
          <p className="w-[250px] pb-3 pt-4 text-[40px] font-semibold leading-[35px] sm:w-full sm:text-right sm:text-7xl md:text-8xl lg:text-9xl 2xl:text-[220px]">
            CHÂTEAU LOUIS
          </p>
        </div>
        <div className=" sm:flex sm:flex-row sm:justify-end">
          <div className="flex gap-x-8 border-b border-black py-3 text-[18px] sm:flex-row sm:justify-end sm:border-hidden md:gap-x-12 xl:gap-x-20 2xl:gap-x-40">
            <div className="flex flex-col sm:order-2">
              <a
                className="relative inline-block
                w-[100px]
                cursor-pointer
                capitalize
                transition-all
                duration-500
                before:absolute
                before:-bottom-0
                before:left-0
                before:h-[1px]
                before:w-0
                before:rounded-full
                before:bg-black
                before:transition-all
                before:duration-500
                before:content-['']
                hover:before:w-full
                hover:before:opacity-100"
                href=""
              >
                Legal notice
              </a>
              <a
                className="relative inline-block
              w-[40px]
              cursor-pointer
              capitalize
              transition-all
              duration-500
              before:absolute
              before:-bottom-0
              before:left-0
              before:h-[1px]
              before:w-0
              before:rounded-full
              before:bg-black
              before:transition-all
              before:duration-500
              before:content-['']
              hover:before:w-full
              hover:before:opacity-100"
                href=""
              >
                FAQ
              </a>
              <a
                className="relative inline-block
                w-[170px]
                cursor-pointer
                capitalize
                transition-all
                duration-500
                before:absolute
                before:-bottom-0
                before:left-0
                before:h-[1px]
                before:w-0
                before:rounded-full
                before:bg-black
                before:transition-all
                before:duration-500
                before:content-['']
                hover:before:w-full
                hover:before:opacity-100"
                href=""
              >
                Terms and conditions
              </a>
            </div>
            <div className="flex flex-col sm:order-3">
              <a
                className="relative inline-block
              w-[70px]
              cursor-pointer
              capitalize
              transition-all
              duration-500
              before:absolute
              before:-bottom-0
              before:left-0
              before:h-[1px]
              before:w-0
              before:rounded-full
              before:bg-black
              before:transition-all
              before:duration-500
              before:content-['']
              hover:before:w-full
              hover:before:opacity-100"
                href=""
              >
                Contact
              </a>
              <a
                className="relative inline-block
              w-[80px]
              cursor-pointer
              capitalize
              transition-all
              duration-500
              before:absolute
              before:-bottom-0
              before:left-0
              before:h-[1px]
              before:w-0
              before:rounded-full
              before:bg-black
              before:transition-all
              before:duration-500
              before:content-['']
              hover:before:w-full
              hover:before:opacity-100"
                href=""
              >
                Instagram
              </a>
              <a
                className="relative inline-block
              w-[60px]
              cursor-pointer
              capitalize
              transition-all
              duration-500
              before:absolute
              before:-bottom-0
              before:left-0
              before:h-[1px]
              before:w-0
              before:rounded-full
              before:bg-black
              before:transition-all
              before:duration-500
              before:content-['']
              hover:before:w-full
              hover:before:opacity-100"
                href=""
              >
                Twitter
              </a>
            </div>
          </div>
          <div className="py-3 pb-6 text-xl sm:order-1 md:pl-8 xl:pl-20 2xl:pl-40 2xl:pr-24 ">
            <p
              className="relative inline-block
            w-[60px]
            cursor-pointer
            capitalize
            transition-all
            duration-500
            before:absolute
            before:-bottom-0
            before:left-0
            before:h-[1px]
            before:w-0
            before:rounded-full
            before:bg-black
            before:transition-all
            before:duration-500
            before:content-['']
            hover:before:w-full
            hover:before:opacity-100"
            >
              English
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
