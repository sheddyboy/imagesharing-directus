import FinalImage from "@/components/FinalImage";
import YesOrNo from "@/components/YesOrNo";
import {
  authenticateWithDirectus,
  getItemsFromCollection,
  getSharesInfo,
} from "@/utils";
import Image from "next/image";

export default async function Share({
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
  const uploadUUID = itemsFromCollection.id;

  return (
    <main className="bg-bmw-gradient min-h-screen bg-cover flex flex-col items-center">
      <div className="flex items-center mb-[36px] mt-[27px]">
        <Image alt="logos" src="/assets/logos.png" width={195} height={87} />
      </div>
      <div className="relative flex items-center justify-center mb-[30px]">
        <h1 className=" text-[28px] uppercase text-white absolute">
          Bild Teilen
        </h1>
        <Image
          alt="image-sharing-border"
          src="/assets/image-sharing-border.svg"
          width={213}
          height={50}
        />
      </div>
      <div className="relative mb-[26.5px]">
        <FinalImage
          imageUUID={imageUUID}
          accessToken={access_token}
          download={true}
        />
      </div>

      <p className="uppercase text-[14px] text-center font-normal leading-[21px] max-w-[338px] text-white mb-[28px]">
        Ich bin damit einverstanden, dass mein Bild auf der Video-Wand hier in
        der BMW Presenterbox und auf den Video-Würfel im BMW Park geteilt wird.
      </p>
      <div className="flex flex-col mb-[65px]">
        <YesOrNo uploadUUID={uploadUUID} />
      </div>
      <div className="mb-[50px]">
        <Image
          alt="bmw-park-logo"
          src="/assets/bmw-park-logo.svg"
          width={144}
          height={22}
        />
      </div>
    </main>
  );
}
