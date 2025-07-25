'use client'
import { useState } from "react";

export default function PostcodeLookup() {
  const [postcode, setPostcode] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        value={postcode}
        onChange={(e) => setPostcode(e.target.value)}
        placeholder="Enter Your postcode"
        className="border p-2 w-full rounded mb-4"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        {loading ? 'Searching...' : 'Search'}
      </button>

      <ul className="border rounded bg-white">
        {suggestions.map((item, i) => (
          <li key={i} className="p-3 border-b last:border-none">
            {item.address}
          </li>
        ))}
      </ul>
    </div>
  );
}
