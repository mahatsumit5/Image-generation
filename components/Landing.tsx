"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Landing = () => {
  const navigate = useRouter();
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between w-full  gap-5 border-b border-b-purple-950 pb-3">
      <div className="w-full md:w-2/4 flex flex-col justify-center gap-8 items-start">
        <h1 className="font-extrabold text-7xl text-purple-700">
          Generate Image
        </h1>
        <h1 className=" text-4xl">with prompt</h1>
        <p className="text-sm font-bold">AI IMAGE GENERATOR</p>
        <p className="text-sm font-bold">
          The suite for all your creative photo and design editing needs
          directly in your web browser, on your smartphone, or on your desktop,
          all free. The only limit is your imagination!
        </p>
        <button
          className="rounded-full border-2 p-3 bg-black/50 border-purple-600 hover:shadow-lg shadow-slate-50"
          onClick={() => {
            navigate.push("/image-generator");
          }}
        >
          AI Image Generator
        </button>
      </div>
      <div className="w-full md:w-2/4  h-[40vh] md:h-[70vh] relative">
        <Image
          src={"/source.png"}
          alt="img"
          fill
          className="object-cover overflow-hidden rounded-lg transition-all"
        />
      </div>
    </section>
  );
};

export default Landing;
