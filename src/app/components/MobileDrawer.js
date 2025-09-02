"use client";

import Link from "next/link";
import { MdPhoneIphone } from "react-icons/md";
import { useEffect, useState } from "react";

export default function MobileDrawer({ isOpen, onClose, textToCopy, copied }) {
  const [showDrawer, setShowDrawer] = useState(isOpen);

  // Sync internal state with parent
  useEffect(() => {
    if (isOpen) setShowDrawer(true);
  }, [isOpen]);

  // Handle close with animation
  const handleClose = () => {
    setShowDrawer(false); // triggers animation
    setTimeout(() => onClose(), 300); // after animation, fully close
  };

  // Disable background scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-[9998]" onClick={handleClose} />}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-screen z-[9999] bg-white transform transition-transform duration-300
        ${showDrawer ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 z-[10000] w-8 h-8 flex items-center justify-center"
          onClick={handleClose}
        >
          {/* Top line */}
          <span
            className={`block absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
              showDrawer ? "rotate-45 translate-y-0" : "-translate-y-2"
            }`}
          ></span>
          {/* Middle line */}
          <span
            className={`block absolute h-0.5 w-6 bg-black transition-opacity duration-300 ease-in-out ${
              showDrawer ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          {/* Bottom line */}
          <span
            className={`block absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
              showDrawer ? "-rotate-45 translate-y-0" : "translate-y-2"
            }`}
          ></span>
        </button>

        {/* Drawer Content */}
        <div className="flex flex-col p-6 mt-10 space-y-6 text-lg font-semibold">
          <Link href="/services/energy/energytype" onClick={handleClose}>Energy</Link>
          <Link href="/services/broadband/energytype" onClick={handleClose}>Broadband</Link>
          <Link href="/Servicespage" onClick={handleClose}>Services</Link>
          <Link href="/about-us" onClick={handleClose}>About Us</Link>
          <Link href="/complaint" onClick={handleClose}>Complaint</Link>

          {/* Contact Info */}
          <div className="flex gap-3 items-center pt-4">
            <MdPhoneIphone size={30} className="text-blue-900" />
            <div>
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
