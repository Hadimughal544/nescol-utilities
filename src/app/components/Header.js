'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MdPhoneIphone } from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";
import { MdOutlineVerified } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { useState, useEffect } from 'react';
import TrustpilotWidget from './TrustpilotWidget';

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

  // Hide/show header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setShow(false);
      else setShow(true);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Disable background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [mobileMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 w-full bg-white shadow-lg transition-transform duration-300 z-50 ${show ? 'translate-y-0' : '-translate-y-full'}`}>

      {/* Main header */}
      <div className="px-6 py-4 md:px-20 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src="/assets/mainlogo.png" alt="Company Logo" width={130} height={20} className="object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-10 items-center text-sm font-bold">
          <div className="flex gap-7 items-center">
            <Link href="/services/energy/energytype" className="nav-link hover:scale-115 py-2 px-4 hover:text-pink-500 transition-colors">Energy</Link>
            <span className="border-1 h-8 border-pink-500"></span>
            <Link href="/services/broadband/energytype" className="nav-link py-2 px-4 hover:scale-115  hover:text-pink-500 transition-colors">Broadband</Link>
            <span className="border-1 h-8 border-pink-500"></span>
            <Link href="/Servicespage" className="nav-link py-2 px-4 hover:text-pink-500 hover:scale-115  transition-colors">Services</Link>
            <span className="border-1 h-8 border-pink-500"></span>
            <Link href="/about-us" className="nav-link py-2 px-4 hover:text-pink-500 hover:scale-115  transition-colors">About Us</Link>
            <span className="border-1 h-8 border-pink-500"></span>
            <Link href="/complaint" className="nav-link py-2 px-4 hover:text-pink-500 hover:scale-115  transition-colors">Complaint</Link>
          </div>

          {/* Contact Info */}
          <div className="flex gap-1 items-end cursor-pointer" onClick={handleCopy}>
            <MdPhoneIphone size={35} className="text-blue-900 mb-1" />
            <div className="flex flex-col">
              <h2 className="text-lg text-pink-500">{textToCopy}</h2>
              <p className="text-blue-900 text-xs ">{copied ? "Saved & Ready to Dial" : "Call our business line!"}</p>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center z-50">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative w-8 h-8 flex items-center justify-center"
          >
            <span className={`block absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
            <span className={`block absolute h-0.5 w-6 bg-black transition-opacity duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${mobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-white z-40 transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Overlay */}
        {mobileMenuOpen && <div className="fixed inset-0 z-30" onClick={() => setMobileMenuOpen(false)} />}

        {/* Drawer content */}
        <div className="flex flex-col p-6 mt-16 space-y-6 text-lg font-semibold relative z-40">
          {/* Close Button inside mobile menu */}
          

          <Link href="/services/energy/energytype" onClick={() => setMobileMenuOpen(false)}>Energy</Link>
          <Link href="/services/broadband/energytype" onClick={() => setMobileMenuOpen(false)}>Broadband</Link>
          <Link href="/Servicespage" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link href="/about-us" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link href="/complaint" onClick={() => setMobileMenuOpen(false)}>Complaint</Link>

          {/* Contact Info */}
          <div className="flex gap-3 items-center pt-4">
            <MdPhoneIphone size={20} className="text-blue-900" />
            <div>
              <a href={`tel:${textToCopy}`} className="block">
                <h2 className="text-pink-500 text-lg">{textToCopy}</h2>
                <p className="text-blue-900 text-md">{copied ? "Saved & Ready to Dial" : "Sales Team"}</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Subheader */}
      <div className="bg-green-700 px-6 md:px-10 md:pl-20 flex flex-col md:flex-row justify-between items-center text-white text-sm w-full">
        <div className="hidden md:flex items-center gap-2">
          <BsLightningCharge className="text-lg" />
          <span className="text-xs lg:text-sm">Compare UK providers cut your bills</span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <MdOutlineVerified className="text-lg" />
          <span className="text-xs lg:text-sm">We’ll beat any price guaranteed savings</span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <IoWalletOutline className="text-lg" />
          <span className="text-xs lg:text-sm">Unlock your savings instantly</span>
        </div>
        <div>
          <TrustpilotWidget />
        </div>
      </div>
    </header>
  );
}
  