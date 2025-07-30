'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function ManualForm() {
  const { type } = useParams();
  const router = useRouter();

  const [businessName, setBusinessName] = useState('');
  const [addressline, setAddressline] = useState('');
  const [town_city, setTown_city] = useState('');
  const [postcode, setPostcode] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!businessName.trim()) newErrors.businessName = "Business name is required.";
    if (!addressline.trim()) newErrors.addressline = "Address line is required.";
    if (!town_city.trim()) newErrors.town_city = "Town/City is required.";
    if (!postcode.trim()) newErrors.postcode = "Postcode is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      router.push(`/services/${type}/projectform`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 to-pink-100 p-6">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">
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
          onClick={handleSubmit}
          className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
