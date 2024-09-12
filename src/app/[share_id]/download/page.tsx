import DoneButton from "@/components/DoneButton";
import FinalImage from "@/components/FinalImage";
import {
  authenticateWithDirectus,
  getItemsFromCollection,
  getSharesInfo,
} from "@/utils";
import Image from "next/image";

interface DownloadPageProps {
  params: {
    share_id: string;
  };
}

export default async function DownloadPage({
  params: { share_id },
}: DownloadPageProps) {
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
    <main className="bg-bmw-gradient min-h-screen bg-cover flex flex-col items-center">
      <div className="flex items-center mb-[36px] mt-[27px]">
        <Image alt="logos" src="/assets/logos.png" width={195} height={87} />
      </div>
      <div className="relative flex items-center justify-center mb-[30px]">
        <h1 className=" text-[28px] uppercase leading-[37.94px] text-white absolute">
          Bild Teilen
        </h1>
        <Image
          alt="image-sharing-border"
          src="/assets/image-sharing-border.svg"
          width={213}
          height={50}
        />
      </div>
      <div className="relative mb-[97px]">
        <FinalImage
          imageUUID={imageUUID}
          accessToken={access_token}
          download={true}
        />
      </div>
      <DoneButton />
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
