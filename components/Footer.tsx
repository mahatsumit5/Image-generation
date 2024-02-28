import Image from "next/image";
import React from "react";
import { Almendra } from "next/font/google";
import { footerLinks } from "@/constants";
const almendra = Almendra({
  weight: ["700"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className="max-w-screen-2xl mx-auto text-white  min-h-[30vh] flex flex-col justify-between sm:mt-24">
      <div className="p-3  flex-1">
        <footer className="text-gray-600 body-font">
          <div className="container flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              {footerLinks.map((item) => (
                <div className="lg:w-1/4 md:w-1/2 w-full px-4" key={item.id}>
                  <h2 className="title-font font-bold text-purple-500 tracking-widest text-lg mb-3">
                    {item.title}
                  </h2>
                  <nav className="list-none mb-10">
                    {item.links.map((link, index) => (
                      <li key={index}>
                        <a
                          className="text-gray-400 hover:text-gray-500"
                          href={link.link}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </nav>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </div>
      <div className="flex gap-5 p-5 justify-between sticky bottom-0 bg-white/10 backdrop-blur-md sm:rounded-lg ">
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
