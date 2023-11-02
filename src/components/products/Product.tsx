interface ProductProps {
  firstImage?: string;
  secondImage?: string;
  price: string;
  name: string;
  paddingTop: string;
}

export default function Product({
  firstImage,
  secondImage,
  price,
  name,
  paddingTop,
}: ProductProps) {
  return (
    <div className="relative">
      <div className="group/product relative flex justify-center hover:cursor-pointer">
        <div className="relative flex h-[400px] w-[321px] justify-center sm:h-[320px] sm:w-[250px] md:h-[360px] md:w-[290px] lg:h-[520px] lg:w-[400px] xl:h-[600px] xl:w-[480px] 2xl:h-[940px] 2xl:w-[760px]">
          <img
            className="absolute top-0 h-full w-full opacity-0 duration-700 group-hover/product:opacity-100"
            src={firstImage}
            alt="back chair img"
          />
          <img
            className="duration-400 absolute top-0 h-full w-full duration-[650ms] group-hover/product:opacity-0"
            src={secondImage}
            alt="front chair img"
          />
          <div className="absolute top-[407px] w-full leading-6 sm:top-[335px] md:top-[375px] lg:top-[535px] xl:top-[615px] 2xl:top-[955px]">
            <p className="text-[19px] font-semibold">{name}</p>
            <p className="text-[18px] font-semibold">€{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
