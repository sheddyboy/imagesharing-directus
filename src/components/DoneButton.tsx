"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation";


export default function DoneButton() {
    const searchParam = useSearchParams()
    const allowPublic = searchParam.get("allowPublic")
    console.log("searchParam",searchParam.get("allowPublic"))
    return <Link href={`/${allowPublic === "true"?"thanks-for-sharing":"thanks-for-participating"}` }className="relative flex items-center justify-center mb-[25px]">
    <svg
      width="99"
      height="42"
      viewBox="0 0 99 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="97"
        height="40"
        rx="20"
        stroke="url(#paint0_linear_502_663)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_502_663"
          x1="110.323"
          y1="-11.8197"
          x2="47.5352"
          y2="-40.5619"
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
    <p className="absolute text-white text-[16px] font-light">DONE</p>
  </Link>
}