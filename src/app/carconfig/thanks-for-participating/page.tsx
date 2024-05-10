import { getPublicSettings } from "@/utils";
import Image from "next/image";

interface ThanksForParticipationProps {}

export default async function ThanksForParticipation({}: ThanksForParticipationProps) {
  const data = await getPublicSettings()
  return (
  <main className="bg-car-config-bg bg-no-repeat bg-cover flex bg-[#111] py-[10px] px-[10px] min-h-screen w-screen">
      <div className=" border border-[#0885fecc] rounded-[10px] w-full flex flex-col px-[7px] justify-start items-center">
        <Image
          alt="logos"
          src="/assets/car-config-top-logos.svg"
          width={145}
          height={53}
          className="mb-[28px] mt-[50px]"
        />
        <p className="text-white text-center text-[36px] font-medium leading-[54px]">
       {data.data.contestHeader}
        </p>
        <p className="text-white text-[17px] leading-[30px] text-center font-medium mt-[53px] mb-[77px]">
        {data.data.contestFooter}
        </p>
        <a href={data.data.contestLink} className="car-config-button mb-[70px]">
        {data.data.contestButton}
        </a>
        <Image
          className="mb-[25px]"
          alt="logos"
          src="/assets/car-config-bottom-logos.svg"
          width={198}
          height={26}
        />
        
      </div>
    </main>
  );
}
