'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectForm() {
  const [inputs, setInputs] = useState(["", {bill: "", eac: ""}, ""]);
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState("");
  const router = useRouter();
  const { type } = useParams();

  const labels = [
    "Who is your current Supplier",
    "What is your current monthly-bill/EAC",
    "When does your current contract expire"
  ];

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


  const handleNext = () => {
    router.push(`/services/${type}/addressform`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 to-pink-100 p-6">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">
          Project Form ({type})
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
                <label className="block text-sm font-medium text-black mb-1">
                  {labels[index]}
                </label>

                {index === 0 ? (
                  <select
                    value={value}
                    onChange={(e) => handleChange(index, e.target.value)}
                    className="w-full p-3 border border-black text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  >
                    <option value="">Select supplier</option>
                    <option>British Gas</option>
                    <option>e-on</option>
                    <option>Jellyfish</option>
                    <option>Total Energies</option>
                    <option>Other</option>
                  </select>
                ) : index === 1 ? (
                    <div className=' flex gap-4'>
                  <input
                    type="text"
                    placeholder="Enter bill-amount "
                    value={inputs[1].bill}
                    onChange={(e) => handleChange(1, e.target.value, "bill")}
                    className="w-full p-3 border border-black text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                  <input
                    type="text"
                    placeholder="Enter EAC "
                    value={inputs[1].eac}
                    onChange={(e) => handleChange(1, e.target.value, "eac")}
                    className="w-full p-3 border border-black text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                  </div>
                ) : index === 2 ? (
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => handleChange(index, e.target.value)}
                    className="w-full p-3 border border-black text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                ) : null}

                {error && index === currentStep && (
                  <p className="text-red-500 text-sm mt-1">{error}</p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        ))}

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleNext}
          className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Next
        </motion.button>
      </div>
    </div>
  );
}
