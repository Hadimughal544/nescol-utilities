"use client";

import Link from "next/link";
import { HiX } from "react-icons/hi";
import { MdPhoneIphone } from "react-icons/md";
import { useEffect } from "react";

export default function MobileDrawer({ isOpen, onClose, textToCopy, copied, handleCopy }) {
  // Disable background scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[9998]"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-screen z-[9999] bg-white transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 z-[10000]"
          onClick={onClose}
        >
          <HiX size={30} />
        </button>

        {/* Drawer content */}
        <div className="flex flex-col p-6 mt-10 space-y-6 text-lg font-semibold">
          <Link href="/services/energy/energytype" onClick={onClose}>Energy</Link>
          <Link href="/services/broadband/energytype" onClick={onClose}>Broadband</Link>
          <Link href="/Servicespage" onClick={onClose}>Services</Link>
          <Link href="/about-us" onClick={onClose}>About Us</Link>
          <Link href="/complaint" onClick={onClose}>Complaint</Link>

          {/* Contact Info */}
          <div className="flex gap-3 items-center pt-4">
  <MdPhoneIphone size={30} className="text-blue-900" />
  <div>
    {/* Clicking this link will open the dialer app */}
    <a href={`tel:${textToCopy}`} className="block">
      <h2 className="text-pink-500 text-lg">{textToCopy}</h2>
      <p className="text-blue-900 text-sm">
        {copied ? "Saved & Ready to Dial" : "Sales Team"}
      </p>
    </a>
  </div>
</div>
        </div>
      </div>
    </>
  );
}
