'use client';
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';
import Link from "next/link";

export default function Adressform() {
  const params = useParams();
  const type = params.type;

  const [postcode, setPostcode] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSearch = async () => {
    if (!postcode) return;
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

  const handleSelect = (address) => {
    setSelectedAddress(address);
    setSuggestions([]);
  };

  const handleNext = () => {
    router.push(`/services/${type}/projectform`);
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
   
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-xl w-full">
        <h1 className="text-2xl md:text-3xl text-blue-900 font-bold mb-2">
          Kindly provide your business postal code
        </h1>
        <h3 className="text-md md:text-lg text-black font-medium mb-6">
          Sharing your location allows us to tailor quotes just for you.
        </h3>

        <div className="flex gap-2 mb-4">
          <input
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            placeholder="Enter your postcode"
            className="flex-1 px-4 py-2 border border-black bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-900 hover:bg-pink-500 text-white px-4 py-2 rounded-lg transition"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>

        <ul className="border rounded-lg bg-white max-h-60 overflow-y-auto">
          {suggestions.map((item, i) => (
            <li
              key={i}
              onClick={() => handleSelect(item.address)}
              className="flex justify-between items-center p-3 hover:bg-pink-100 cursor-pointer">
      <span>{item.address}</span>
      <button
        onClick={() => handleSelect(item.address)}
        className="ml-4 bg-blue-900 rounded-full p-2 text-white text-sm hover:bg-pink-500 cursor-pointer"
        aria-label={`Select address ${item.address}`}
      >
        <FaArrowRightLong/>
      </button>
            </li>
          ))}

          {suggestions.length > 0 && (
            <li
    onClick={() => router.push(`/services/${type}/manualaddress`)}
    className="flex justify-between items-center p-3 hover:bg-pink-100 cursor-pointer"
  >
    <span>My address is not listed</span>
    <span className="ml-4 bg-blue-900 rounded-full p-2 text-white text-sm hover:bg-pink-500">
      <FaArrowRightLong />
    </span>
  </li>
          )}
        </ul>
        <p onClick={handleNext} className=" py-2 cursor-pointer flex items-end justify-end text-blue-900 hover:text-pink-500 ">
          or enter address manually
        </p>

        {selectedAddress && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-green-700 mb-2">Selected Address:</h4>
            <p className="bg-gray-100 p-3 rounded border border-gray-300 mb-4">
              {selectedAddress}
            </p>
            <button
              onClick={handleNext}
              className="w-full bg-blue-900 text-white py-3 rounded-lg text-lg hover:bg-pink-500 transition"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
