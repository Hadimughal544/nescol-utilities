"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const logos = [
  "/assets/suppliers/supp1.png",
  "/assets/suppliers/supp2.png",
  "/assets/suppliers/supp3.png",
  "/assets/suppliers/supp4.png",
  "/assets/suppliers/supp5.png",
  "/assets/suppliers/supp6.png",
  "/assets/suppliers/supp7.png",
  "/assets/suppliers/supp8.png",
  "/assets/suppliers/sup9.png",
  "/assets/suppliers/supp10.png",
  "/assets/suppliers/supp11.png",
  "/assets/suppliers/supp12.png",
  "/assets/suppliers/sup13.png",
  "/assets/suppliers/supp14.png",
  "/assets/suppliers/supp15.png",
  "/assets/suppliers/supp16.png",
  "/assets/suppliers/supp17.png",
  "/assets/suppliers/supp18.png",
  "/assets/suppliers/supp19.png",
  "/assets/suppliers/supp20.png",
];

export default function LogoSwiper() {
  return (
    <div className="bg-white px-2 rounded-xl h-40">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 3 },   // small mobiles
          640: { slidesPerView: 3 },   // bigger mobiles
          768: { slidesPerView: 4 },   // tablets
          1024: { slidesPerView: 5 },  // laptops
          1280: { slidesPerView: 5 },  // desktops
        }}
        className="h-full bg-gray-100"
      >
        {logos.map((src, i) => (
          <SwiperSlide
            key={i}
            className="flex items-center justify-center h-full"
          >
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={src}
                alt={`Logo ${i + 1}`}
                width={200}
                height={110}
                className="object-contain transition-all duration-300 hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
