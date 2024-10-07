import { Services } from "@/types/services";
import Image from "next/image";
import React from "react";

export default function ServiceSection({ services }: { services: Services }) {
  return (
    <div className="my-24">
      <h1 className="text-center text-3xl my-8"> {services.title} </h1>
      <div className="grid lg:grid-cols-4 gap-5">
        {services.services.map((service, index) => (
          <div
            key={index}
            className="h-[400px] overflow-hidden relative rounded-lg"
          >
            <Image
              src={service.imageUrl}
              height={300}
              width={200}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-2 text-white">
              <h3 className="text-2xl mt-10 text-center font-bold">
                {service.title}
              </h3>
              <p className="text-center mb-5">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-8 text-xl lg:px-20">
        {services.summary}
      </div>
      <div className="text-center">
        <button className="font-semibold">EN SAVOIR PLUS</button>
      </div>
    </div>
  );
}
