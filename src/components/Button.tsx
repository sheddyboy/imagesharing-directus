"use client";
interface ButtonProps {
  text: string;
  active: boolean;
  onClick:()=>void
}

export default function Button({ text, active,onClick }: ButtonProps) {
  return (
    <button className="relative flex flex-col items-center justify-center" onClick={onClick}>
      <svg
        width="60"
        height="25"
        viewBox="0 0 449 183"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="3"
          width="443"
          height="177"
          rx="88.5"
          stroke="url(#paint0_linear_264_718)"
          strokeWidth="6"
        />
        <defs>
          <linearGradient
            id="paint0_linear_264_718"
            x1="500.353"
            y1="-51.5"
            x2="219.648"
            y2="-185.254"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E22718" />
            <stop
              offset="0.284616"
              stopColor="#B42B2C"
              stopOpacity="0.807031"
            />
            <stop offset="1" stopColor="#003D78" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex gap-[5px] items-center absolute">
        <div className="relative w-[15px] min-w-[15px] h-[15px] min-h[15px] rounded-full bg-transparent border-[1px] border-white flex items-center justify-center">
          {active && (
            <div className=" bg-[#E22718] w-[7.5px] min-w-[7.5px] min-h-[7.5px] h-[7.5px] ml-[0.5px] mr-[0.5px] rounded-full "></div>
          )}
        </div>
        <p className="text-[16px] leading-[18px] uppercase text-white font-light">
          {text}
        </p>
      </div>
    </button>
  );
}
