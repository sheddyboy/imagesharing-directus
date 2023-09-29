"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Button from "./Button";
import { updateAllowPublicObject } from "@/utils";

interface YesOrNoProps {
  uploadUUID: string;
}

export default function YesOrNo({ uploadUUID }: YesOrNoProps) {
  const [selectedBtnId, setSelectedBtnId] = useState<null | "yes" | "no">(null);
  const router = useRouter();
  const { share_id } = useParams();

  const handleButtonClick = (btnId: "yes" | "no") => {
    if (selectedBtnId == null) {
      // Only change the state if the clicked button is not already active
      setSelectedBtnId(btnId);
      updateAllowPublicObject({
        router,
        share_id: share_id as string,
        uploadUUID,
        value: btnId === "yes" ? true : false,
      });
    }
  };
  return (
    <div className="relative justify-center items-center flex flex-col gap-[80px]">
      <div className="flex gap-[20px] items-center">
        <Button
          active={selectedBtnId === "yes"}
          text="JA"
          onClick={() => handleButtonClick("yes")}
        />
        <Button
          active={selectedBtnId === "no"}
          text="NEIN"
          onClick={() => handleButtonClick("no")}
        />
      </div>
    </div>
  );
}
