'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronDown } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { useState } from 'react';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const textToCopy = '07482 430256';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <header className="bg-blue shadow-2xl py-4 px-20 pl-20 flex space-x-30 items-center justify-between">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/assets/mainlogo.png"
          alt="Company Logo"
          width={160}
          height={20}
          className="object-contain"
        />
      </Link>

      {/* Navigation */}
      <nav className="flex gap-6 items-center relative text-md font-bold">
        <Link href="/energytype" className="hover:text-pink-500 transition-colors">Energy</Link>
        <Link href="/Broadband" className="hover:text-pink-500 transition-colors">Broadband</Link>

        {/* Services Dropdown */}
        <div
          className="relative group cursor-pointer"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <Link href="/Servicespage">
            <div className="flex items-center gap-1 hover:text-pink-500">
              <span>Services</span>
              <FaChevronDown size={12} />
            </div>
          </Link>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <ul className="absolute top-8 left-0 bg-white text-black w-48 rounded shadow-lg z-10">
              <li>
                <Link href="/energy" className="block px-4 py-2 hover:bg-gray-100">
                  Energy
                </Link>
              </li>
              <li>
                <Link href="/Water" className="block px-4 py-2 hover:bg-gray-100">
                  Water
                </Link>
              </li>
              <li>
                <Link href="/cardpayments" className="block px-4 py-2 hover:bg-gray-100">
                  Card payments
                </Link>
              </li>
              <li>
                <Link href="/cardpayments" className="block px-4 py-2 hover:bg-gray-100">
                  IT Solutions
                </Link>
              </li>
              <li>
                <Link href="/insurance" className="block px-4 py-2 hover:bg-gray-100">
                  Insurance
                </Link>
              </li>
            </ul>
          )}
        </div>

        <Link href="/about-us" className="hover:text-pink-500 transition-colors">About Us</Link>
        <Link href="/complaint" className="hover:text-pink-500 transition-colors">Complaint</Link>

        {/* Copyable Contact Info */}
        <div className="flex  pl-20 gap-1 items-end justify-center cursor-pointer" onClick={handleCopy}>
          <div className=' text-blue-900 '>
            <MdPhoneIphone size={55}/>
          </div>
          <div className='flex flex-col'>
            <h2 className="text-3xl text-pink-500">{textToCopy}</h2>
          <p className="text-blue-900 text-sm">
            {copied ? "Saved & Ready to Dial" : "Reach Out to Our Sales Team"}
          </p>
          </div>
          
        </div>
      </nav>
    </header>
  );
}