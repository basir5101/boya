import { FooterContent } from "@/types/footer";
import Link from "next/link";
import React from "react";

export default function Footer({
  footerContent,
}: {
  footerContent: FooterContent;
}) {
  return (
    <div className="py-10">
      <div className="font-semibold text-2xl lg:px-20 mb-16">
        {" "}
        {footerContent.content}{" "}
      </div>
      <div className="lg:flex justify-between">
        <div className="lg:w-1/4">
          <div className="font-bold text-3xl">BOYA</div>
          <div className="my-5"> {footerContent.subtitle} </div>
          <button className="bg-[#42B796] px-5 py-3 text-white rounded-lg font-semibold text-lg">
            {footerContent.btnText}
          </button>
        </div>
        <div className="lg:w-2/3">
          <div className="grid lg:grid-cols-2 gap-3 text-right">
            {footerContent.links.map((link, index) => (
              <Link key={index} href={`/${link.route}`}>
                {link.label}{" "}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="text-end"> {footerContent.address} </div>
    </div>
  );
}
