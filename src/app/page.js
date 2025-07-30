import Image from "next/image";
import { FaBolt, FaWifi } from "react-icons/fa6";
import { HiOutlineCurrencyPound } from "react-icons/hi";
import { FaTint } from "react-icons/fa";
import Link from "next/link";
import FloatingButton from './components/FloatingButton';

export default function Home() {
  return (
    <div>
      
     <div className="relative h-[680px] w-full">
           {/* ✅ Background Image */}
           <Image
             src="/assets/Homepage.jpg"
             alt="homepage picture"
             className="object-cover z-0"
             fill
             priority
           />

        {/* Content moved upward by -mt-20 */}
        <div className="relative z-20 flex flex-col justify-start h-full px-4 md:px-20 ">
          <div className="text-white py-8">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
              Explore Business Services.
            </h1>
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Uncover the top deals for your business today.
            </h3>
            <p className="text-base md:text-lg">
              We assess various reliable UK suppliers across the market to guarantee <br /> you the best price for your business.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col gap-6">
                <Link href={`/services/energy/energytype`}>
                  <Service icon={<FaBolt />} label="Energy" text="Get the best electricity & gas rates." />
                </Link>
                <Link href={`/services/broadband/energytype`}>
                  <Service icon={<FaWifi />} label="Broadband" text="Choose internet that meets your needs." />
                </Link>
              </div>
              <div className="flex flex-col gap-6">
                <Link href={`/services/water/energytype`}>
                  <Service icon={<FaTint />} label="Water" text="Reliable suppliers, sustainable solutions." />
                </Link>
                <Link href="/POS">
                  <Service icon={<HiOutlineCurrencyPound />} label="Payment Solutions" text="Easy, efficient and disposal services" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FloatingButton />
    </div>
  );
}

function Service({ icon, label, text }) {
  return (
    <div className="group flex flex-row items-center bg-white border rounded-xl p-4 space-x-4 w-full max-w-xs hover:text-pink-500 cursor-pointer">
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
