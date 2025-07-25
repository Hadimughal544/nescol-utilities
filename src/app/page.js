import Image from "next/image";
import { FaBolt, FaFireFlameCurved,  FaWifi  } from "react-icons/fa6";
import { IoWalletOutline } from "react-icons/io5";
import { AiOutlinePound } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiOutlineCurrencyPound } from "react-icons/hi";
import { FaTint } from "react-icons/fa";
import Link from "next/link";
import LogoSwiper from "./components/swiper";
import PostCostLookup from "./components/PostCodeLookup";

export default function Home() {
 return(
  <main>
    <div className=" relative h-[680px] w-full">

      <Image
      src="/assets/Homepage.jpg"
      alt="homepage picture"
      className=" object-fill z-0"
      fill
      />

      <div className="relative z-20 flex  h-full ">

  <div className=" bg-transparent *: text-white py-8 px-20  ">
    <h1 className=" text-4xl  font-extrabold mb-4">Explore Business Services.</h1>
    <h3 className=" text-2xl text-bold textb mb-4">Uncover the top deals for your business today.</h3>
    <p className=" text-lg ">We assess various reliable UK suppliers across the market to guarantee <br></br> you the best price for your business.</p>

    <div className="   mt-10 grid grid-cols-1 md:grid-cols-3 space-x-4 ">
      <div className=" space-y-6">
        <div>
          <Link href="/energytype">
          <Service icon={<FaBolt />} label="Energy" text=" Get the best electricity & gas rates."/>
          </Link>
        </div>
        <div>
          <Link href="/Broadband">
        <Service icon={<FaWifi />} label="Broadband" text="Choose internet that meets your needs."/>
        </Link>
        </div>        
      </div>
      <div className=" space-y-6">
        <div>
          <Link href="/Water">
          <Service icon={<FaTint />} label="Water" text="Reliable suppliers, sustainable solutions."/>
          </Link>
        </div>
        <div>
          <Link href="/POS">
          <Service icon={<HiOutlineCurrencyPound />} label="Payment Solutions" text="Easy, efficient disposal services"/>
          </Link>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>

  
  </main>
 );
}



function Service({ icon, label, text }) {
  return (
    <div className="group flex flex-row items-center bg-white border rounded-xl p-4 space-x-4 w-72 hover:text-pink-500">
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


function Saving({icon, text}) {
  return(
    <div className=" border ">
      <div className="text-5xl text-black group-hover:text-pink-500">
        {icon}
      </div>
      <div className="text-sm text-black group-hover:text-pink-500">
        {text}
      </div>
    </div>
  );
}

