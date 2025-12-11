import Image from "next/image";
import Link from "next/link";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoLinkedin, IoLogoGoogle } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import TrustpilotWidget from "./TrustpilotWidget";
import { AiFillTikTok } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-white pt-10 bg-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 pb-10">
          {/* Logo & Tagline */}
          {/* Logo & Tagline */}
<div className="space-y-6 text-center md:text-left">
  <div className="flex justify-center md:justify-start">
    <Image
      src="/assets/whitelogo.png"
      alt="company logo"
      width={250}
      height={150}
      className="object-contain"
    />
  </div>

  <p className="text-md">
    Let your business thrive we bring the <br />
    best deals to you.
  </p>

  {/* Icons + Trustpilot stacked */}
  {/* Icons + Trustpilot in same row */}
<div className="flex items-center gap-3 text-2xl text-pink-500">
  <Link href="#"><FaTiktok size={30} /></Link>
  <Link href="https://www.linkedin.com/company/nescolutilities"><IoLogoLinkedin size={30} /></Link>
  <Link href="#"><SiInstagram size={30} /></Link>
</div>
  
</div>


          {/* Navigation Links */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Explore</h2>
            <ul className="flex flex-col space-y-2 text-md">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/services/energy/energytype" className="hover:underline">Energy</Link></li>
              <li><Link href="/services/broadband/energytype" className="hover:underline">Broadband</Link></li>
              <li><Link href="/Services" className="hover:underline">Services</Link></li>
              <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
              <li><Link href="/complaint" className="hover:underline">Complaint</Link></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="text-white p-6 rounded-lg space-y-6 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Contact Us</h2>

            <p className="text-base text-gray-300">
              We’re here to help.
            </p>

            <div className="space-y-2">
              <p className="text-base">
                Reach our <span className="font-semibold">sales team</span> at{" "}
                <a href="tel:+447482430256" className="text-blue-400 hover:underline">
                  +44 7482 430256
                </a>
              </p>

              <div className="space-y-2">
                <div className="flex justify-center md:justify-start gap-2 items-center">
                  <span className="text-pink-500 text-xl"><FaPhone /></span>
                  <p>
                    Phone:{" "}
                    <a href="tel:+447426377690" className="text-blue-400 hover:underline">
                      +44 7426 377690
                    </a>
                  </p>
                </div>

                <div className="flex justify-center md:justify-start gap-2 items-center">
                  <span className="text-pink-500 text-xl"><HiOutlineMail /></span>
                  <p>
                    Email:{" "}
                    <a href="mailto:support@nescolutilities.co.uk" className="text-blue-400  hover:underline">
                      support@nescolutilities.co.uk
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 w-full"></div>

        {/* Bottom Text */}
        <div className="text-left py-6 text-sm md:text-md text-gray-400">
          © NEIL & NESCOL LTD T/A Nescol Utilities 
All rights reserved.<br></br>NEIL & NESCOL LTD is a registered company in Scotland 
(SC679848). <br></br>
Registered Address: 
3/2, 28 Ancroft Street, Glasgow, Scotland, G20 7HU
<br></br>Proudly made in Scotland.
<br></br>Designed & Developed by <Link href="https://enid.pk/innovations" className=" hover:underline ">Enid Innovation</Link>
        </div>
      </div>
    </footer>
  );
}
