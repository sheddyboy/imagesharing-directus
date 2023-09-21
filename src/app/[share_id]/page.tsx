import FinalImage from "@/components/FinalImage";
import YesOrNo from "@/components/YesOrNo";
import { authenticateWithDirectus, getItemsFromCollection } from "@/utils";
import Image from "next/image";



export default async function Share({
  params,
}: {
  params: { share_id: string };
}) {
  const shareId = params.share_id;
  const { data: auth } = await authenticateWithDirectus({
    share_id: shareId,
  });
  const { access_token } = auth;
  const { data: itemsFromCollection } = await getItemsFromCollection({
    accessToken: access_token,
    NEXT_PUBLIC_COLLECTION_NAME: process.env.NEXT_PUBLIC_COLLECTION_NAME!,
  });
  const imageUUID = itemsFromCollection[0].image;
  const uploadUUID = itemsFromCollection[0].id;

  return (
    <main className="bg-bmw-gradient min-h-screen bg-cover flex flex-col items-center">
      <div className="flex items-center mb-[26px] mt-[50px]">
        <Image alt="logos" src="/assets/logos.svg" width={166} height={64} />
      </div>
      <div className="relative flex items-center justify-center mb-[30px]">
        <h1 className=" text-[28px] uppercase text-white absolute">
          Image sharing
        </h1>
        <Image
          alt="image-sharing-border"
          src="/assets/image-sharing-border.svg"
          width={266}
          height={50}
        />
      </div>
      <div className="relative ">
        <FinalImage imageUUID={imageUUID} accessToken={access_token} download={false}/>
      </div>

      <p className="uppercase text-[12px] text-center leading-[26px] max-w-[330px] text-white mb-[28px]">
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
        tellus..
      </p>
      <div className="flex flex-col mb-[35px]">
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
