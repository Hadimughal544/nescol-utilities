'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

export default function Adressform() {
    const { type } = useState;
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
    setSuggestions([]); // Clear suggestions after selection
  };

  const handleNext = () => {
    // You can send the selected address through router or store
    router.push(`/services/${type}/lastform`); // update path accordingly
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center px-4">
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
            className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>

        <ul className="border rounded-lg bg-white max-h-60 overflow-y-auto">
          {suggestions.map((item, i) => (
            <li
              key={i}
              onClick={() => handleSelect(item.address)}
              className="p-3 border-b cursor-pointer hover:bg-blue-100"
            >
              {item.address}
            </li>
          ))}
        </ul>

        {selectedAddress && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-green-700 mb-2">Selected Address:</h4>
            <p className="bg-gray-100 p-3 rounded border border-gray-300 mb-4">
              {selectedAddress}
            </p>
            <button
              onClick={handleNext}
              className="w-full bg-purple-700 text-white py-3 rounded-lg text-lg hover:bg-purple-800 transition"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
