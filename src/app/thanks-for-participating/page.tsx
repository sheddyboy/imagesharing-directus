import Image from "next/image";

export default function FinalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bmw-gradient bg-cover items-center pt-[450px]">
      <div className="flex gap-[250px] mb-[200px]">
        <Image
          alt="bayern-logo"
          src="/assets/bayern-logo.svg"
          width={321}
          height={417}
        />
        <Image
          alt="bmw-logo"
          src="/assets/bmw-logo.svg"
          width={509}
          height={430}
        />
      </div>
      <div className="mb-[330px] relative flex items-center justify-center">
        <Image
          alt="thanks-for-sharing-border"
          src="/assets/thanks-for-sharing-border.svg"
          width={1466}
          height={1466}
        />
        <span className="absolute text-[270px] flex uppercase text-center  font-medium leading-[300px] text-white">
          Thanks
          <br />
          for
          <br /> participating
        </span>
      </div>
      <div className="mb-[650px]">
      <Image alt="bmw-park-logo" src="/assets/bmw-park-logo.svg" width={806} height={122}/>
      </div>
    </div>
  );
}
