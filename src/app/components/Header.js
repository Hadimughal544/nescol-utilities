'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaChevronDown } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { useState } from 'react';
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <header className="bg-blue shadow-lg px-6 py-4 md:px-20 ">
      <div className="flex justify-between items-center">
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-20 items-center text-md font-bold ">
          <div className=' flex gap-6 items-center text-md'>
          <Link href={`/services/energy/energytype`} className="hover:text-pink-500 transition-colors">Energy</Link>
          <Link href={`/services/broadband/energytype`} className="hover:text-pink-500 transition-colors">Broadband</Link>

          {/* Services Dropdown */}
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className="flex items-center gap-1 hover:text-pink-500">
              <Link href="/Servicespage">
              <span>Services</span>
              </Link>
              <FaChevronDown size={12} />
            </div>
            {dropdownOpen && (
              <ul className="absolute top-8 left-0 bg-white text-black w-48 rounded shadow-lg z-10">
                <li><Link href="/energy" className="block px-4 py-2 hover:bg-gray-100">Energy</Link></li>
                <li><Link href="/Water" className="block px-4 py-2 hover:bg-gray-100">Water</Link></li>
                <li><Link href="/cardpayments" className="block px-4 py-2 hover:bg-gray-100">Card payments</Link></li>
                <li><Link href="/cardpayments" className="block px-4 py-2 hover:bg-gray-100">IT Solutions</Link></li>
                <li><Link href="/insurance" className="block px-4 py-2 hover:bg-gray-100">Insurance</Link></li>
              </ul>
            )}
          </div>

          <Link href="/about-us" className="hover:text-pink-500 transition-colors">About Us</Link>
          <Link href="/complaint" className="hover:text-pink-500 transition-colors">Complaint</Link>
          </div>

          {/* Contact Info */}
          <div className="flex gap-1 items-end justify-center cursor-pointer" onClick={handleCopy}>
            <div className='text-blue-900'>
              <MdPhoneIphone size={55} />
            </div>
            <div className='flex flex-col'>
              <h2 className="text-3xl text-pink-500">{textToCopy}</h2>
              <p className="text-blue-900 text-md">
                {copied ? "Saved & Ready to Dial" : "Reach Out to Our Sales Team"}
              </p>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-2 font-semibold">
          <Link href="/services/energy/energytype" className="block">Energy</Link>
          <Link href="/services/broadband/energytype" className="block">Broadband</Link>
          <Link href="/Servicespage" className="block">Services</Link>
          <Link href="/about-us" className="block">About Us</Link>
          <Link href="/complaint" className="block">Complaint</Link>

          <div className="flex gap-2 items-center pt-2" onClick={handleCopy}>
            <MdPhoneIphone size={30} className="text-blue-900" />
            <div>
              <h2 className="text-pink-500 text-lg">{textToCopy}</h2>
              <p className="text-blue-900 text-sm">
                {copied ? "Saved & Ready to Dial" : "Sales Team"}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
