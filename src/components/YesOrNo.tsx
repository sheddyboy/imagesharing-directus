"use client";

import { useState } from "react";
import { useRouter,useParams } from "next/navigation";
import Button from "./Button";

interface YesOrNoProps {
  uploadUUID: string;
  accessToken: string;
}

export default function YesOrNo({ accessToken, uploadUUID }: YesOrNoProps) {
  const [selectedBtnId, setSelectedBtnId] = useState<null | "yes" | "no">(null);
  const router = useRouter();
  const {share_id} = useParams();

  const handleButtonClick = (btnId: "yes" | "no") => {
    if (selectedBtnId == null) {
      // Only change the state if the clicked button is not already active
      setSelectedBtnId(btnId);
      // fetch(
      //   `${process.env.NEXT_PUBLIC_BACKENDURL}/items/${process.env.NEXT_PUBLIC_COLLECTION_NAME}/${uploadUUID}`,
      //   {
      //     method: "PUT",
      //     body: JSON.stringify({
      //       allowPublic: btnId === "yes" ? true : false,
      //     }),
      //     headers: {
      //       authorization: `Bearer ${accessToken}`,
      //     },
      //     cache: "no-store",
      //   }
      // )
      //   .then(() =>
      //     router.push(
      //       `/${share_id}/download?allowPublic=${btnId === "yes" ? "true" : "false"}`
      //     )
      //   )
      //   .catch((err) => console.log("err", err));

        router.push(
          `/${share_id}/download?allowPublic=${btnId === "yes" ? "true" : "false"}`
        )
    }
  };
  return (
    <div className="relative justify-center items-center flex flex-col gap-[80px] mb-[50px]">
      <div className="flex gap-[20px] items-center">
        <Button
          active={selectedBtnId === "no"}
          text="NO"
          onClick={() => handleButtonClick("no")}
        />
        <Button
          active={selectedBtnId === "yes"}
          text="YES"
          onClick={() => handleButtonClick("yes")}
        />
      </div>
    </div>
  );
}
