'use client';
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function EnergyType() {
  const { type } = useParams();
  const router = useRouter();

  const handleBusinessnext = () => {
    if (type === "energy") {
      router.push("/services/energy/Energy");
    } else if (type === "broadband") {
      router.push("/services/broadband/broadband");
    } else if (type === "water") {
      router.push("/services/water/water");
    }
  };

  const handleHomenext = () => {
    if (type === "broadband") {
      router.push("https://broadband.loveenergysavings.com/");
    }
    if(type === "energy") {
      router.push("/services/energy/Homeservices")
    }
    if(type === "water") {
      router.push("/services/water/Homeservices")
    }
  };

  return (
    <main className="relative pb-20 md:pb-0">
      <div className="relative h-[850px] md:h-[750px] w-full">
        {/* Background Image */}
        <Image
          src="/assets/EnergyType1.jpg"
          alt="homepage picture"
          className="object-cover z-0"
          fill
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 z-20 py-10 md:py-20 px-10 md:px-10 lg:px-20 flex md:items-center mt-30">
          <div className="space-y-6 w-full text-center md:text-left">
            {/* Headings */}
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl sm:text-3xl md:text-5xl text-white font-bold">
                Save More, Spend Smarter.
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl text-blue-300 font-bold">
                Unlock the most cost-effective utility solutions tailored{" "}
                <br className="hidden md:block" /> for your business
              </h2>
              <p className="text-sm sm:text-base md:text-md text-white leading-relaxed">
                Nescol Utilities partners with trusted UK energy suppliers to
                help you cut costs, reduce waste,<br /> and maximize your savings
                all through smart, hassle-free solutions.
              </p>
            </div>

            {/* Card Box with fade-in */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:max-w-md nav-link2 lg:max-w-lg mx-auto md:mx-0 flex gap-6 flex-col items-center justify-center bg-white px-4 py-6 sm:py-8 rounded-2xl shadow-xl"
            >
              <h1 className="text-xl sm:text-2xl font-bold">
                Cut expenses. Work smarter.
              </h1>
              <div className="w-full h-1 bg-gray-300 rounded-full"></div>
              <p className="text-base sm:text-xl text-center">
                Business or home start smart with Nescol.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 w-full justify-center">
                <button
                  onClick={handleBusinessnext}
                  className="bg-blue-900 cursor-pointer hover:bg-pink-500 p-3 sm:p-4 px-6 sm:px-8 rounded-xl text-white w-full sm:w-auto"
                >
                  Business
                </button>
                <button
                  onClick={handleHomenext}
                  className="bg-blue-900 hover:bg-pink-500 cursor-pointer p-3 sm:p-4 px-6 sm:px-8 rounded-xl text-white w-full sm:w-auto"
                >
                  Home
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </main>
  );
}
