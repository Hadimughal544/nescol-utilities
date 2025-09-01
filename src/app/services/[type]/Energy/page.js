import Image from "next/image";
import Link from "next/link";
import { FaBolt } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";

export default function Energy() {
  return (
    <main className=" relative pb-10 md:p-0 ">
      <div className="relative w-full h-[600px] sm:h-[350px] md:h-[450px] lg:h-[600px]">
        {/* ✅ Background Image */}
        <Image
          src="/assets/energy1.jpg"
          alt="services background"
          fill
          className="object-cover w-full h-full z-0 brightness-75"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-950/20 z-10" />

        {/* Content */}
        <div className="absolute inset-0 z-20 flex items-centre md:items-end justify-centre md:justify-start px-10 md:px-10 pb-10 md:pb-10 pt-40 md:pt-0">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-bold">
              Which energy do you need?
            </h1>

            {/* Responsive grid for boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:gap-8 gap-4 place-items-center">
              <Link href="/services/Electricity/energy2" className="w-full sm:w-auto">
                <Box title="Electricity" icon={<FaBolt />} />
              </Link>

              <Link href="/services/gas/energy2" className="w-full sm:w-auto">
                <Box title="Gas" icon={<FaFire />} />
              </Link>

              <Link href="/services/electricity-Gas/energy2" className="w-full sm:w-auto">
                <Box
                  title="Electricity & Gas"
                  icon={
                    <div className="flex gap-1">
                      <FaBolt />
                      <FaFire />
                    </div>
                  }
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Box({ title, icon }) {
  return (
    <div
      className="group flex flex-col items-center justify-center 
                 w-full sm:w-40 md:w-48 h-28 sm:h-32 p-4 
                 bg-white hover:bg-gray-100 
                 rounded-2xl shadow-2xl md:shadow-lg cursor-pointer transition-all"
    >
      <div className="text-base sm:text-lg text-center group-hover:text-pink-500">
        {title}
      </div>
      <div className="text-3xl sm:text-4xl mt-2 group-hover:scale-110 transition-transform group-hover:text-pink-500">
        {icon}
      </div>
    </div>
  );
}
