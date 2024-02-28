import Image from "next/image";
import React from "react";
import { Almendra } from "next/font/google";
const almendra = Almendra({
  weight: ["700"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className="max-w-screen-2xl mx-auto text-white  min-h-[30vh] flex flex-col justify-between">
      {/* <div className="p-3  flex-1">content</div> */}
      <div className="flex gap-5 p-5 justify-between">
        <span className="flex gap-5">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={35}
            height={15}
            className="rounded-full"
          />
          <h1
            className={`text-3xl ${almendra.className} font-extrabold text-purple-300`}
          >
            IGEN
          </h1>
        </span>
        <h1 className="text-sm mt-2 text-gray-300">
          IGEN @ {new Date().getFullYear()}
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
