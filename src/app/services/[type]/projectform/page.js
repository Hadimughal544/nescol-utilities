'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ProjectForm() {
  const { type } = useParams();
  const router = useRouter();

  const [businessName, setBusinessName] = useState('');
  const [contactName, setContactName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [mpan, setMpan] = useState('');
  const [mprn, setMprn] = useState('');

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!businessName.trim()) newErrors.businessName = "Business name is required.";
    if (!contactName.trim()) newErrors.contactName = "Contact name is required.";

    if (!mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required.";
    } else if (mobileNumber.length !== 11) {
      newErrors.mobileNumber = "Please enter a valid mobile number.";
    }

    if (!email.trim()) {
      newErrors.email = "Email address is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (type?.toLowerCase() === 'electricity') {
      if (mpan.length !== 13 && mpan.length !== 21 ) {
        newErrors.mpan = "Enter a valid MPAN  or leave the field blank.";
      }
    }

    if (type?.toLowerCase() === 'gas') {
      if (mprn.length !== 10) {
        newErrors.mprn = "Enter a valid MPRN or leave the field blank.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      router.push(`/services/${type}/addressform`);
    }
  };

  return (
    <div className="relative h-[680px] w-full">
              {/* ✅ Background Image */}
              <Image
                src="/assets/Homepage.jpg"
                alt="homepage picture"
                className="object-cover z-0"
                fill
                priority
              />
        
              {/* ✅ Page Content */}
              <div className="absolute inset-0 z-10 flex items-start justify-start pt-12 px-6 lg:px-24">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">
          Project Form ({type})
        </h2>

        {/* Business Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-black mb-1">
            What is your Business name?
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            placeholder="Full Business Name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
              errors.businessName ? 'border-red-500' : 'border-black text-black'
            }`}
          />
          {errors.businessName && (
            <p className="text-red-500 text-sm mt-1">{errors.businessName}</p>
          )}
        </div>

        {/* Contact Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-black mb-1">
            What is your Contact name?
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            placeholder="Full Name"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
              errors.contactName ? 'border-red-500' : 'border-black text-black'
            }`}
          />
          {errors.contactName && (
            <p className="text-red-500 text-sm mt-1">{errors.contactName}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-black mb-1">
            What is your Mobile number?
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="number"
            placeholder="Enter a valid 11-digit number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className={` no-spinner w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
              errors.mobileNumber ? 'border-red-500' : 'border-black text-black'
            }`}
          />
          {errors.mobileNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-black mb-1">
            What is your Email address?
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="email"
            placeholder="Use a valid email (e.g., you@example.com)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
              errors.email ? 'border-red-500' : 'border-black text-black'
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* MPAN - if electricity */}
        {type?.toLowerCase() === 'electricity' && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-black mb-1">
              What is your MPAN?
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="number"
              placeholder="Enter valid 13 or 21 digits MPAN."
              value={mpan}
              onChange={(e) => setMpan(e.target.value)}
              className={` no-spinner w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                errors.mpan ? ' no-spinner border-red-500' : 'border-black text-black'
              }`}
            />
            {errors.mpan && (
              <p className="text-red-500 text-sm mt-1">{errors.mpan}</p>
            )}
          </div>
        )}

        {/* MPRN - if gas */}
        {type?.toLowerCase() === 'gas' && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-black mb-1">
              What is your MPRN?
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="number"
              placeholder="Enter valid 10-digit MPRN"
              value={mprn}
              onChange={(e) => setMprn(e.target.value)}
              className={` no-spinner w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                errors.mprn ? 'border-red-500' : 'border-black text-black'
              }`}
            />
            {errors.mprn && (
              <p className="text-red-500 text-sm mt-1">{errors.mprn}</p>
            )}
          </div>
        )}

        <button
          onClick={handleSubmit}
          className="w-full mt-4 bg-blue-900 text-white py-2 rounded-lg hover:bg-pink-500 cursor-pointer transition"
        >
          Submit
        </button>
      </div>
    </div>
    </div>
  );
}
