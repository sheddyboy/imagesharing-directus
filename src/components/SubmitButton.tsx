"use client";

import { useRouter } from "next/navigation";

interface SubmitButtonProps {
  text: string;
  link: "thanks-for-sharing" | "thanks-for-participating";
  uploadUUID: string;
  accessToken: string;
}

export default function SubmitButton({
  text,
  link,
  uploadUUID,
  accessToken,
}: SubmitButtonProps) {
  const router = useRouter();
  return (
    <div
      className="absolute top-[160%] flex items-center justify-center cursor-pointer"
      onClick={() => {
        // fetch(`${process.env.NEXT_PUBLIC_BACKENDURL}/assets/${uploadUUID}`, {
        //   method: "PUT",
        //   body: JSON.stringify({
        //     allowPublic: link === "thanks-for-sharing" ? true : false,
        //   }),
        //   headers: {
        //     authorization: `Bearer ${accessToken}`,
        //   },
        //   cache: "no-store",
        // })
        //   .then(() => router.push(`/${link}`))
        //   .catch((err) => console.log("err", err));
        router.push(`/${link}`);
      }}
    >
      <svg
        width="600"
        height="183"
        viewBox="0 0 600 183"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3.5"
          y="3"
          width="593"
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
        {text}
      </p>
    </div>
  );
}
