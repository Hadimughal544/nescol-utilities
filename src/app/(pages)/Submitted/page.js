'use client';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

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

 

  return (
    <div className="relative md:h-[500px] lg:h-[850px] w-full md:mt-15 lg:mt-5 ">
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
       <div className="relative md:pl-10 lg:pl-20 md:pr-30 z-20 min-h-screen flex items-start px-7 md:px-10 lg:px-30 pt-40 md:pt-30 lg:pt-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-2xl p-10 max-w-lg text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <CheckCircle className="w-20 h-20 text-green-500" />
        </motion.div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Thank You!
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Thanks for filling up the form.  
          Our experts will contact you shortly to assist further.
        </p>

        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition shadow-md"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
    </div>
  );
}
