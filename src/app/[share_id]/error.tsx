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
    <div className="min-h-screen bg-bmw-gradient bg-cover flex flex-col items-center justify-center gap-[90px]">
      <h1 className="text-[200px] text-white text-center">Something went wrong!</h1>
      <div className="relative flex items-center justify-center cursor-pointer" onClick={reset}>
        <svg
          width="800"
          height="183"
          viewBox="0 0 800 183"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3.5"
            y="3"
            width="793"
            height="177"
            rx="88.5"
            stroke="url(#paint0_linear_264_871)"
            strokeWidth="6"
          />
          <defs>
            <linearGradient
              id="paint0_linear_264_871"
              x1="518.683"
              y1="-51.5"
              x2="231.826"
              y2="-193.056"
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
        <p className="text-[130px] font-light text-white uppercase absolute">
          Try again
        </p>
      </div>
    </div>
  );
}
