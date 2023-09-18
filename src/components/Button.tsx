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
        width="449"
        height="183"
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
      <div className="flex gap-[40px] items-center absolute">
        <div className="relative w-[105px] min-w-[105px] h-[105px] min-h[105px] rounded-full bg-transparent border-[6px] border-white flex items-center justify-center">
          {active && (
            <div className="absolute left-[18%] top-[18%] bg-[#E22718] w-[60px] min-w-[60px] min-h-[60px] h-[60px] rounded-full m-auto "></div>
          )}
        </div>
        <p className="text-[120px] leading-[162.6px] uppercase text-white font-light">
          {text}
        </p>
      </div>
    </button>
  );
}
