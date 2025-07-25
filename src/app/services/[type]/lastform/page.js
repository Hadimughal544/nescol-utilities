'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectForm() {
  const [inputs, setInputs] = useState(["", "", "", "", "", ""]);
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState("");
  const router = useRouter();
  const { type } = useParams();

  const labels = [
    "Who is your Business name",
    "What is your contact name",
    "What is your mobile number",
    "What is your email address",   
    "What is your MPAN",
    "What is your MPRN"
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
                animate={{ opacity: 1, y: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-4"
              >
                <label className="block text-sm font-medium text-black mb-1">
                  {labels[index]}
                </label>

                {index === 0 ? (
                  <input
                    type="text"
                    placeholder="Business name "
                    value={value}
                    onChange={(e) => handleChange(index, e.target.value)}
                    className="w-full p-3 border border-black text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                ) : index === 1 ? (
                  <input
                    type="text"
                    placeholder="Contact name"
                    value={value}
                    onChange={(e) => handleChange(index, e.target.value)}
                    className="w-full p-3 border border-black text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                 
                ) : index === 2 ? (
                  <input
                    type="text"
                    placeholder='mobile number'
                    value={value}
                    onChange={(e) => handleChange(index, e.target.value)}
                    className="w-full p-3 border border-black text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                ) : index === 3 ? (
                    <input
                    type="number"
                    placeholder='Email address'
                    value={value}
                    onChange={(e) => handleChange(index, e.target.value)}
                    className="w-full p-3 border border-black text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                ) : index === 4 ? (
                    <input
                    type="number"
                    placeholder='MPAN'
                    value={value}
                    onChange={(e) => handleChange(index, e.target.value)}
                    className="w-full p-3 border border-black text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                ) : index === 5 ? (
                    <input
                    type="number"
                    placeholder='MPRN'
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
          className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Submit
        </motion.button>
      </div>
    </div>
  );
}
