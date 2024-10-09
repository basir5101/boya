"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Clients } from "@/types/clients";
import Image from "next/image";
import React from "react";
// import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";

export default function ClientSection({ clients }: { clients: Clients }) {
  return (
    <div className="p-10 my-20">
      <h1 className="text-center text-4xl font-bold"> {clients.title} </h1>
      <h3 className="text-center text-2xl my-4"> {clients.subTitle} </h3>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
        loop={true}
        autoplay={true}
        modules={[Autoplay]}
      >
        {clients.clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="flex bg-black text-white rounded-lg">
              <div className="h-[500px] w-[2000px] overflow-hidden relative">
                <Image
                  src={client.imageUrl}
                  height={800}
                  width={500}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="ml-10 text-lg flex flex-col justify-center items-center text-center p-8">
                <div>{client.testimonial} </div>
                <div className="mt-8">
                  {client.name}, {client.role} de{" "}
                </div>
                <div> {client.restaurant} </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
