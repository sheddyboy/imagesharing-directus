import { AuthWithDirectusRes, ItemsFromCollection } from "@/app/types";

export async function authenticateWithDirectus({
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
  export async function getItemsFromCollection({
    NEXT_PUBLIC_COLLECTION_NAME,
    accessToken,
  }: {
    NEXT_PUBLIC_COLLECTION_NAME: string;
    accessToken: string;
  }): Promise<ItemsFromCollection> {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKENDURL}/items/${NEXT_PUBLIC_COLLECTION_NAME}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  
    if (res.status !== 200) {
      const data = await res.json();
      throw new Error(JSON.stringify(data));
    }
  
    return res.json();
  }