'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowRightLong } from "react-icons/fa6";
import { Droplet, Zap, Trash2, SlidersHorizontal } from 'lucide-react';
import { FaCreditCard } from "react-icons/fa";
import { TbDeviceTabletDollar, TbReportSearch } from "react-icons/tb";
import { FaComputer } from "react-icons/fa6";
import { MdPointOfSale, MdOutlineWaterDrop } from "react-icons/md";
import { RiDeleteBin6Line, RiCheckboxMultipleFill } from "react-icons/ri";
import Image from 'next/image';
import SuccessAlert from '@/app/components/SuccessAlert';
import { FaHandshake } from "react-icons/fa";
import { useEffect } from "react";

const electricitySuppliers = [
  'E.ON Next', 'British Gas', 'British Gas Lite', 'Scottish Power',
  'EDF Energy', 'Smartest Energy', 'TotalEnergies Gas & Power',
  'YGP', 'Yü Energy', 'Utilita Energy', 'Other'
];

const broadbandSuppliers = [
    'Zen Internet', 'BT', 'Sky', 'Virgin Media', 'TalkTalk', 'Vodafone', 'Plusnet','EE','Plus Net', 
    '4th Utility', 'GigaClear', 'Befibre', 'Hey! Broadband', 'Brsk', 'Community Fibre', 'Gige Networks',
    'Direct Save Telecom', 'Hull fibre', 'Kcom', 'Onestream', 'Origin', 'Trooli', 'Squirrel', 'open Fibre',
    'MTH Networks', 'Pop Telecom', 'Now Broadband', 'Rise Fibre', 'Shell Energy Broadband', 'Three', 'Hyperoptic',
    'You Fibre', 'XLN Telecom', 'Yayzi', 'Not sure yet', 'I’m moving to this location', 'No broadband service currently',
    'My provider isn’t listed'
  ];



  const PaymenticonMap = {
    'POS Machine': <MdPointOfSale className=' w-8 h-8 mr-1'/> ,
     'SoftPos': <FaCreditCard className=' w-8 h-8 mr-1'/> ,
      'E-Pos': <TbDeviceTabletDollar className=' w-8 h-8 mr-1'/>,
       'Merchant Portal': <FaComputer className=' w-8 h-8 mr-' />,
  };

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
const [showSuccess, setShowSuccess] = useState(false);

const supplier = inputs[0];


 const toggleService = (service) => {
    setPaymentInputs((prev) => {
      const isSelected = prev.services.includes(service);
      const updatedServices = isSelected
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: updatedServices };
    });
  };

    const handlePaymentChange = (field, value) => {
    setPaymentInputs((prev) => ({ ...prev, [field]: value }));
  };




  const router = useRouter();
  const { type } = useParams();



  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

const handleChange = (index, value, field = null) => {
  const updated = [...inputs];

  if (index === 1 && field) {
    updated[1] = { ...updated[1], [field]: value }; // update bill or eac
  } else {
    updated[index] = value; // supplier or expiry date
  }

  setInputs(updated); // ✅ This updates state so React re-renders

  if (index === currentStep) {
    setTimeout(() => setCurrentStep((prev) => prev + 1), 300);
  }
};



  const handleAddressChoice = (manual) => {
  if (manual) {
    setStep(3); // go to address entry form
  } else {
    setStep(4); // skip to final step
  }
};


  const handleSelect = (address) => {
    setSelectedAddress(address);
    setSuggestions([]);

  };

  const handleSearch = async () => {
    setPostcodeError('');
    const ukPostcodeRegex = /^([A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2})$/i;

    if (!postcode || !ukPostcodeRegex.test(postcode.trim())) {
      setPostcodeError('Please enter a valid  postcode.');
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
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatestep4 = () => {
     let newErrors = {};
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
      
  };

  const handleNext = () => {
    if (!validateStep()) return;
   if (step === 2) {
    // Jump straight to step 4
    setStep(4);
  } else {
    nextStep();
  }
  };

  const handleSubmit = async () => { 
    if (!validateStep()) return;
    setLoading(true);
        try{
           const res =  await fetch("https://31.97.117.214:3001/api/broadband", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    Service: type,
                    Supplier: inputs[0],
                    Postcode: postcode,
                    Current_Address: selectedAddress || null,
                    Business_Name: businessName,
                    Address_line1: addressline || null,
                    Town_City: town_city || null,
                    Contact_Name: contactName,
                    Mobile_Number: mobileNumber,
                    transfer_Number: phoneNumber,
                    email_address: email
                })
            });

            if (!res.ok) {
      throw new Error(`Server returned ${res.status}`);
    }

    const result = await res.json();

    // ✅ Success alert
    

    setError("");
    setShowSuccess(true);
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
    <div className="relative min-h-screen h-[850px] w-full ">
      <Image
        src="/assets/BGQ3.jpg"
        alt="background"
        fill
        className="object-cover z-0 hidden md:block"
        priority
      />
      <div className="flex gap-40 items-start">

        <div className="absolute inset-0 bg-pink-600 md:hidden z-0" />
      <div>

        {showSuccess && (
            <SuccessAlert />
        )}

      {/* Step 1 */}
      {step === 1 && (
       <div className=" relative z-20 min-h-screen flex items-start justify-start 
  max-w-full sm:max-w-xl md:max-w-2xl 
   pt-40 md:pt-50 
  px-4 sm:px-10 md:px-20">
  <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg backdrop-blur-md">
    <h2 className="text-2xl font-extrabold mb-6 text-blue-900">
      Help Us Understand Your Current Setup
    </h2>

    <div className="mb-4">
      <label className="block text-sm font-medium text-black mb-1">
        Who is your current broadband supplier *
      </label>
      
      <select
  value={inputs[0]}
  onChange={(e) => handleChange(0, e.target.value)}
  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
    errors.supplier ? 'border-red-500' : 'border-black text-black'
  }`}
>
  <option>Select supplier</option>

  <optgroup label="Major Providers">
    <option value="BT">BT</option>
    <option value="Sky">Sky</option>
    <option value="Virgin Media">Virgin Media</option>
    <option value="TalkTalk">TalkTalk</option>
    <option value="Vodafone">Vodafone</option>
    <option value="Plusnet">Plusnet</option>
    <option value="EE">EE</option>
  </optgroup>

  <optgroup label="Smaller/Regional Providers">
    <option value="4th Utility">4th Utility</option>
    <option value="GigaClear">GigaClear</option>
    <option value="Befibre">Befibre</option>
    <option value="Hey! Broadband">Hey! Broadband</option>
    <option value="Brsk">Brsk</option>
    <option value="Community Fibre">Community Fibre</option>
    <option value="Gige Networks">Gige Networks</option>
    <option value="Direct Save Telecom">Direct Save Telecom</option>
    <option value="Hull fibre">Hull fibre</option>
    <option value="Kcom">Kcom</option>
    <option value="Onestream">Onestream</option>
    <option value="Origin">Origin</option>
    <option value="Trooli">Trooli</option>
    <option value="Squirrel">Squirrel</option>
    <option value="open Fibre">open Fibre</option>
    <option value="MTH Networks">MTH Networks</option>
    <option value="Pop Telecom">Pop Telecom</option>
    <option value="Now Broadband">Now Broadband</option>
    <option value="Rise Fibre">Rise Fibre</option>
    <option value="Shell Energy Broadband">Shell Energy Broadband</option>
    <option value="Three">Three</option>
    <option value="Hyperoptic">Hyperoptic</option>
    <option value="You Fibre">You Fibre</option>
    <option value="XLN Telecom">XLN Telecom</option>
    <option value="Yayzi">Yayzi</option>
    <option value="Zen Internet">Zen Internet</option>
  </optgroup>

  <optgroup >
    <option value="Not sure yet" className='  text-gray-600'>Not sure yet</option>
    <option value="I am moving to this location" className=' text-gray-600'>I am moving to this location</option>
    <option value="No broadband service currently" className=' text-gray-600'>No broadband service currently</option>
    <option value="My provider isn’t listed" className=' text-gray-600  '>My provider is not listed</option>
  </optgroup>
</select>

      {errors.supplier && <p className="text-red-500 text-sm mt-1">{errors.supplier}</p>}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>

    <button
      onClick={handleNext}
      className="w-full mt-4 bg-blue-900 text-white py-3 rounded-lg hover:bg-pink-500 transition cursor-pointer"
    >
      Next
    </button>
  </div>
</div>
      )}



      {/* Step 2 */}
      {step === 2 && (
        <div className="relative z-20 min-h-screen flex items-start justify-center px-5 sm:px-10 md:px-12 pt-40 md:pt-50 ">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-xl w-full">
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
                  onClick= {() => handleAddressChoice(true)}
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
              onClick = {() => handleAddressChoice(true)}
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

      { step === 3 && (
       <div className="relative z-20 min-h-screen flex items-start justify-center px-5 sm:px-10 md:px-28 pt-40 md:pt-50 ">
    
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">
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
          className="w-full mt-4 bg-blue-900 cursor-pointer hover:bg-pink-500 text-white py-2 rounded-lg transition"
        >
          Next
        </button>
      </div>
    </div>
      )}

      { step === 4 && (
        <div className="relative z-20 min-h-screen flex items-start justify-center px-5 sm:px-10 md:px-30 pt-40 md:pt-50 ">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-6 text-center text-blue-900">
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

        {/* Phone Number to transfer */}
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
              className={` no-spinner w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                errors.previousProvider ? 'border-red-500' : 'border-black text-black'
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
      {showSuccess && <SuccessAlert />}
      </div>
      
      
            <div className=' text-white relative z-20 min-h-screen pt-37 pl-30 hidden md:hidden lg:hidden'>
              <div className=' flex  px-20'>
                <motion.div
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-6xl text-blue-600"
          >
            <FaHandshake className=' text-white' size={100} />
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
