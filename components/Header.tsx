import Image from "next/image";
import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Almendra } from "next/font/google";
import { FaDollarSign } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";
import Link from "next/link";
const almendra = Almendra({
  weight: ["700"],
  subsets: ["latin"],
});
const Header = () => {
  return (
    <nav className=" px-3 py-5 sticky top-0 z-50 max-w-screen-2xl  rounded-xl    mx-auto bg-black/10 backdrop-blur-lg">
      <div className="flex justify-between">
        <div className="flex ">
          <Link href={"/"} className="flex gap-4">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={45}
              height={15}
              className="rounded-full"
            />
            <h1
              className={`text-3xl ${almendra.className} font-extrabold text-purple-600 mt-2`}
            >
              {" "}
              IGEN
            </h1>
          </Link>
        </div>

        <ul className="flex justify-between gap-5 ">
          <li className="p-2 text-white  rounded-xl text-center flex gap-1 md:border-purple-700 md:border-2">
            <IoPersonCircleSharp className="" size={25} />{" "}
            <p className="hidden md:block">Login</p>
          </li>
          <Link href={"/pricing"}>
            <li className="p-2 text-white  rounded-xl text-center flex gap-1 md:border-purple-700 md:border-2 ">
              <FaDollarSign size={21} color="yellow" />{" "}
              <p className="hidden md:block">Pricing</p>
            </li>
          </Link>
          <Link href={"/premium"}>
            <li className="p-2 bg-purple-600 text-white  rounded-xl text-center sm:flex gap-2 hidden">
              <FaCrown color="gold" size={23} /> Premium
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
