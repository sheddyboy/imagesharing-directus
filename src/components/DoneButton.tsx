"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function DoneButton() {
  const searchParam = useSearchParams();
  const allowPublic = searchParam.get("allowPublic");
  return (
    <Link
      href={`/${
        allowPublic === "true"
          ? "thanks-for-sharing"
          : "thanks-for-participating"
      }`}
      className="relative flex items-center justify-center mb-[68px]"
    >
      <svg
        width="134"
        height="47"
        viewBox="0 0 134 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.5"
          y="1"
          width="131"
          height="45"
          rx="22.5"
          stroke="url(#paint0_linear_10_5)"
          stroke-width="2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_10_5"
            x1="148.712"
            y1="-13.2268"
            x2="70.3506"
            y2="-56.2907"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E22718" />
            <stop
              offset="0.284616"
              stop-color="#B42B2C"
              stop-opacity="0.807031"
            />
            <stop offset="1" stop-color="#003D78" stop-opacity="0.05" />
          </linearGradient>
        </defs>
      </svg>
      <p className="absolute text-white text-[20px] leading-[27.1px] uppercase font-light">
        FERTIG
      </p>
    </Link>
  );
}
