'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import SuccessAlert from '@/app/components/SuccessAlert';

export default function OtherServicesForm() {
  const params = useParams();
  const serviceTypeFromParams = params?.type || ''; // get service type from URL
  const [serviceType] = useState(serviceTypeFromParams);

  const [contactName, setContactName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState(''); // new field
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const validateStep= () => {
    let newErrors = {};

    if (!contactName) {
      newErrors.contactName = "Contact name is required.";
    }

    if (!mobileNumber) {
      newErrors.mobileNumber = "Mobile number is required.";
    } else if (mobileNumber.trim().length !== 11) {
      newErrors.mobileNumber = "Please enter a valid 11-digit mobile number.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailAddress) {
      newErrors.emailAddress = "Email address is required.";
    } else if (!emailRegex.test(emailAddress.trim())) {
      newErrors.emailAddress = "Please enter a valid email address.";
    }

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    const validationErrors = validateStep();
  if (Object.keys(validationErrors).length > 0) return; // stop if errors exist

  setLoading(true);
    try {
      const res = await fetch("https://nescolutilities.co.uk/api/other-services", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Service_type: serviceType,
          contactName: contactName,
          mobileNumber: mobileNumber,
          emailAddress: emailAddress,
          message: message, // include new field
        }),
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      setShowSuccess(true);
      setContactName('');
      setMobileNumber('');
      setEmailAddress('');
      setMessage('');

      setTimeout(() => router.push('/'), 2000); // redirect after 2s
    } catch (err) {
      setErrors({ general: err.message || 'Something went wrong.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen h-[850px] w-full">
      {/* Background image (desktop only) */}
      <Image
        src="/assets/BGQ3.jpg"
        alt="background"
        fill
        className="object-cover z-0 hidden md:block"
        priority
      />

      {/* Pink overlay (mobile only) */}
      <div className="absolute inset-0 bg-pink-600 md:hidden z-0" />

      {/* Form Container */}
      <div className="relative z-20 min-h-screen flex items-start px-5 sm:px-10 md:px-30 pt-40 md:pt-50  ">
        <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold text-center text-blue-900 mb-6">
            Empowering your business with seamless tech support.
          </h1>
        
          {showSuccess && <SuccessAlert />}

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Contact Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Contact Name <span className=' text-red-500'>*</span></label>
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                placeholder="Enter your contact name"
              />
              {errors.contactName && (
                <p className="text-red-500 text-sm mt-1">{errors.contactName}</p>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-medium mb-1">Mobile Number <span className=' text-red-500'>*</span></label>
              <input
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                placeholder="Enter a valid 11-digit number"
              />
              {errors.mobileNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium mb-1">Email Address <span className=' text-red-500'>*</span></label>
              <input
                type="email"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                placeholder="Enter valid email address"
              />
              {errors.emailAddress && (
                <p className="text-red-500 text-sm mt-1">{errors.emailAddress}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                placeholder="Enter your message"
                rows={4}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full mt-4 bg-blue-900 text-white py-2 rounded-lg hover:bg-pink-500 cursor-pointer transition flex items-center justify-center gap-2"
            >
              {loading && !showSuccess ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  <span>Submitting...</span>
                </>
              ) : showSuccess ? (
                "Submitted ✅"
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
