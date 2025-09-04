'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function OtherServicesForm() {
  const params = useParams();
  const serviceTypeFromParams = params?.type || '';
  const [serviceType] = useState(serviceTypeFromParams);

  const [contactName, setContactName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [countdown, setCountdown] = useState(2);
  const router = useRouter();

  const validateStep = () => {
    let newErrors = {};

    if (!contactName) newErrors.contactName = 'Contact name is required.';

    if (!mobileNumber) {
      newErrors.mobileNumber = 'Mobile number is required.';
    } else if (mobileNumber.trim().length !== 11) {
      newErrors.mobileNumber = 'Please enter a valid 11-digit mobile number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailAddress) {
      newErrors.emailAddress = 'Email address is required.';
    } else if (!emailRegex.test(emailAddress.trim())) {
      newErrors.emailAddress = 'Please enter a valid email address.';
    }

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    const validationErrors = validateStep();
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    try {
      const res = await fetch('https://nescolutilities.co.uk/api/other-services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Service_type: serviceType,
          contactName,
          mobileNumber,
          emailAddress,
          message,
        }),
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      setShowSuccess(true);
      setContactName('');
      setMobileNumber('');
      setEmailAddress('');
      setMessage('');
      setCountdown(2);
    } catch (err) {
      setErrors({ general: err.message || 'Something went wrong.' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (showSuccess) {
      let counter = 5;
      setCountdown(counter);

      const interval = setInterval(() => {
        counter -= 1;
        setCountdown(counter);

        if (counter === 0) {
          clearInterval(interval);
          router.push('/');
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [showSuccess, router]);

  return (
    <div className="relative md:h-[500px] lg:h-[850px] w-full md:mt-15 lg:mt-5">
      <Image
        src="/assets/BGQ3.jpg"
        alt="background"
        fill
        className="object-cover z-0 hidden md:block"
        priority
      />

      {!showSuccess && (
        <>
          <div className="absolute inset-0 bg-pink-600 md:hidden z-0" />
          <div className="relative md:pl-10 lg:pl-20 md:pr-30 z-20 min-h-screen flex items-start px-7 md:px-10 lg:px-30 pt-40 md:pt-30 lg:pt-50">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="bg-white p-6 rounded-xl shadow-lg w-full md:max-w-sm lg:max-w-xl"
            >
              <h1 className="md:text-xl lg:text-2xl font-extrabold text-left text-blue-900 mb-6">
                Empowering your business with seamless tech support.
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Contact Name <span className="text-red-500">*</span>
                  </label>
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
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
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
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
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
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                    placeholder="Enter your message"
                    rows={4}
                  />
                </div>
                <button
                  type="submit"
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
                  ) : (
                    'Submit'
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </>
      )}

      {showSuccess && (
        <div className="relative md:pl-10 lg:pl-20 md:pr-30 z-20 min-h-screen flex items-start px-7 md:px-10 lg:px-30 pt-40 md:pt-30 lg:pt-50">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-lg w-full text-center md:max-w-sm lg:max-w-xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className="flex justify-center mb-6"
            >
              <CheckCircle className="w-20 h-20 text-green-500" />
            </motion.div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">submitted!</h1>
            <p className="text-gray-600 text-lg mb-8">
              Thanks for filling up the form. Our experts will contact you shortly to assist
              further.
            </p>
            <p className="text-gray-500 text-sm">
              Redirecting in <span className="font-semibold">{countdown}</span> seconds...
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
