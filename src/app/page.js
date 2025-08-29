
import Image from "next/image";
import { FaBolt, FaWifi } from "react-icons/fa6";
import { HiOutlineCurrencyPound } from "react-icons/hi";
import { FaTint } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  

  return (
    <div className="">
      {/* ✅ Hero Section */}
      <div className="relative h-[800px] w-full ">
        {/* Background Image */}
        <Image
          src="/assets/Homepage2.jpg"
          alt="homepage picture"
          className="object-cover z-0 hidden md:block"
          fill
          priority
        />
        {/* Pink background for mobile */}
        <div className="absolute inset-0 bg-pink-600 md:hidden z-0" />

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-start h-full px-4 md:px-20 pt-30">
          <div className="text-white py-8 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-extrabold mb-4">
              Explore Business Services.
            </h1>
            <h3 className="text-lg md:text-2xl font-bold mb-4">
              Uncover the top deals for your business today.
            </h3>
            <p className="text-sm md:text-lg leading-relaxed">
              We assess various reliable UK suppliers across the market to
              guarantee <br className="hidden md:block" /> you the best price
              for your business.
            </p>

            {/* Services Grid */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center md:place-items-start">
              <div className="flex flex-col gap-6 w-full items-center md:items-start">
                <Link href={`/services/energy/energytype`} className="w-full max-w-xs">
                  <Service
                    icon={<FaBolt />}
                    label="Energy"
                    text="Get the best electricity & gas rates."
                  />
                </Link>
                <Link
                  href="/services/payment-solution/payment-solution"
                  className="w-full max-w-xs"
                >
                  <Service
                    icon={<HiOutlineCurrencyPound />}
                    label="Payment Solutions"
                    text="Easy, efficient and disposal services"
                  />
                </Link>
              </div>

              <div className="flex flex-col gap-6 w-full items-center md:items-start">
                <Link href={`/services/broadband/energytype`} className="w-full max-w-xs">
                  <Service
                    icon={<FaWifi />}
                    label="Broadband"
                    text="Choose internet that meets your needs."
                  />
                </Link>
                <Link href={`/services/water/energytype`} className="w-full max-w-xs">
                  <Service
                    icon={<FaTint />}
                    label="Water"
                    text="Reliable suppliers, sustainable solutions."
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

function Service({ icon, label, text }) {
  return (
    <div className="group flex flex-row items-center shadow-xl bg-white border rounded-xl h-20 sm:h-auto p-4 space-x-4 w-full hover:text-pink-500 cursor-pointer">
      <div className="text-4xl md:text-5xl text-black group-hover:text-pink-500">
        {icon}
      </div>
      <div className="flex flex-col text-center md:text-left">
        <div className="font-bold text-base md:text-lg text-black group-hover:text-pink-500">
          {label}
        </div>
        <div className="text-xs md:text-sm text-black group-hover:text-pink-500">
          {text}
        </div>
      </div>
    </div>
  );
}
