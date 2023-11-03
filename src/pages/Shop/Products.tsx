import React, { useState, useContext } from "react";
import { PRODUCTS } from "../../products";
import ProductSwiper from "./ProductSwiper";
import ColoursButtons from "./ColoursButtons";
import ProductsDescription from "./ProductsDescription";
import { ShopContext } from "../../context/shop-context";

interface propNumber {
  number: number;
  chair?: boolean;
  mini?: boolean;
  onOpenShopNav: () => void;
}

export default function Products({
  number,
  chair,
  mini,
  onOpenShopNav,
}: propNumber) {
  const [isTableActive, setIsTableActive] = useState(true);
  const [productNumber, setProductNumber] = useState(number);
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);

  function handleChangeProductNumber(number: number) {
    setProductNumber(number);
  }

  function handleOnTableTrue() {
    setIsTableActive(true);
  }

  function handleTableFalse() {
    setIsTableActive(false);
  }

  return (
    <div className="pt-[75px]">
      <div className="lg:flex">
        <ProductSwiper productNumber={productNumber} chair={chair} />
        <div className="xl:pt-20 2xl:flex 2xl:w-[700px] 2xl:flex-col 2xl:pl-20 2xl:pt-44">
          <div className="order-1 mx-5 mb-2 border-b border-neutral-300 py-2 pb-6 sm:mx-[31px] lg:pt-10 2xl:border-none">
            <p className="text-[40px] font-semibold">
              {PRODUCTS[productNumber].productName.toUpperCase()}
            </p>
            <p className="mt-[-10px] text-lg">
              {PRODUCTS[productNumber].subName}
            </p>
            <p className="text-xl font-semibold">
              €{PRODUCTS[productNumber].price}
            </p>
          </div>
          <div className="order-3">
            <ColoursButtons
              chair={chair}
              productNumber={productNumber}
              onChangeProductNumber={handleChangeProductNumber}
              mini={mini}
            />
            <div className="mx-5 pb-3 sm:mx-[31px]">
              <button
                onClick={() => {
                  onOpenShopNav(), addToCart(productNumber);
                }}
                className="mt-3 w-full border border-black bg-black py-4 text-[14px] font-semibold text-white duration-300 hover:border hover:border-black hover:bg-[#e9e6d6] hover:text-black sm:py-4 sm:text-[17px]"
              >
                ADD TO CART
              </button>
            </div>
            <div className="px-5 pb-5 text-lg font-semibold sm:px-[31px]">
              <p>Delivery 2 to 3 weeks</p>
              <p className="mt-[-5px]">Payment in 4X via Paypal </p>
            </div>
          </div>
          <ProductsDescription
            isTableActive={isTableActive}
            chair={chair}
            productNumber={productNumber}
            onTableTrue={handleOnTableTrue}
            onTableFalse={handleTableFalse}
          />
        </div>
      </div>
      <div className="flex flex-col xl:pb-16">
        <div className="mt-16 h-[290px] w-full overflow-hidden sm:h-[380px] sm:px-7 md:h-[470px]  xl:order-2 2xl:h-[1170px]">
          <img
            src={PRODUCTS[productNumber].storyImg}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="px-5 sm:px-[31px] md:pb-12 xl:order-1 xl:flex xl:justify-between xl:pb-0 xl:pt-12">
          <p className="pb-3 pt-5 text-lg font-semibold sm:pt-16 sm:text-2xl md:pb-5 md:pt-14 md:text-2xl xl:w-[150px] xl:pt-0">
            THE STORY
          </p>
          <p className="text-3xl leading-8 sm:text-6xl md:text-6xl  xl:w-[1000px] 2xl:w-[1500px]">
            {PRODUCTS[productNumber].story}
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row 2xl:justify-between">
        <div className="px-5 pt-5 sm:order-2 sm:px-[31px] sm:pb-16 2xl:w-[1100px] 2xl:pb-0">
          <img src={PRODUCTS[productNumber].storyVideo} alt="" />
        </div>
        <div className=" xl:flex xl:h-[765px] xl:w-full xl:flex-col xl:justify-end 2xl:h-[1060px] 2xl:w-[500px]">
          <p className="px-5 pb-10 pt-5 text-[20px] sm:order-1 sm:px-[31px] sm:pb-0 sm:pt-20 md:pb-0 md:pt-6">
            {PRODUCTS[productNumber].secondStory}
          </p>
        </div>
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import { PRODUCTS } from "../../products";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";

// import { Pagination } from "swiper/modules";

// interface propNumber {
//   number: number;
//   chair?: boolean;
// }

// export default function Products({ number, chair }: propNumber) {
//   const [isTableActive, setIsTableActive] = useState(true);
//   const [productNumber, setProductNumber] = useState(number);

//   return (
//     <div className="pt-[75px]">
//       <div className="px-5 sm:px-[31px]">
//         <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
//           <SwiperSlide>
//             <img src={PRODUCTS[productNumber].frontImg} alt="" />
//           </SwiperSlide>
//           <SwiperSlide>
//             {chair ? (
//               <img src={PRODUCTS[productNumber].sideImg} alt="" />
//             ) : (
//               <img src={PRODUCTS[productNumber].topImg} alt="" />
//             )}
//           </SwiperSlide>
//           <SwiperSlide>
//             {chair ? (
//               <img src={PRODUCTS[productNumber].backImg} alt="" />
//             ) : (
//               <img src={PRODUCTS[productNumber].onImg} alt="" />
//             )}
//           </SwiperSlide>
//           {chair && (
//             <SwiperSlide>
//               {chair && <img src={PRODUCTS[productNumber].zoomImg} alt="" />}
//             </SwiperSlide>
//           )}
//         </Swiper>
//       </div>

//       <div className="mx-5 mb-2 border-b border-neutral-300 py-2 pb-6 sm:mx-[31px]">
//         <p className="text-[40px] font-semibold">
//           {PRODUCTS[productNumber].productName.toUpperCase()}
//         </p>
//         <p className="mt-[-10px] text-lg">{PRODUCTS[productNumber].subName}</p>
//         <p className="text-xl font-semibold">
//           €{PRODUCTS[productNumber].price}
//         </p>
//       </div>
//       <div className="flex items-center px-5 pb-1 pt-2 sm:px-[31px]">
//         <p className="pr-6 text-lg font-semibold">COLOURS</p>
//         {!chair ? (
//           <div className="flex gap-x-1">
//             <button
//               onClick={() => setProductNumber(2)}
//               className={`${
//                 productNumber === 2 && "border border-black"
//               } h-9 w-9 rounded-full bg-[#db759d]`}
//             ></button>
//             <button
//               onClick={() => setProductNumber(1)}
//               className={`${
//                 productNumber === 1 && "border border-black"
//               } h-9 w-9 rounded-full bg-[#ece5d2]`}
//             ></button>
//             <button
//               onClick={() => setProductNumber(3)}
//               className={`${
//                 productNumber === 3 && "border border-black"
//               } h-9 w-9 rounded-full bg-[#ebd98d]`}
//             ></button>
//           </div>
//         ) : (
//           <button className="h-9 w-9 rounded-full border border-black bg-[#9e5f28]"></button>
//         )}
//       </div>
//       <div className="mx-5 pb-3 sm:mx-[31px]">
//         <button className=" mt-3 w-full border bg-black py-4 text-[14px] text-white sm:py-4 sm:text-[17px]">
//           ADD TO CART
//         </button>
//       </div>
//       <div className="px-5 pb-5 text-lg font-semibold sm:px-[31px]">
//         <p>Delivery 2 to 3 weeks</p>
//         <p className="mt-[-5px]">Payment in 4X via Paypal </p>
//       </div>
//       <div className="mx-5 border-t border-neutral-300 pt-6 sm:mx-[31px]">
//         <div>
//           <div className="flex gap-x-4 pb-2">
//             <p
//               className={`${
//                 isTableActive ? "border-b border-black" : "text-neutral-500/80"
//               } text-[17px] font-semibold hover:cursor-pointer`}
//               onClick={() => setIsTableActive(true)}
//             >
//               DESCRIPTION
//             </p>
//             <p
//               className={`${
//                 isTableActive ? "text-neutral-500/80" : "border-b border-black"
//               } text-[17px] font-semibold hover:cursor-pointer`}
//               onClick={() => setIsTableActive(false)}
//             >
//               DETAILS & COMPOSITION
//             </p>
//           </div>
//           {isTableActive ? (
//             <p>{PRODUCTS[productNumber].description}</p>
//           ) : (
//             <div>
//               <div className="flex gap-x-1">
//                 <p>Dimensions :</p>
//                 <p>{PRODUCTS[productNumber].dimensions}</p>
//               </div>
//               <div className="flex gap-x-1">
//                 {chair ? (
//                   <div>Seat Height : {PRODUCTS[productNumber].seatHeight}</div>
//                 ) : (
//                   <p>Lampshade:</p>
//                 )}
//                 <p>{PRODUCTS[productNumber].lampshade}</p>
//               </div>
//               <div className="flex gap-x-1">
//                 {chair ? (
//                   <div>Seat depth : {PRODUCTS[productNumber].seatDepth}</div>
//                 ) : (
//                   <div> Base: {PRODUCTS[productNumber].base}</div>
//                 )}
//               </div>
//               <div className="flex gap-x-1">
//                 {chair ? (
//                   <div>Wood : {PRODUCTS[productNumber].wood}</div>
//                 ) : (
//                   <div>
//                     Electrical system:{" "}
//                     {PRODUCTS[productNumber].electricalSystem}
//                   </div>
//                 )}
//               </div>
//               {chair && (
//                 <>
//                   <div className="flex gap-x-1">
//                     <div>Fabrics : {PRODUCTS[productNumber].fabrics}</div>
//                   </div>
//                   <div className="flex gap-x-1">
//                     <div>
//                       Manifecturing : {PRODUCTS[productNumber].manufacturing}
//                     </div>
//                     {PRODUCTS[productNumber].electricalSystem}
//                   </div>
//                 </>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="mt-16 h-[290px] w-full overflow-hidden sm:px-7 md:h-[470px]">
//         <img
//           src={PRODUCTS[productNumber].storyImg}
//           alt=""
//           className="h-full w-full object-cover"
//         />
//       </div>
//       <div className="px-5 sm:px-[31px] md:pb-12">
//         <p className="pb-3 pt-5 text-lg font-semibold md:pb-5 md:pt-14 md:text-2xl">
//           THE STORY
//         </p>
//         <p className="text-3xl leading-8 md:text-6xl">
//           The first Benjamin desk lamp takes its inspiration from the
//           aspirational journey of the 3D visuals of designer Oursroux, Benjamin
//           Guedj's other stage name. A creation dictated by his deep desire to
//           move from the virtual to the real.
//         </p>
//       </div>
//       <div className="px-5 pt-5 sm:px-[31px]">
//         <img src={PRODUCTS[productNumber].storyVideo} alt="" />
//       </div>
//       <p className="px-5 pb-10 pt-5 text-[20px] sm:px-[31px] md:pb-16">
//         The transparency of this material allows a warm, muffled and relaxing
//         light, creating a warm atmosphere that invites reverie. The texture of
//         this material, close to the softness of the skin, plays a full role in
//         the elegance of the product.
//       </p>
//     </div>
//   );
// }
