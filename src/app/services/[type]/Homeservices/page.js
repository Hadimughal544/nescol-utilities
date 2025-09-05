'use client';
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";

const page = () => {

   
  return (
    <div className="relative md:h-[500px] lg:h-[850px] w-full md:mt-15 lg:mt-5">
          <Image
            src="/assets/BGQ3.jpg"
            alt="background"
            fill
            className="object-cover z-0 hidden md:block"
            priority
          />
           <div className="absolute inset-0 bg-pink-600 md:hidden z-0" />
          <div className=' relative  md:pl-10 lg:pl-20 md:pr-30 z-20 min-h-screen flex flex-col text-white items-start px-7 md:px-10 lg:px-30 pt-40 md:pt-30 lg:pt-50'>

            <h1 className=" md:ml-5 lg:ml-0 text-2xl md:text-xl text-center md:text-left lg:text-4xl font-extrabold mb-4 md:mb-0 lg:mb-4">
              Smart Support for Smarter Bills 
            </h1>
            <h3 className=" md:ml-5 lg:ml-0 sm:text-sm md:text-sm lg:text-lg text-center md:text-left leading-relaxed mb-4">
             Nescol Utilities currently specializes in serving commercial <br className=' lg:hidden hidden md:block'></br> clients.<br className=' md:hidden lg:block'></br> At this time, we do not offer residential services.
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="max-w-lg  bg-white nav-link2 rounded-2xl border w-full md:max-w-sm lg:max-w-lg  border-gray-200 p-6 text-center md:text-left"
            >
      <div className="">
  <h1 className=" text-xl md:text-sm lg:text-xl font-bold text-gray-800 mb-4">
    Save your household costs with Nescol
  </h1>
  <p className="text-gray-600">
    We remain committed to helping you lower your household expenses by
    offering expert advice and practical cost-saving solutions.
  </p>

  <div className="space-y-4 mt-4 text-left">
    {/* Sales Assistance */}
    <div className="flex items-start gap-3">
      <span className="text-pink-500 text-2xl mt-1"><FaPhone  size={18} /></span>
      <div>
        <p className="font-semibold text-gray-800">Sales Support</p>
        <p className="text-gray-600">
          Call{" "}
          <a
            href="https://wa.me/+447482430256"
            className="text-blue-800 hover:underline "
          >
            +44 7482430256
          </a>{" "}
          for guidance on reducing household costs.
        </p>
      </div>
    </div>

    {/* Queries & Complaints */}
    <div className="flex items-start gap-3 text-left">
      <span className="text-pink-500 text-2xl mt-1"><FaPhone size={18} /></span>
      <div>
        <p className="font-semibold text-gray-800">Queries & Complaints</p>
        <p className="text-gray-600">
          Reach our team at{" "}
          <a
            href="https://wa.me/+447426377690"
            className="text-blue-800 hover:underline"
          >
            +44 7426 377690
          </a>{" "}
        </p>
      </div>
    </div>

    {/* Email */}
    <div className="flex items-start gap-3 text-left">
      <span className="text-pink-500 text-2xl mt-1"><HiOutlineMail  size={18} /></span>
      <div>
        <p className="font-semibold text-gray-800">Email</p>
        <p className="text-gray-600">
          <a
            href="mailto:support@nescolutilities.co.uk"
            className="text-blue-800 hover:underline"
          >
            support@nescolutilities.co.uk
          </a>
        </p>
      </div>
    </div>
  </div>
</div>
</motion.div>

              </div>
          
          </div>
  )
}

export default page
