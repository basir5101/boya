import { MarketingContents } from "@/types/marketing";
import Image from "next/image";
import React from "react";

export default function MarketingSection({
  marketingContent,
}: {
  marketingContent: MarketingContents;
}) {
  return (
    <div className="py-10">
      <h1 className="text-center text-3xl font-bold my-5">
        {" "}
        {marketingContent.title}{" "}
      </h1>
      <h3 className="text-lg text-center mb-5 font-semibold">
        {" "}
        {marketingContent.subTitle}{" "}
      </h3>
      <div className="grid lg:grid-cols-2 gap-5">
        {marketingContent.items.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="flex w-32 p-2 justify-center items-center">
              {item.icons.map((icon, iconIndex) => (
                <Image
                  key={iconIndex}
                  src={icon.imageUrl}
                  height={30}
                  width={30}
                  alt=""
                  style={{ height: "30px", width: "auto" }}
                />
              ))}
            </div>
            <div> {item.name} </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="border border-[#42B796] rounded-lg text-lg px-3 py-3 mt-8 hover:text-white hover:bg-[#42B796] transition-all">
          {" "}
          {marketingContent.btnText}{" "}
        </button>
      </div>
    </div>
  );
}
