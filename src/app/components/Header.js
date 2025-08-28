'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MdPhoneIphone } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { useState, useEffect } from 'react';
import { BsLightningCharge } from "react-icons/bs";
import { MdOutlineVerified } from "react-icons/md";
import TrustpilotWidget from './TrustpilotWidget';
import { IoWalletOutline } from "react-icons/io5";
import MobileDrawer from './MobileDrawer';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const textToCopy = '0141 5360396';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  // Handle scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false); // hide
      } else {
        setShow(true); // show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white shadow-lg transition-transform duration-300 z-50 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Main header bar */}
      <div className="px-6 py-4 md:px-20">
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
            <button onClick={() => setMobileMenuOpen(true)}>
              <HiMenu size={30} />
            </button>
          </div>

          <MobileDrawer
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          textToCopy={textToCopy}
          copied={copied}
          handleCopy={handleCopy}
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-20 items-center text-md font-bold">
            <div className="flex gap-10 items-center">
              <Link href="/services/energy/energytype" className="nav-link py-2 px-4 hover:text-pink-500 transition-colors">Energy</Link>
              <Link href="/services/broadband/energytype" className="nav-link py-2 px-4 hover:text-pink-500 transition-colors">Broadband</Link>
              <Link href="/Servicespage" className="nav-link py-2 px-4 hover:text-pink-500 transition-colors">Services</Link>
              <Link href="/about-us" className="nav-link py-2 px-4 hover:text-pink-500 transition-colors">About Us</Link>
              <Link href="/complaint" className="nav-link py-2 px-4 hover:text-pink-500 transition-colors">Complaint</Link>
            </div>

            {/* Contact Info */}
            <div className="flex gap-1 items-end cursor-pointer" onClick={handleCopy}>
              <div className="text-blue-900 mb-1">
                <MdPhoneIphone size={45} />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl text-pink-500">{textToCopy}</h2>
                <p className="text-blue-900 text-md">
                  {copied ? "Saved & Ready to Dial" : "Call our business line!"}
                </p>
              </div>
            </div>
          </nav>
        </div>
      </div>

     {/* Mobile Navigation Drawer */}


      {/* Subheader bar */}
      <div className="bg-green-700 px-6 md:px-10 md:pl-20 flex flex-col text-white md:flex-row justify-between items-center text-sm w-full ">
        <div className="hidden md:flex items-center gap-2 ">
          <BsLightningCharge className="text-lg" />
          <span>Compare UK providers cut your bills</span>
        </div>
        <div className="hidden md:flex items-center gap-2 ">
          <MdOutlineVerified className="text-lg" />
          <span>We’ll beat any price guaranteed savings</span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <IoWalletOutline className="text-lg" />
          <span>Unlock your savings instantly</span>
        </div>
        <div>
          <TrustpilotWidget />
        </div>
      </div>
    </header>
  );
}
