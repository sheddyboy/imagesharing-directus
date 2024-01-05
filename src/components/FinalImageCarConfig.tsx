"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface FinalImageOrDownloadBtnProps {
  access_token: string;
  imageUUID: string;
  downloadBtn: boolean;
}

export default function FinalImageOrDownloadBtn({
  access_token,
  imageUUID,
  downloadBtn,
}: FinalImageOrDownloadBtnProps) {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState<null | string>(null);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKENDURL}/assets/${imageUUID}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${access_token}`,
      },
      cache: "no-store",
    })
      .then((data) => {
        return data.blob();
      })
      .then((imageBlob) => {
        const blobUrl = URL.createObjectURL(imageBlob);

        setImageUrl(blobUrl);
      })
      .catch((err: any) => {
        console.log("err", err);
      });
  }, [access_token, imageUUID]);
  return (
    <>
      {!downloadBtn ? (
        <div className="flex justify-center items-center relative px-[12px] w-full">
          {imageUrl ? (
            <Image
              className="car-config-image"
              width={370}
              height={446}
              alt=""
              src={imageUrl}
            />
          ) : (
            <div className="w-full max-w-[370px] mx-auto">
              <div className="relative pt-[56.75675675675676%]">
                <div className="absolute inset-0 bg-gray-400 rounded-[8px]"></div>
              </div>
            </div>
          )}
          {imageUrl && (
            <a
              href={imageUrl}
              download="my_photo"
              target="_blank"
              className="absolute"
              onClick={() => router.push("/carconfig/thanks-for-participating")}
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="80"
                  height="80"
                  rx="40"
                  fill="white"
                  fillOpacity="0.3"
                />
                <path
                  d="M41.65 42.1615C42.2238 41.6557 42.7878 41.1547 43.3295 40.6688C43.4766 40.5368 43.4766 40.5368 43.6234 40.4047C45.0743 39.0984 46.2002 38.0457 46.8733 37.3555L49.2709 39.5543C48.5354 40.3085 47.369 41.399 45.8688 42.7497C45.7196 42.884 45.7196 42.884 45.5702 43.018C44.6024 43.8861 43.5668 44.7996 42.5313 45.7028C41.91 46.2447 41.4264 46.6631 41.1489 46.9017L40.0521 47.8449L38.9572 46.8998C38.6798 46.6604 38.1962 46.2405 37.575 45.6969C36.5397 44.7909 35.5041 43.8747 34.5365 43.0047C34.392 42.8747 34.392 42.8747 34.2476 42.7445C32.7435 41.3872 31.5742 40.2927 30.8379 39.5387L33.2341 37.3385C33.9095 38.0301 35.0396 39.0879 36.4957 40.4019C36.6378 40.5301 36.6378 40.5301 36.7802 40.6582C37.2874 41.1142 37.8141 41.5836 38.35 42.0578V24H41.65V42.1615ZM51 52.8V56H29V52.8H51Z"
                  fill="white"
                />
              </svg>
            </a>
          )}
        </div>
      ) : (
        <a
          href={imageUrl ? imageUrl : "#"}
          download="my_photo"
          target="_blank"
          className="car-config-button mb-[70px]"
          onClick={() => {
            imageUrl && router.push("/carconfig/thanks-for-participating");
          }}
        >
          Download
        </a>
      )}
    </>
  );
}
