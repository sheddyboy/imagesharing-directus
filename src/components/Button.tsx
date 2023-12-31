"use client";
interface ButtonProps {
  text: "JA"|"NEIN";
  active: boolean;
  onClick: () => void;
}

export default function Button({ text, active, onClick }: ButtonProps) {
  return (
    <button
      className="relative flex flex-col items-center justify-center"
      onClick={onClick}
    >
      <svg
        width="119"
        height="50"
        viewBox="0 0 119 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.5"
          y="1.5"
          width="116"
          height="47"
          rx="23.5"
          stroke={text === "JA" ? "url(#no1)":"url(#no2)"}
          strokeWidth="3"
        />
        <defs>
          <linearGradient
            id={text === "JA" ? "no2":"no1"}
            x1={text === "JA" ? "132.61":"-9.44681"}
            y1={text === "JA" ? "-14.071":"25"}
            x2={text === "JA" ? "57.3922":"96.0577"}
            y2={text === "JA" ? "-48.8374":"36.8652"}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E22718" />
            <stop
              offset="0.284616"
              stopColor="#B42B2C"
              stopOpacity="0.807031"
            />
            <stop offset="1" stopColor="#003D78" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex gap-[10px] items-center absolute">
        <div className="relative w-[30px] min-w-[30px] h-[30px] min-h[30px] rounded-full bg-transparent border-[2px] border-white flex items-center justify-center">
          {active && (
            <div className=" bg-[#E22718] w-[16px] min-w-[16px] min-h-[16px] h-[16px] ml-[0.5px] mr-[0.5px] rounded-full "></div>
          )}
        </div>
        <p className={`text-[20px] leading-[24px] uppercase text-white ${active ? "font-bold":"font-light"}`}>
          {text}
        </p>
      </div>
    </button>
  );
}
