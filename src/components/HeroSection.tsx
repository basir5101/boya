import React from "react";
import hero1 from "@/assets/hero1.jpeg";
import hero2 from "@/assets/hero2.jpeg";
import hero3 from "@/assets/hero3.jpeg";
import { Hero } from "@/types/hero";
import Image from "next/image";

export default function HeroSection({ pageData }: { pageData: Hero }) {
  return (
    <div className="flex  justify-between items-center mt-16">
      <div className="w-1/2">
        <h1 className="text-7xl font-bold">
          {pageData.title}
          <span className="text-3xl text-[#42B796]">
            {" "}
            {pageData.subtitle}{" "}
          </span>{" "}
        </h1>
        <button className="text-2xl font-semibold bg-[#42B796] px-7 py-3 rounded-lg mt-28">
          {" "}
          {pageData.btnText}{" "}
        </button>
      </div>
      <div className="w-1/2 ml-40">
        <div className="relative ml-10">
          <div className="flex w-full mt-28 overflow-visible items-center">
            <Image
              className="mr-24"
              height={300}
              width={150}
              alt=""
              src={hero2}
              style={{
                height: "180px",
                width: "auto",
              }}
            />
            <Image height={400} width={150} alt="" src={hero3} />
          </div>
          <Image
            className="absolute -top-16 left-32 -z-10"
            height={400}
            width={150}
            alt=""
            src={hero1}
          />
        </div>
        <div className="text-xl font-semibold w-full"> {pageData.content} </div>
      </div>
    </div>
  );
}
