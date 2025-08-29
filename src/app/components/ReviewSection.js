'use client';

import Image from "next/image";
import Link from "next/link";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import TrustpilotWidget from "./TrustpilotWidget";

export default function ReviewSection() {
  return (
    <section className="bg-white py-16 px-6 text-center">
      {/* Main Heading */}
      <h2 className="text-xl md:text-2xl font-medium text-gray-900 max-w-4xl mx-auto leading-relaxed ">
        We offer a full suite of <Link href={"/Servicespage"} className=" font-semibold hover:underline">Business services </Link> 
          including <Link href={"/services/broadband/broadband"} className=" font-semibold hover:underline"> Broadband </Link>,<Link href="/services/gas/energy2" className=" font-semibold hover:underline"> Gas </Link> ,
           <Link href="/services/Electricity/energy2" className=" font-semibold hover:underline"> Electricity </Link>,
           <Link href="/services/payment-solution/payment-solution" className=" font-semibold hover:underline"> Payment Solutions </Link>, and <span className=" font-semibold hover:underline"> IT </span> <Link href={"/Servicespage"} className=" font-semibold hover:underline"> services </Link>  all designed to protect you from high market rates. Our mission is simple: help you 
         save more by comparing top providers and delivering the best value, fast.
      </h2>

      {/* Trustpilot line */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 mt-8 text-gray-700 text-sm">
        <p>Explore reviews </p>
        <span className="font-bold">Share your experience</span>

        {/* Stars */}
        <p>
           and guide smarter, savings-driven choices.
        </p>

        <span>
          <TrustpilotWidget/>
        </span>
      </div>
    </section>
  );
}
