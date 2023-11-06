import { CircleNotch } from "phosphor-react";
import React from "react";
import { useState } from "react";

export default function SecuredPaymentOrder() {
  const [cardNumber, setCardNumber] = useState("");
  const [showError, setShowError] = useState(false);
  const [placeOrder, setPlaceOrder] = useState(false);
  const [showOrderError, setShowOrderError] = useState(false);
  console.log(cardNumber);

  const handlePlaceOrder = () => {
    if (cardNumber === "") {
      setShowError(true);
    } else {
      setShowError(false);
      setPlaceOrder(true);
      setTimeout(() => {
        setPlaceOrder(false);
        setShowOrderError(true);
        setShowError(true);
      }, 3000);
    }
  };

  const handleCardNumberInput = (e: any) => {
    const numericValue = e.target.value.replace(/\D/g, "");
    setCardNumber(numericValue);
    setShowError(false);
  };

  return (
    <div className="mt-14 lg:mt-0 lg:w-[600px] xl:w-[800px] 2xl:w-[1300px]">
      <p className="pb-3 text-[25px]">Secured Payment</p>
      <div>
        <p className="text-[18px]">Credit Card</p>
        <p className="pb-1 text-[13px] text-neutral-400">
          Pay with your credit card via Stripe
        </p>
        <div className="pb-7">
          <div className="relative">
            <div className="absolute left-2 top-2/4 -translate-y-2/4">
              <svg
                width="27"
                height="16"
                viewBox="0 0 29 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.785 3.79411H14.4805V4.17416H14.785C14.8558 4.17416 14.9133 4.15669 14.9549 4.1218C14.9983 4.08687 15.0204 4.04086 15.0204 3.98373C15.0204 3.92741 14.9982 3.88217 14.9549 3.84647C14.9133 3.81158 14.8558 3.79411 14.785 3.79411Z"
                  fill="#e1ddd0"
                />
                <path
                  d="M7.97217 4.58919C7.98015 4.56934 7.98808 4.54394 7.99165 4.51541C7.99698 4.48605 7.99964 4.45112 8.00139 4.40988C8.00315 4.36941 8.00315 4.3202 8.00315 4.26307C8.00315 4.20676 8.00315 4.15831 8.00139 4.11708C7.99964 4.07584 7.99698 4.04091 7.99165 4.01155C7.98808 3.9822 7.98015 3.95839 7.97217 3.93777C7.96333 3.91715 7.95093 3.89968 7.93586 3.88303C7.88188 3.82351 7.80225 3.79416 7.69423 3.79416H7.44824V4.7328H7.69429C7.80225 4.7328 7.88194 4.70264 7.93592 4.64393C7.95093 4.62728 7.96333 4.609 7.97217 4.58919Z"
                  fill="#e1ddd0"
                />
                <path
                  d="M4.99678 4.12185C5.03926 4.08691 5.06141 4.0409 5.06141 3.98378C5.06141 3.92746 5.03926 3.88221 4.99678 3.84651C4.9543 3.81158 4.89766 3.79416 4.82595 3.79416H4.52151V4.17421H4.82595C4.89766 4.17421 4.9543 4.15674 4.99678 4.12185Z"
                  fill="#e1ddd0"
                />
                <path
                  d="M13.0203 4.49159H13.4318L13.2292 3.96788L13.0203 4.49159Z"
                  fill="#e1ddd0"
                />
                <path
                  d="M26.4317 0.46875H2.56831C1.15054 0.46875 0 1.50027 0 2.77137V15.2287C0 16.4998 1.15054 17.5312 2.56831 17.5312H26.4317C27.8495 17.5312 29 16.4998 29 15.2286V2.77137C29 1.50027 27.8495 0.46875 26.4317 0.46875ZM24.6758 3.02371C25.375 3.02371 25.9414 3.53152 25.9414 4.15836C25.9414 4.78521 25.375 5.29297 24.6758 5.29297C23.9767 5.29297 23.4103 4.78516 23.4103 4.15831C23.4103 3.53147 23.9767 3.02371 24.6758 3.02371ZM21.2898 3.02371C21.989 3.02371 22.5554 3.53152 22.5554 4.15836C22.5554 4.78521 21.989 5.29297 21.2898 5.29297C20.5906 5.29297 20.0242 4.78516 20.0242 4.15831C20.0242 3.53147 20.5906 3.02371 21.2898 3.02371ZM15.677 3.54259H16.2744C16.3877 3.54259 16.4842 3.56006 16.5656 3.59337C16.6453 3.6275 16.7143 3.68066 16.7745 3.75364C16.7993 3.78456 16.8188 3.81711 16.8329 3.85205C16.848 3.88618 16.8595 3.92345 16.8648 3.96473C16.8701 4.00602 16.8755 4.05122 16.8763 4.10042C16.8781 4.14963 16.879 4.20437 16.879 4.26307C16.879 4.32259 16.8781 4.37733 16.8763 4.42654C16.8754 4.47575 16.8701 4.52018 16.8648 4.56141C16.8595 4.60265 16.848 4.64079 16.8329 4.67486C16.8188 4.70898 16.7993 4.7423 16.7745 4.77327C16.7143 4.84548 16.6453 4.89941 16.5656 4.93278C16.4842 4.9669 16.3877 4.98356 16.2744 4.98356H15.677V3.54259ZM11.1803 4.07742C11.183 4.02186 11.1892 3.97108 11.1989 3.92426C11.2096 3.87744 11.2255 3.83458 11.2476 3.7965C11.2706 3.75684 11.3025 3.71875 11.344 3.68224C11.4016 3.63461 11.4662 3.59652 11.537 3.57037C11.6087 3.54416 11.6927 3.53147 11.7883 3.53147C11.9432 3.53147 12.0751 3.56955 12.1848 3.64573C12.2945 3.7219 12.3636 3.83458 12.3946 3.98611H12.0645C12.0485 3.9266 12.0184 3.87739 11.9742 3.8393C11.9299 3.80122 11.868 3.78218 11.7883 3.78218C11.7441 3.78218 11.7034 3.78852 11.6689 3.80203C11.6335 3.81554 11.6052 3.83377 11.5813 3.85677C11.5653 3.87104 11.5529 3.88851 11.5432 3.90755C11.5334 3.9266 11.5246 3.95041 11.5184 3.98058C11.5122 4.00993 11.5069 4.04725 11.5051 4.09245C11.5016 4.13769 11.4998 4.19482 11.4998 4.26302C11.4998 4.33204 11.5016 4.38916 11.5051 4.43441C11.5069 4.47966 11.5122 4.51693 11.5184 4.54709C11.5246 4.57568 11.5334 4.60107 11.5432 4.6193C11.5529 4.63835 11.5653 4.655 11.5813 4.67009C11.6052 4.69309 11.6335 4.71056 11.6689 4.72483C11.7034 4.73752 11.7441 4.74468 11.7883 4.74468C11.868 4.74468 11.9317 4.72564 11.9751 4.68674C12.0202 4.64866 12.0503 4.59945 12.0671 4.54075H12.3946C12.3636 4.69152 12.2945 4.80496 12.1848 4.88113C12.075 4.95812 11.9432 4.9962 11.7883 4.9962C11.6927 4.9962 11.6087 4.98193 11.537 4.95654C11.4662 4.92958 11.4015 4.89225 11.344 4.84386C11.3025 4.80735 11.2706 4.76926 11.2476 4.73118C11.2254 4.69152 11.2095 4.64866 11.1989 4.60265C11.1892 4.55583 11.183 4.50423 11.1803 4.44949C11.1786 4.39394 11.1768 4.33204 11.1768 4.26302C11.1768 4.19482 11.1785 4.13292 11.1803 4.07742ZM9.24216 3.54259H10.4299V3.79411H9.99798V4.98351H9.67496V3.79411H9.24216V3.54259ZM8.65718 3.54259H8.97935V4.98351H8.65718V3.54259ZM7.12522 3.54259H7.72261C7.83589 3.54259 7.9315 3.56006 8.01289 3.59337C8.09344 3.6275 8.16333 3.68066 8.22178 3.75364C8.24659 3.78456 8.26602 3.81711 8.28109 3.85205C8.29615 3.88618 8.30674 3.92345 8.31297 3.96473C8.3192 4.00602 8.32272 4.05122 8.32447 4.10042C8.32623 4.14963 8.32623 4.20437 8.32623 4.26307C8.32623 4.32259 8.32623 4.37733 8.32447 4.42654C8.32272 4.47575 8.31915 4.52018 8.31297 4.56141C8.3068 4.60265 8.29615 4.64079 8.28109 4.67486C8.26602 4.70893 8.24659 4.7423 8.22178 4.77327C8.16339 4.84548 8.09344 4.89941 8.01289 4.93278C7.93144 4.9669 7.83589 4.98356 7.72261 4.98356H7.12522V3.54259ZM5.71895 3.54259H6.80752V3.79411H6.04112V4.13135H6.69424V4.38287H6.04112V4.7328H6.80752V4.98356H5.71895V3.54259ZM4.19849 3.54259H4.84719C4.93125 3.54259 5.00562 3.55528 5.072 3.57829C5.13838 3.60211 5.19502 3.63384 5.24192 3.6735C5.28882 3.71316 5.32422 3.75998 5.34721 3.81315C5.37202 3.86632 5.38437 3.92345 5.38437 3.98373C5.38437 4.03532 5.37554 4.08133 5.35956 4.1218C5.34274 4.16227 5.32059 4.19797 5.29409 4.22971C5.26577 4.26145 5.23388 4.28841 5.19672 4.31066C5.16041 4.3329 5.12235 4.35032 5.08168 4.36225L5.4516 4.98351H5.07636L4.75419 4.40902H4.52145V4.98351H4.19843L4.19849 3.54259ZM3.41792 10.5107V9.3999H5.30122V10.5107H3.41792ZM5.30122 10.8662V12.0659H4.26045C3.79492 12.0659 3.41792 11.7279 3.41792 11.3105V10.8662H5.30122ZM3.41792 9.04443V7.93359H5.30122V9.04443H3.41792ZM3.41792 7.57812V7.13379C3.41792 6.71642 3.79492 6.37842 4.26045 6.37842H5.30122V7.57812H3.41792ZM2.70108 4.26307C2.70108 4.19482 2.70283 4.13292 2.70465 4.07742C2.70731 4.02186 2.71348 3.97108 2.72413 3.92426C2.73387 3.87744 2.7507 3.83458 2.77194 3.7965C2.79493 3.75684 2.82682 3.71875 2.8693 3.68224C2.92594 3.63461 2.98966 3.59652 3.06222 3.57037C3.13302 3.54416 3.21707 3.53147 3.31268 3.53147C3.46754 3.53147 3.6003 3.56955 3.71007 3.64573C3.81894 3.7219 3.88798 3.83458 3.91896 3.98611H3.58971C3.57289 3.9266 3.54281 3.87739 3.49943 3.8393C3.45519 3.80122 3.39323 3.78218 3.31268 3.78218C3.26754 3.78218 3.22863 3.78852 3.19323 3.80203C3.15783 3.81554 3.12951 3.83377 3.10651 3.85677C3.0906 3.87104 3.07819 3.88851 3.06754 3.90755C3.0578 3.9266 3.04981 3.95041 3.04273 3.98058C3.03656 4.00993 3.03209 4.04725 3.02948 4.09245C3.02688 4.13764 3.02506 4.19482 3.02506 4.26302C3.02506 4.33204 3.02682 4.38916 3.02948 4.43441C3.03214 4.47966 3.03656 4.51693 3.04273 4.54709C3.04981 4.57568 3.0578 4.60107 3.06754 4.6193C3.07819 4.63835 3.09054 4.655 3.10651 4.67009C3.12951 4.69309 3.15783 4.71056 3.19323 4.72483C3.22863 4.73752 3.2676 4.74468 3.31268 4.74468C3.39323 4.74468 3.45604 4.72564 3.49943 4.68674C3.54457 4.64866 3.57465 4.59945 3.59147 4.54075H3.91891C3.88793 4.69152 3.81888 4.80496 3.71002 4.88113C3.60025 4.95812 3.46754 4.9962 3.31263 4.9962C3.21702 4.9962 3.13296 4.98193 3.06216 4.95654C2.98961 4.92958 2.92588 4.89225 2.86924 4.84386C2.82676 4.80735 2.79487 4.76926 2.77188 4.73118C2.75064 4.69152 2.73382 4.64866 2.72407 4.60265C2.71343 4.55583 2.70725 4.50423 2.70459 4.44949C2.70283 4.39399 2.70108 4.33209 2.70108 4.26307ZM7.25 14.8224H2.71875V14.0099H7.25V14.8224ZM7.48189 7.57812V7.93359V8.3922V8.42236V9.04443V9.3999V9.88867V10.1695V10.5107V10.8662V11.547V12.0659H5.69771V11.547V10.8662V10.5107V10.1695V9.88867V9.3999V9.04443V8.42236V8.3922V7.93359V7.57812V7.19249V6.37842H6.73848H7.48189H7.77925H8.7209H8.91824C9.38377 6.37842 9.76167 6.71642 9.76167 7.13379V7.57812H8.7209H7.77925H7.48189ZM7.87837 9.04443V7.93359H9.76167V9.04443H7.87837ZM9.76167 9.3999V10.5107H7.87837V9.3999H9.76167ZM7.87837 12.0659V10.8662H9.76167V11.3105C9.76167 11.7279 9.38377 12.0659 8.91824 12.0659H7.87837ZM13.5938 14.8224H9.0625V14.0099H13.5938V14.8224ZM13.615 4.98351L13.5176 4.72879H12.93L12.8291 4.98351H12.4928L13.0946 3.54259H13.3477L13.9531 4.98351H13.615ZM14.7124 4.40907H14.4805V4.98356H14.1575V3.54264H14.8062C14.8894 3.54264 14.9646 3.55534 15.031 3.57834C15.0974 3.60216 15.154 3.63389 15.2009 3.67355C15.247 3.71321 15.2824 3.76004 15.3062 3.8132C15.331 3.86637 15.3425 3.9235 15.3425 3.98378C15.3425 4.03537 15.3345 4.08138 15.3177 4.12185C15.3018 4.16232 15.2797 4.19802 15.2522 4.22976C15.2239 4.2615 15.192 4.28846 15.1558 4.31071C15.1195 4.33295 15.0806 4.35037 15.0398 4.3623L15.4098 4.98356H15.0354L14.7124 4.40907ZM19.9375 14.8224H15.4062V14.0099H19.9375V14.8224ZM26.2812 14.8224H21.75V14.0099H26.2812V14.8224ZM26.2812 12.3849H17.2188V11.5724H26.2812V12.3849Z"
                  fill={`${showError ? "#f3222252" : "#e1ddd0"}`}
                />
                <path
                  d="M16.5249 4.58919C16.532 4.56934 16.54 4.54394 16.5444 4.51541C16.5488 4.48605 16.5515 4.45112 16.5532 4.40988C16.555 4.36941 16.555 4.3202 16.555 4.26307C16.555 4.20676 16.555 4.15831 16.5532 4.11708C16.5515 4.07584 16.5488 4.04091 16.5444 4.01155C16.54 3.9822 16.532 3.95839 16.5249 3.93777C16.5161 3.91715 16.5037 3.89968 16.4877 3.88303C16.4346 3.82351 16.3532 3.79416 16.2461 3.79416H16.0001V4.7328H16.2461C16.3532 4.7328 16.4346 4.70264 16.4877 4.64393C16.5037 4.62728 16.5161 4.609 16.5249 4.58919Z"
                  fill="#e1ddd0"
                />
              </svg>
              {showError && (
                <div className="absolute right-[-3px] top-[-3px] flex h-[10px] w-[10px] flex-col items-center justify-center rounded-full bg-red-500 text-white">
                  <p className="text-[9px]">!</p>
                </div>
              )}
            </div>
            <input
              onChange={handleCardNumberInput}
              value={cardNumber}
              className={`${
                showError && "text-red-500"
              } h-10 w-full border border-neutral-300 pl-10 placeholder:text-neutral-400/50 focus:border-black focus:outline-none 2xl:h-[45px]`}
              type="text"
              placeholder="Card Number"
            />
          </div>
        </div>
      </div>
      <div className="relative">
        <p className="pb-6 text-[11px]">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>
      </div>
      <button
        onClick={handlePlaceOrder}
        className="w-full bg-black py-4 text-[18px] text-white 2xl:py-[17px]"
      >
        {placeOrder ? (
          <div className="flex w-full items-center justify-center">
            <CircleNotch size={27} weight="bold" className="animate-spin" />
          </div>
        ) : (
          <p>Place order</p>
        )}
      </button>
      {showOrderError && (
        <div className="w-full pt-4">
          <p>
            Session expired. Please try again, or contact customer support for
            assistance.
          </p>
        </div>
      )}
    </div>
  );
}
