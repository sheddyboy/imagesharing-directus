import { AuthWithDirectusRes, ItemsFromCollection } from "@/app/types";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

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

export async function updateAllowPublicObject({
  uploadUUID,
  share_id,
  value,
  router,
}: {
  uploadUUID: string;
  share_id: string;
  value: boolean;
  router: AppRouterInstance;
}) {
  fetch(
    `${process.env.NEXT_PUBLIC_BACKENDURL}/items/${process.env.NEXT_PUBLIC_COLLECTION_NAME}/${uploadUUID}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        allowPublic: value,
      }),
      cache: "no-store",
    }
  )
    .then((res) => {
      console.log("res", res);
      router.push(`/${share_id}/download?allowPublic=${value}`);
    })
    .catch((err) => console.log("err", err));
}
