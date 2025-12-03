"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const logos = [
  "/assets/suppliers/supp14.png",
  "/assets/suppliers/supp15.png",
  "/assets/suppliers/supp16.png",
  "/assets/suppliers/supp17.png",
  "/assets/suppliers/supp18.png",
  "/assets/suppliers/supp19.png",
  "/assets/suppliers/supp20.png",
];

export default function BTSwiper() {
  return (
    <div className="bg-white px-2 rounded-xl h-40">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        spaceBetween={10}
        breakpoints={{
          320: { slidesPerView: 3 }, // small mobiles
          640: { slidesPerView: 3 }, // bigger mobiles
          768: { slidesPerView: 4 }, // tablets
          1024: { slidesPerView: 6 }, // laptops
          1280: { slidesPerView: 6 }, // desktops
        }

        } // number of logos visible at once
        autoplay={{
          delay: 0, // no delay between slides
          disableOnInteraction: false,
        }}
        speed={6000} // smooth scrolling speed (bigger = slower)
        allowTouchMove={false} // prevent dragging
        className="h-26 bg-gray-100"
      >
        {logos.map((src, i) => (
          <SwiperSlide
            key={i}
            className="flex items-center justify-center h-f-24"
          >
            <div className="w-full h-24 flex items-center justify-center">
              <Image
                src={src}
                alt={`Logo ${i + 1}`}
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
