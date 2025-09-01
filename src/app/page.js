
import Image from "next/image";
import { FaBolt, FaWifi } from "react-icons/fa6";
import { HiOutlineCurrencyPound } from "react-icons/hi";
import { FaTint } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  

  return (
    <div className="">
      {/* ✅ Hero Section */}
      <div className="relative md:h-[500px] lg:h-[800px] w-full mt-10">
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
        <div className="relative z-20 flex flex-col justify-start h-full px-4 md:px-6 lg:px-20 pt-20 md:pt-20 lg:pt-30">
          <div className="text-white py-8 text-center md:text-left">
            <h1 className=" text-2xl md:text-xl lg:text-4xl font-extrabold mb-4 md:mb-2 lg:mb-4">
              Explore Business Services.
            </h1>
            <h3 className="text-lg md:text-lg lg:text-2xl font-bold mb-4 md:mb-2 lg:mb-4">
              Uncover the top deals for your business today.
            </h3>
            <p className=" sm:text-sm md:text-sm lg:text-lg leading-relaxed ">
              We assess various reliable UK suppliers across the market to
              guarantee <br className="hidden md:block" /> you the best price
              for your business.
            </p>

            {/* Services Grid */}
            <div className=" mt-8 md:mt-5 lg:mt-10  gap-4 md:gap-0 lg:gap-8 grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center md:place-items-start">
              <div className="flex flex-col gap-4 md:gap-4 lg:gap-6 w-full items-center md:items-start">
                <Link href={`/services/energy/energytype`} className="w-full max-w-xs">
                  <Service
                    icon={<FaBolt />}
                    label="Energy"
                    text="Affordable electricity and gas plans tailored to your needs."
                  />
                </Link>
                <Link
                  href="/services/payment-solution/payment-solution"
                  className="w-full max-w-xs"
                >
                  <Service
                    icon={<HiOutlineCurrencyPound />}
                    label="Payment solutions"
                    text="Simple, efficient, and secure services for easy transactions."
                  />
                </Link>
              </div>

              <div className="flex flex-col gap-4 md:gap-4 lg:gap-6 w-full items-center md:items-start">
                <Link href={`/services/broadband/energytype`} className="w-full max-w-xs">
                  <Service
                    icon={<FaWifi />}
                    label="Broadband"
                    text="Reliable internet solutions built to support every business."
                  />
                </Link>
                <Link href={`/services/water/energytype`} className="w-full max-w-xs">
                  <Service
                    icon={<FaTint />}
                    label="Water"
                    text="Sustainable water services with trusted business suppliers."
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
    <div className="group flex flex-row items-center shadow-xl bg-white border rounded-xl h-20 sm:h-auto p-4 sm:pb-4 md:pb-3 lg:pb-4 space-x-4 md:space-x-2 lg:space-x-4 md:w-[80%] lg:w-[100%] hover:text-pink-500 cursor-pointer ">
      <div className=" text-4xl md:text-2xl lg:text-5xl text-black group-hover:text-pink-500">
        {icon}
      </div>
      <div className="flex flex-col text-left ">
        <div className="font-bold text-base md:text-xs lg:text-lg text-black group-hover:text-pink-500 ">
          {label}
        </div>
        <div className="text-sm md:text-xs lg:text:sm text-black group-hover:text-pink-500">
          {text}
        </div>
      </div>
    </div>
  );
}
