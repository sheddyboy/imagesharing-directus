import Image from "next/image";

export default function FinalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bmw-gradient bg-cover items-center justify-center">
      <div className="flex gap-[30px] mb-[30px]">
        <Image
          alt="bayern-logo"
          src="/assets/bayern-logo.svg"
          width={50}
          height={283}
        />
        <Image
          alt="bmw-logo"
          src="/assets/bmw-logo.svg"
          width={80}
          height={292}
        />
      </div>
      <div className="mb-[50px] relative flex items-center justify-center">
        <Image
          alt="thanks-for-sharing-border"
          src="/assets/thanks-for-sharing-border.svg"
          width={150}
          height={100}
        />
        <span className="absolute text-[24px] flex uppercase text-center  font-medium leading-[30px] text-white">
          Thanks
          <br />
          for
          <br /> participating
        </span>
      </div>
      <div className="mb-[20px]">
      <Image alt="bmw-park-logo" src="/assets/bmw-park-logo.svg" width={60} height={72}/>
      </div>
    </div>
  );
}
