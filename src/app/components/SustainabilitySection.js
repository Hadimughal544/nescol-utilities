"use client";

import { motion } from "framer-motion";
import { BsGraphUpArrow } from "react-icons/bs";
import { AiOutlinePound } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function SustainabilitySection() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 rounded-3xl text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
        Sustainability starts with smarter savings.
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={cardVariants} className="flex flex-col items-center gap-8 bg-white p-6 rounded-xl shadow-md">
          <h3 className="font-bold text-lg mb-2">Energy Insights</h3>
          <div className="text-7xl text-black mb-4"><BsGraphUpArrow /></div>
          <p className="text-center max-w-[250px]">Understand your consumption to make informed choices.</p>
        </motion.div>

        <motion.div variants={cardVariants} className="flex flex-col items-center gap-8 bg-white p-6 rounded-xl shadow-md">
          <h3 className="font-bold text-lg mb-2">Pay What’s Fair</h3>
          <div className="text-7xl text-black mb-4"><AiOutlinePound /></div>
          <p className="text-center max-w-[250px]">
            Pay based on your actual usage—skip random market spikes and inflated rates.
          </p>
        </motion.div>

        <motion.div variants={cardVariants} className="flex flex-col items-center gap-8 bg-white p-6 rounded-xl shadow-md">
          <h3 className="font-bold text-lg mb-2">Save Smarter</h3>
          <div className="text-7xl text-black mb-4"><IoWalletOutline /></div>
          <p className="text-center max-w-[250px]">
            Save your money with energy pricing that enhance your lifestyle.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
