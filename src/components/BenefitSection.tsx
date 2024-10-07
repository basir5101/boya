import { Benefits } from "@/types/benefits";
import React from "react";

export default function BenefitSection({ benefits }: { benefits: Benefits }) {
  return (
    <div className="my-10">
      <div className="flex items-center">
        <div className="mr-8">
          <h1 className="text-7xl font-bold">
            {benefits.title} <span className="text-[#42B796]">BOYA</span>{" "}
          </h1>
          <div className="mt-4 text-lg"> {benefits.subTitle} </div>
        </div>
        <div>
          {benefits.benefits.map((benefit, index) => (
            <div key={index}>
              <div className="font-semibold mb-1 mt-5 w-60">
                {" "}
                {benefit.title}{" "}
              </div>
              <div> {benefit.description} </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center my-10">
        <button className="bg-[#42B796] py-3 px-10 text-white rounded-lg font-semibold text-lg">
          {" "}
          {benefits.btnText}{" "}
        </button>
      </div>
    </div>
  );
}
