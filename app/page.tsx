"use server";
import Landing from "@/components/Landing";
import Questions from "@/components/Questions";
import Image from "next/image";

export default async function Home() {
  return (
    <main className=" z-10 text-white px-3 py-5  mx-auto h-full">
      <Landing />
      <Questions />
    </main>
  );
}
