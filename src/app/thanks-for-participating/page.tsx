import Image from "next/image";
import Link from "next/link";

export default function FinalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bmw-gradient bg-cover items-center justify-center">
      <div className="mb-[24px]">
        <Image alt="logos" src="/assets/logos.svg" width={166} height={64} />
      </div>
      <div className="mb-[25px] relative flex items-center justify-center">
        <Image
          alt="thanks-for-sharing-border"
          src="/assets/thanks-for-sharing-border.svg"
          width={150}
          height={100}
        />
        <span className="absolute text-[32px] flex uppercase text-center  font-medium leading-[40px] text-white">
          Thanks
          <br />
          for
          <br /> participating
        </span>
      </div>
      <p className="mb-[16px] text-center text-[12px] leading-[19px] uppercase max-w-[208px] text-white">
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
      </p>
      <Link href="" className="relative flex items-center justify-center mb-[25px]">
        <svg
          width="120"
          height="42"
          viewBox="0 0 120 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="118"
            height="40"
            rx="20"
            stroke="url(#paint0_linear_502_596)"
            stroke-width="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_502_596"
              x1="133.725"
              y1="-11.8197"
              x2="63.3403"
              y2="-50.874"
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
        <p className="absolute text-[16px] font-light text-white">BMW SITE</p>
      </Link>
      <div className="mb-[30px]">
        <Image
          alt="bmw-park-logo"
          src="/assets/bmw-park-logo.svg"
          width={104}
          height={16}
        />
      </div>
    </div>
    
  );
}
