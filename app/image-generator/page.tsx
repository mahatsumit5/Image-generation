"use client";
import InputForm from "@/components/InputForm";
import { Skeleton } from "@/components/ui/skeleton";
import { generateImage } from "@/util";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Page({ searchParams }: any) {
  const [loading, setLoading] = useState(false); // State to manage loading status
  const [image, setImage] = useState<string>(""); // State to store images data
  // const number = searchParams?.number || 0;
  // const search = searchParams?.search;
  // useEffect(() => {
  //   const search = searchParams?.search;

  //   async function fetchData() {
  //     if (search === "true") {
  //       setLoading(true); // Set loading to true while fetching data
  //       const response = await generateImage({
  //         number: Number(number),
  //         prompt: searchParams.prompt,
  //       });
  //       console.log(response);
  //       setImages((response as []) || []);
  //       setLoading(false); // Set loading to false after data is fetched
  //     }
  //   }

  //   fetchData();
  // }, [searchParams, number]);
  console.log(image);
  return (
    <section className="text-white m-3 border border-purple-950 p-5 rounded-xl  bg-black/15 backdrop-blur-lg flex flex-col gap-5 shadow-md shadow-blue-950 min-h-[80vh] max-h-full">
      <h1 className="text-4xl text-center font-extrabold text-purple-800">
        AI Image Generator
      </h1>
      <p className="text-left text-white text-sm">
        Generate an image using Generative AI by describing what you want to
        see, all images are published publicly by default.
      </p>
      <InputForm setImage={setImage} setLoading={setLoading} />
      <section className=" flex gap-3 flex-wrap w-full">
        {loading ? (
          <div className="w-full">
            <Skeleton className=" w-full h-[350px] bg-gradient-to-br from-blue  to-purple-800 flex items-center justify-center">
              Generating Image.....
            </Skeleton>
          </div> // Render loading indicator while data is being fetched
        ) : (
          <div className="w-full h-[50vh]  rounded-md relative">
            {image && (
              <Link href={image}>
                <Image
                  src={image}
                  alt="image"
                  fill
                  className={`object-cover}`}
                  loading="lazy"
                />
              </Link>
            )}
          </div>
        )}
      </section>
    </section>
  );
}

export default Page;
