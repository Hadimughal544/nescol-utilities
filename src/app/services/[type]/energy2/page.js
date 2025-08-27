'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';
import SuccessAlert from '@/app/components/SuccessAlert';
import { FaHandshake } from "react-icons/fa";
import { useEffect } from "react";

const electricitySuppliers = [
  'E.ON Next', 'British Gas', 'British Gas Lite', 'Scottish Power',
  'EDF Energy', 'Smartest Energy', 'TotalEnergies Gas & Power',
  'YGP', 'Yü Energy', 'Utilita Energy', 'Other'
];

const labels = [
  'Who is your current Supplier *',
  'What is your current monthly-bill/EAC *',
  'When does your current contract expire *',
];

export default function EnergyForm() {
  const [step, setStep] = useState(1);
  const [inputs, setInputs] = useState(['', { bill: '', eac: '' }, '']);
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState('');
  const [postcode, setPostcode] = useState('');
  const [postcodeError, setPostcodeError] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [addressline, setAddressline] = useState('');
  const [town_city, setTown_city] = useState('');
  const [errors, setErrors] = useState({});
  const [contactName, setContactName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [mpan, setMpan] = useState('');
  const [mprn, setMprn] = useState('');
  const [isNewBusiness, setIsNewBusiness] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  
  const supplier = inputs[0];
  const expiry_date = inputs[2];
  const router = useRouter();
  const { type } = useParams();

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (index, value, field = null) => {
    const updated = [...inputs];
    if (index === 1 && field) {
      updated[1] = { ...updated[1], [field]: value };
    } else {
      updated[index] = value;
    }
    setInputs(updated);
    if (index === currentStep) {
      setTimeout(() => setCurrentStep((prev) => prev + 1), 300);
    }
  };

  const handleAddressChoice = (manual) => {
    if (manual) setStep(3);
    else setStep(4);
  };

  const handleSelect = (address) => {
    setSelectedAddress(address);
    setSuggestions([]);
  };

  const handleSearch = async () => {
    setPostcodeError('');
    const ukPostcodeRegex = /^([A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2})$/i;
    if (!postcode || !ukPostcodeRegex.test(postcode.trim())) {
      setPostcodeError('Please enter a valid postcode.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.getaddress.io/autocomplete/${postcode}?api-key=H_7w6iwpukiYF6yu0sLR_w47076`
      );
      const data = await res.json();
      setSuggestions(data.suggestions || []);
    } catch (error) {
      console.error("Error fetching addresses:", error);
    } finally {
      setLoading(false);
    }
  };

  const validateStep = () => {
    let newErrors = {};
    if (step === 1) {
      if (!supplier) newErrors.supplier = "Please select your supplier.";
      if (!isNewBusiness && !inputs[2]) {
    newErrors.expiry_date = "Expiry date is required";
  }
    }
    if (step === 3) {
      if (!businessName) newErrors.businessName = "Business name is required.";
      if (!addressline) newErrors.addressline = "Address line is required.";
      if (!town_city) newErrors.town_city = "Town or city is required.";
      const ukPostcodeRegex = /^([A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2})$/i;
      if (!postcode) { 
        newErrors.postcode = "Postcode is required.";
      } else if (!ukPostcodeRegex.test(postcode.trim())) {
        newErrors.postcode = "Please enter a valid UK postcode.";
      }
    }
    if (step === 4) {
      if (!businessName) newErrors.businessName = "Business name is required.";
      if (!contactName) newErrors.contactName = "Contact name is required.";
      if (!mobileNumber) {
         newErrors.mobileNumber = "Mobile number is required.";
         } else if (mobileNumber.trim().length !== 11) {
  newErrors.mobileNumber = "Please enter a valid 11-digit mobile number.";
}

         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email) {
         newErrors.email = "Email address is required.";
         } else if (!emailRegex.test(email.trim()) ) {
          newErrors.email = "Please a valid email address"
         }
         if (type === "electricity") {
         if (mpan.trim().length !== 13 && mpan.trim().length !== 21) {
  newErrors.mpan = "Please enter a valid 13 or 21 digits mpan.";
}
}
if(type === "gas") {
      if (mprn && !/^\d{10}$/.test(mprn.trim())) {
    newErrors.mprn = "Please enter a valid 10-digit MPRN.";
  }
  } 
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep()) return;
    if (step === 2) setStep(4);
    else nextStep();
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;
    setLoading(true);
    try {
      const res = await fetch("https://nescolutilities.co.uk/api/energy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
                               service: type,
                               supplier: inputs[0],
                               bill: inputs[1].bill,
                               eac: inputs[1].eac,
                               expiry_date: inputs[2],
                               NewBusiness: isNewBusiness,
                               postcode: postcode,
                               currentaddress: selectedAddress,
                               businessname: businessName,
                               address_line: addressline,
                               town_city: town_city,
                               contactname: contactName,
                               mobile_number: mobileNumber,
                               mpan: mpan,
                               mprn: mprn,
                               email_address: email
         })
      });
      if (!res.ok) {
      throw new Error(`Server returned ${res.status}`);
    }

    // ✅ Success alert
    setShowSuccess(true);

    setError("");
  } catch (err) {
    console.error("API Error", err);

    // ❌ Error alert
    alert("Failed to submit the form. Please try again.");

    setError("Failed to submit the form. Please try again.");
  }
  };

  useEffect(() => {
  if (showSuccess) {
    const timer = setTimeout(() => {
      router.push("/"); // 👈 redirect to homepage
    }, 3000); // wait 3 seconds so alert is visible
    return () => clearTimeout(timer);
  }
}, [showSuccess, router]);


  return (
    <div className="relative min-h-screen">
      <Image src="/assets/BGQ1.jpg" alt="background" fill className="object-cover z-0 hidden md:block" priority />
      <div className=' flex flex-col md:flex-row  gap-40 '>

<div className="absolute inset-0 bg-pink-600 md:hidden z-0" />

      <div>

        {showSuccess && (
            <SuccessAlert />
        )}

        
      {/* Step 1 */}
{step === 1 && (
  <div className="relative z-20 min-h-screen flex items-start justify-center px-5 sm:px-10 md:px-20 pt-10 sm:pt-20">
    <div className="bg-white p-6 sm:p-8 md:p-8 rounded-2xl shadow-2xl w-full max-w-lg">
      <h2 className="text-2xl font-extrabold mb-6 text-blue-900">
        Help Us Understand Your Current Setup
      </h2>
      {inputs.map((value, index) => (
        <AnimatePresence key={index}>
          {index <= currentStep && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-4"
            >
              <label className="block text-sm font-medium text-black mb-1">{labels[index]}</label>
              {index === 0 ? (
                <select
                  value={value}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="w-full p-3 border border-black text-black rounded-lg"
                >
                  <option >Select supplier</option>
                  {electricitySuppliers.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              ) : index === 1 ? (
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="number"
                    placeholder="Bill (approx.)"
                    value={inputs[1].bill}
                    onChange={(e) => handleChange(1, e.target.value, 'bill')}
                    className="no-spinner w-full sm:w-1/2 p-3 border border-black text-black rounded-lg"
                  />
                  <input
                    type="number"
                    placeholder="EAC (approx.)"
                    value={inputs[1].eac}
                    onChange={(e) => handleChange(1, e.target.value, 'eac')}
                    className="no-spinner w-full sm:w-1/2 p-3 border border-black text-black rounded-lg"
                  />
                </div>
              ) : (
                <>
                  {!isNewBusiness && (
                    <input
                      type="date"
                      value={value}
                      onChange={(e) => handleChange(index, e.target.value)}
                      className="w-full p-3 border border-black text-black rounded-lg"
                    />
                  )}
                  {!isNewBusiness && errors.expiry_date && (
                    <p className="text-red-500">{errors.expiry_date}</p>
                  )}
                  {/* Checkbox for new business */}
                  <div className="mt-4 flex items-center">
                    <input
                      type="checkbox"
                      id="newBusiness"
                      checked={isNewBusiness}
                      onChange={(e) => setIsNewBusiness(e.target.checked)}
                      className="mr-2 h-4 w-4 text-blue-900 focus:ring-blue-900 border-gray-300 rounded"
                    />
                    <label htmlFor="newBusiness" className="text-sm text-black">
                      This is a new business
                    </label>
                  </div>
                </>
              )}
              {errors.supplier && index === 0 && <p className="text-red-500">{errors.supplier}</p>}
            </motion.div>
          )}
        </AnimatePresence>
      ))}
      <button
        onClick={handleNext}
        className="hover:bg-pink-500 cursor-pointer w-full mt-4 bg-blue-900 text-white py-3 rounded-lg"
      >
        Next
      </button>
    </div>
  </div>
)}


      {/* Step 2 */}
{step === 2 && (
  <div className="relative z-20 min-h-screen flex items-start justify-center px-5 sm:px-10 md:px-12 pt-10 sm:pt-20">
    <div className="bg-white p-6 sm:p-8 md:p-8 rounded-2xl shadow-2xl w-full max-w-xl">
      <h1 className="text-2xl sm:text-3xl md:text-3xl text-blue-900 font-bold mb-2">
        Kindly provide your business postal code
      </h1>
      <h3 className="text-sm sm:text-md md:text-lg text-black font-medium mb-6">
        Sharing your location allows us to tailor savings just for you.
      </h3>

      <div className="flex flex-col gap-2 mb-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            placeholder="Enter your postcode"
            className="flex-1 px-4 py-2 border border-black bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-900 hover:bg-pink-500 text-white px-4 py-2 rounded-lg transition cursor-pointer"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
        {postcodeError && (
          <p className="text-red-600 text-sm">{postcodeError}</p>
        )}
      </div>

      <ul className="border rounded-lg bg-white max-h-60 overflow-y-auto">
        {suggestions.map((item, i) => (
          <li
            key={i}
            onClick={() => handleSelect(item.address)}
            className="flex justify-between items-center p-3 hover:bg-pink-100 cursor-pointer"
          >
            <span>{item.address}</span>
            <span className="ml-4 bg-blue-900 rounded-full p-2 text-white text-sm hover:bg-pink-500">
              <FaArrowRightLong />
            </span>
          </li>
        ))}
        {suggestions.length > 0 && (
          <li
            onClick={() => handleAddressChoice(true)}
            className="flex justify-between items-center p-3 hover:bg-pink-100 cursor-pointer"
          >
            <span>My address is not listed</span>
            <span className="ml-4 bg-blue-900 rounded-full p-2 text-white text-sm hover:bg-pink-500">
              <FaArrowRightLong />
            </span>
          </li>
        )}
      </ul>

      <p
        onClick={() => handleAddressChoice(true)}
        className="py-2 cursor-pointer flex items-end justify-start font-bold text-blue-900 hover:text-pink-500"
      >
        Enter address manually
      </p>

      {selectedAddress && (
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-green-700 mb-2">Selected Address:</h4>
          <p className="bg-gray-100 p-3 rounded border border-gray-300 mb-4">
            {selectedAddress}
          </p>
          <button
            onClick={handleNext}
            className="w-full bg-blue-900 text-white py-3 rounded-lg text-lg cursor-pointer hover:bg-pink-500 transition"
          >
            Next
          </button>
        </div>
      )}
    </div>
  </div>
)}


      {step === 3 && (
  <div className="relative z-20 min-h-screen flex items-start justify-center px-5 sm:px-10 md:px-28 pt-10 sm:pt-20">
    <div className="bg-white p-6 sm:p-8 md:p-8 rounded-2xl shadow-xl w-full max-w-md">
      <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-6 text-center text-blue-900">
        Enter your business address
      </h2>

      {/* Business Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-black mb-1">
          What is your Business name
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

      {/* Address Line */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-black mb-1">
          What is your address line 1
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="text"
          placeholder="Address Line 1"
          value={addressline}
          onChange={(e) => setAddressline(e.target.value)}
          className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
            errors.addressline ? 'border-red-500' : 'border-black text-black'
          }`}
        />
        {errors.addressline && (
          <p className="text-red-500 text-sm mt-1">{errors.addressline}</p>
        )}
      </div>

      {/* Town/City */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-black mb-1">
          Town/City
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="text"
          placeholder="Your town or city"
          value={town_city}
          onChange={(e) => setTown_city(e.target.value)}
          className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
            errors.town_city ? 'border-red-500' : 'border-black text-black'
          }`}
        />
        {errors.town_city && (
          <p className="text-red-500 text-sm mt-1">{errors.town_city}</p>
        )}
      </div>

      {/* Postcode */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-black mb-1">
          Enter your Postcode
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="text"
          placeholder="Postcode"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
            errors.postcode ? 'border-red-500' : 'border-black text-black'
          }`}
        />
        {errors.postcode && (
          <p className="text-red-500 text-sm mt-1">{errors.postcode}</p>
        )}
      </div>

      <button
        onClick={handleNext}
        className="w-full mt-4 bg-blue-900 hover:bg-pink-500 cursor-pointer text-white py-3 rounded-lg transition"
      >
        Next
      </button>
    </div>
  </div>
)}


     {step === 4 && (
  <div className="relative z-20 min-h-screen flex items-start justify-center px-5 sm:px-10 md:px-30 pt-10 sm:pt-20">
    <div className="bg-white p-6 sm:p-8 md:p-8 rounded-2xl shadow-xl w-full max-w-md">
      <h2 className="text-lg sm:text-xl md:text-xl font-bold mb-6 text-center text-blue-900">
        You are almost there! Just a few more details so we can help you unlock your savings.
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
          className={`no-spinner w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
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

      {/* MPAN - Electricity */}
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
            className={`no-spinner w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
              errors.mpan ? 'border-red-500' : 'border-black text-black'
            }`}
          />
          {errors.mpan && (
            <p className="text-red-500 text-sm mt-1">{errors.mpan}</p>
          )}
        </div>
      )}

      {/* MPRN - Gas */}
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
            className={`no-spinner w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
              errors.mprn ? 'border-red-500' : 'border-black text-black'
            }`}
          />
          {errors.mprn && (
            <p className="text-red-500 text-sm mt-1">{errors.mprn}</p>
          )}
        </div>
      )}

      {/* Phone Number - Broadband */}
      {type?.toLowerCase() === 'broadband' && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-black mb-1">
            Phone number to transfer (optional)
          </label>
          <input
            type="number"
            placeholder="Enter valid Phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className={`no-spinner w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
              errors.phoneNumber ? 'border-red-500' : 'border-black text-black'
            }`}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
          )}
        </div>
      )}

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
    </div>
  </div>
)}

      </div>

      <div className=' text-black md:text-white relative z-20 min-h-screen  pt-37 pl-30 hidden md:block'>
        <div className=' flex  px-20'>
          <motion.div
      initial={{ scale: 0.8, rotate: -10 }}
      animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="text-6xl text-blue-600"
    >
      <FaHandshake className=' text-black md:text-white ' size={100} />
    </motion.div>
        </div>
        <h2 className=' font-bold text-md mb-2  '>
          1. Share your Details
        </h2>
        <p className=' mb-3 text-sm ml-4'>
          Enter your details we will handle the rest.
        </p>
        <h2 className=' font-bold text-md mb-2'>
          2. Choose a Smarter Deal
        </h2>
        <p className=' mb-3 text-sm ml-4'>
        Suppliers who put your savings first.
        </p>
        <h2 className=' font-bold text-md mb-2'>
          3. Enjoy Lower Bills.
        </h2>
        <p className='text-sm ml-4'>
             Consistent service. Reliable savings.
        </p>
      </div>
      </div>
    </div>
  );
}
