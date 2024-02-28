"use client";
import { pricing } from "@/constants";
import React, { useState } from "react";

const Pricing = () => {
  const [currentSelected, setSelected] = useState<number>(2);
  return (
    <section className=" ">
      <div className=" px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-6xl text-3xl font-medium title-font mb-2 text-purple-500">
            Pricing
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            Get full access to the Pixlr Suite on all your devices, AI-Credits
            as well as thousands of templates, extra powerful tools, more fonts,
            elements, and assets! Speed up your work and take the designs to the
            next level!{" "}
          </p>
          {/* <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
            <button className="py-1 px-4 bg-indigo-500 text-white focus:outline-none">
              Monthly
            </button>
            <button className="py-1 px-4 focus:outline-none">Annually</button>
          </div> */}
        </div>
        <div className="flex gap-4 justify-center flex-wrap ">
          {pricing.map((item) => (
            <div
              className="p-4 sm:w-1/4 md:w-1/4 w-full hover:scale-105 transition-all duration-700 hover:cursor-pointer"
              key={item.id}
              onClick={() => {
                setSelected(item.id);
              }}
            >
              <div
                className={`h-full p-6 rounded-lg flex flex-col relative overflow-hidden ${
                  currentSelected === item.id
                    ? "border-2 border-purple-600"
                    : "border-2 border-gray-700"
                }`}
              >
                {item.popular && (
                  <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                    POPULAR
                  </span>
                )}
                <h2 className="text-xl text-purple-600 tracking-widest ">
                  {item.title}
                </h2>
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  {item.name}
                </h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span className="text-purple-500">${item.price}</span>
                  <span className="text-lg ml-1 font-normal text-gray-500">
                    /mo
                  </span>
                </h1>
                {item.features.map((feature, index) => (
                  <p className="flex items-center text-white mb-2" key={index}>
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    {feature}
                  </p>
                ))}

                <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded-full">
                  {item.button}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}{" "}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
