import FinalImage from "@/components/FinalImage";
import YesOrNo from "@/components/YesOrNo";
import Image from "next/image";

interface AuthWithDirectusRes {
  data: {
    access_token: string;
    expires: number;
  };
}
interface ItemsFromCollection {
  data: {
    id: string;
    date_created: Date;
    date_updated: Date;
    image: string;
    allowPublic: boolean;
  }[];
}

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
    collectionName: process.env.COLLECTIONNAME!,
  });
  const imageUUID = itemsFromCollection[0].image;
  const uploadUUID = itemsFromCollection[0].id;
  console.log("imageUUID", imageUUID);
  // const access_token = ""
  // const imageUUID = ""
  // const uploadUUID = ""
  
  return (
    <main className="min-h-screen bg-bmw-gradient bg-cover flex flex-col items-center">
      <div className="flex items-center gap-[50px] mb-[30px] mt-[50px]">
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
      <div className="relative flex items-center justify-center mb-[30px]">
        <h1 className=" text-[24px] uppercase text-white absolute">
          Image sharing
        </h1>
        <Image
          alt="image-sharing-border"
          src="/assets/image-sharing-border.svg"
          width={250}
          height={237}
        />
      </div>
      <div className="relative">
        <FinalImage imageUUID={imageUUID} accessToken={access_token} />
      </div>

      <p className="uppercase text-[20px] leading-[22px] text-white mb-[50px] max-w-[80%]">
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
        tellus..
      </p>
      <div className="flex flex-col mb-[20px]">
        <YesOrNo accessToken={access_token} uploadUUID={uploadUUID} />
      </div>
      <div className="mb-[30px]">
        <Image
          alt="bmw-park-logo"
          src="/assets/bmw-park-logo.svg"
          width={60}
          height={72}
        />
      </div>
    </main>
  );
}

async function authenticateWithDirectus({
  share_id,
}: {
  share_id: string;
}): Promise<AuthWithDirectusRes> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKENDURL}/shares/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      share: share_id,
    }),
    cache: "no-store",
  });
  if (res.status !== 200) {
    const data = await res.json();
    throw new Error(JSON.stringify(data));
  }

  return res.json();
}
async function getItemsFromCollection({
  collectionName,
  accessToken,
}: {
  collectionName: string;
  accessToken: string;
}): Promise<ItemsFromCollection> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKENDURL}/items/${collectionName}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (res.status !== 200) {
    const data = await res.json();
    throw new Error(JSON.stringify(data));
  }

  return res.json();
}