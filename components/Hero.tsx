"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Hero = () => {
  const navigate = useRouter();
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between w-full  mt-10 md:mt-24 gap-10  pb-3 md:h-[50vh]">
      <div className="w-full md:w-1/2 flex flex-col gap-8 h-full">
        <h1 className="uppercase  text-purple-300 text-md tracking-widest ">
          generative AI
        </h1>
        <h1 className="uppercase  text-purple-300 text-2xl font-bold">
          AI image generator magic!
        </h1>
        <p>
          Elevate your creations with the revolutionary Text to Image AI image
          generator, revolutionizing the way you convert simple text into
          visually captivating artwork. Unleash your imagination and craft
          breathtaking, AI-generated masterpieces that are bound to captivate
          and inspire your audience.
        </p>
        <button
          className="rounded-full border-2 p-3 bg-black/50 border-purple-600 hover:border-purple-300"
          onClick={() => {
            navigate.push("/image-generator");
          }}
        >
          AI Image Generator
        </button>
      </div>
      <div className="w-full md:w-1/2  relative h-[30vh] md:h-full ">
        <span className="absolute top-4 left-20 md:left-36 h-5/6 w-1/3 rounded-lg hover:left-4 transition-all duration-300">
          <Link href={"/dog.webp"}>
            <Image
              src={"/dog.webp"}
              fill
              alt="dog"
              className="object-cover rounded-lg"
            />
          </Link>
        </span>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 z-10   h-full w-1/3 hover:scale-110 transition-all duration-100">
          <Link href={"/dog2.webp"}>
            <Image
              src={"/dog2.webp"}
              fill
              alt="dog"
              className="object-cover rounded-lg"
            />
          </Link>
        </span>
        <span className="absolute top-4 right-20 md:right-36 h-5/6 w-1/3 rounded-lg hover:right-4 transition-all duration-300">
          <Link href={"/stromtropper.webp"}>
            <Image
              src={"/stromtropper.webp"}
              fill
              alt="dog"
              className="object-cover rounded-lg"
            />
          </Link>
        </span>
      </div>
    </section>
  );
};

export default Hero;
