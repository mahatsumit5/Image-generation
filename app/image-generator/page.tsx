"use client";
import Images from "@/components/Images";
import InputForm from "@/components/InputForm";
import { Skeleton } from "@/components/ui/skeleton";
import { generateImage } from "@/util";
import React, { useState, useEffect } from "react";

function Page({ searchParams }: any) {
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [images, setImages] = useState<[]>([]); // State to store images data
  const number = searchParams?.number || 0;
  const search = searchParams?.search;
  useEffect(() => {
    async function fetchData() {
      const search = searchParams?.search;

      if (search === "true") {
        setLoading(true); // Set loading to true while fetching data
        const response = await generateImage({
          number: Number(number),
          prompt: searchParams.prompt,
        });
        setImages((response as []) || []);
        setLoading(false); // Set loading to false after data is fetched
      }
    }

    fetchData();
  }, [searchParams, number]);

  return (
    <section className="text-white m-3 border border-purple-950 p-5 rounded-xl  bg-black/15 backdrop-blur-lg flex flex-col gap-5 shadow-md shadow-blue-950 min-h-[80vh] max-h-full">
      <h1 className="text-4xl text-center font-extrabold text-purple-800">
        AI Image Generator
      </h1>
      <p className="text-left text-white text-sm">
        Generate an image using Generative AI by describing what you want to
        see, all images are published publicly by default.
      </p>
      <InputForm />
      <section className="p-3 flex gap-3 flex-wrap">
        {loading ? (
          <div className="flex gap-2 flex-wrap">
            {Array(Number(number))
              .fill("")
              .map((item, index) => (
                <Skeleton
                  className=" w-[350px] h-[350px] bg-gradient-to-br from-blue  to-purple-800 flex items-center justify-center"
                  key={index}
                >
                  {search === "true" ? "Searching...." : "Loading..."}
                </Skeleton>
              ))}
          </div> // Render loading indicator while data is being fetched
        ) : (
          <Images images={images} />
        )}
      </section>
    </section>
  );
}

export default Page;
