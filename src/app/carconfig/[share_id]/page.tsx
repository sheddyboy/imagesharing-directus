import FinalImageOrDownloadBtn from "@/components/FinalImageCarConfig";
import {
  authenticateWithDirectus,
  getItemsFromCollection,
  getSharesInfo,
} from "@/utils";
import Image from "next/image";

export default async function CarConfig({
  params: { share_id },
}: {
  params: { share_id: string };
}) {
  const { data: auth } = await authenticateWithDirectus({
    share_id,
  });
  const { access_token } = auth;
  const {
    data: { item: item_id },
  } = await getSharesInfo({ share_id });
  const { data: itemsFromCollection } = await getItemsFromCollection({
    accessToken: access_token,
    NEXT_PUBLIC_COLLECTION_NAME: process.env.NEXT_PUBLIC_COLLECTION_NAME!,
    item_id,
  });
  const imageUUID = itemsFromCollection.image;

  return (
    <main className="bg-car-config-bg bg-no-repeat bg-cover flex bg-[#111] py-[10px] px-[10px] min-h-screen w-screen">
      <div className=" border border-[#0885fecc] rounded-[10px] w-full flex flex-col justify-start items-center">
        <Image
          alt="logos"
          src="/assets/car-config-top-logos.svg"
          width={145}
          height={53}
          className="mb-[28px] mt-[50px]"
        />
        <FinalImageOrDownloadBtn
          access_token={access_token}
          imageUUID={imageUUID}
          downloadBtn={false}
        />

        <p className="text-white text-[30px] leading-[37px] text-center font-medium mt-[16px] mb-[34px]">
          HOL DIR DEIN <br />
          BMW iX2 DESIGN 
        </p>
        <FinalImageOrDownloadBtn
          access_token={access_token}
          imageUUID={imageUUID}
          downloadBtn={true}
        />
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
