"use client";

import { useState } from "react";
import Button from "./Button";
import SubmitButton from "./SubmitButton";

interface YesOrNoProps {
  uploadUUID: string;
  accessToken: string;
}

export default function YesOrNo({ accessToken, uploadUUID }: YesOrNoProps) {
  const [selectedBtnId, setSelectedBtnId] = useState<null | "yes" | "no">(null);
  return (
    <div className="relative justify-center items-center flex flex-col gap-[80px] mb-[280px]">
      <div className="flex gap-[100px] items-center">
        <Button
          active={selectedBtnId === "no"}
          text="NO"
          onClick={() => setSelectedBtnId("no")}
        />
        <Button
          active={selectedBtnId === "yes"}
          text="YES"
          onClick={() => setSelectedBtnId("yes")}
        />
      </div>
      {selectedBtnId && (
        <SubmitButton
          accessToken={accessToken}
          uploadUUID={uploadUUID}
          text="SUBMIT"
          link={
            selectedBtnId === "yes"
              ? "thanks-for-sharing"
              : "thanks-for-participating"
          }
        />
      )}
    </div>
  );
}
