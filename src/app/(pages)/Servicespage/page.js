import Link from "next/link";
import { FaBolt, FaWifi, FaArrowTrendUp  } from "react-icons/fa6";
import { FaTint, FaLaptopCode, FaPaintBrush } from "react-icons/fa";
import { TbDeviceMobileCode } from "react-icons/tb";
import { TbWorldWww } from "react-icons/tb";
import { AiOutlinePound } from "react-icons/ai";
import Image from "next/image";

export default function Services() {
    return (

        <main>


            <div className="relative w-full h-[400px] md:h-[450px] lg:h-[600px]">
                <Image
            src="/assets/services1.jpg"
            alt="services background"
            fill
            className=" object-cover w-full h-full z-0  brightness-85 "
            />

            <div className="absolute inset-0 bg-blue-950/40 z-10" />
            </div>
            




        <div className=" mx-4 md:mx-10 my-10">

            <h1 className=" text-xl md:text-3xl text-black  font-bold mb-8 text-center md:text-left">
                Which services are you looking for?
            </h1>

            <div className=" flex flex-wrap  gap-6 justify-center md:justify-start ">
                 <Link href={`/services/energy/energytype`}>
            <Box icon={<FaBolt />}  label="Energy" text=" Get the best electricity & gas rates."/>
            </Link>
            <Link href={`/services/broadband/energytype`}>
            <Box icon={<FaWifi />} label="Broadband" text="Choose internet that meets your needs."/>
            </Link>
            <Link href={`/services/water/energytype`}>
            <Box  icon={<FaTint />} label="Water" text="Reliable suppliers, sustainable solutions."/>
            </Link>
            <Link href="/services/payment-solution/firstform">
            <Box icon={<AiOutlinePound />} label="Payment Solution" text="Easy, efficient disposal services"/>
            </Link>
            <Link href="/services/Graphics/tech-services">
            <Box icon={<FaPaintBrush />} label="Graphics Designing" text="Visuals that speak louder than words."/>
            </Link>
            <Link href="/services/web-development/tech-services">
            <Box icon={<TbWorldWww />} label="Web Development" text="Crafted for you—efficient, effective, essential."/>
            </Link>
            <Link href="/services/SEO/tech-services">
            <Box icon={<FaArrowTrendUp />} label="SEO"  text="Boost your visibility, Rankings that rise."/>
            </Link>
            <Link href="/services/app-development/tech-services">
            <Box icon={<TbDeviceMobileCode />} label="APP development"  text="Your idea, our execution, Your app, your way."/>
            </Link>
            </div>       
        </div>
         </main>
    );
}

function Box({  icon, label, text }) {
  return (
    <div className=" shadow-[4px_4px_6px_rgba(0,0,0,0.3)] group flex flex-row items-center bg-white hover:shadow-lg rounded-xl p-4 space-x-4 w-72 hover:text-pink-500">
      <div className="text-5xl text-black group-hover:text-pink-500">
        {icon}
      </div>
      <div className="flex flex-col">
        <div className="font-bold text-lg text-black group-hover:text-pink-500">
          {label}
        </div>
        <div className="text-sm text-black group-hover:text-pink-500">
          {text}
        </div>
      </div>
    </div>
  );
}




