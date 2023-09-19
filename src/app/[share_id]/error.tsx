"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("error", error);
  }, [error]);
  return (
    <div className="min-h-screen bg-bmw-gradient bg-cover flex flex-col items-center justify-center gap-[16px]">
      <h1 className="text-[24px] font-light text-white text-center">Something went wrong!</h1>
      <div className="relative flex items-center justify-center cursor-pointer" onClick={reset}>
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
          stroke="url(#tryAgain)"
          strokeWidth="3"
        />
        <defs>
          <linearGradient
            id="tryAgain"
            x1="132.61"
            y1="-14.071"
            x2="57.3922"
            y2="-48.8374"
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
       
        <p className="text-[18px] leading-[20px] font-light text-white uppercase absolute">
          Try again
        </p>
      </div>
    </div>
  );
}
