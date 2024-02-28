"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
interface imagesProps {
  url: string[];
}
const Images = ({ images }: { images: [] }) => {
  //   const serachParams = useSearchParams();
  //   const searchParams = serachParams.get("search");
  //   const skeletonArray = Number(serachParams.get("number")) || 1;
  const [quality, setQuality] = useState<number>(1);

  return (
    <>
      {images.map((item: { url: string }) => (
        <span key={item.url}>
          <Image
            src={item.url}
            alt="image"
            height={350}
            width={350}
            className="rounded-md"
            loading="lazy"
            onLoad={(e) => setQuality(5)}
            quality={quality}
            onLoadingComplete={() => setQuality(75)}
          />
        </span>
      ))}
    </>
  );
};
export default Images;
