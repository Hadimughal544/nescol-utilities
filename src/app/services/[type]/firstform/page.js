'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function ProjectForm() {
  const [inputs, setInputs] = useState(['', { bill: '', eac: '' }, '']);
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState('');
  const router = useRouter();
  const { type } = useParams();

  const labels = [
    'Who is your current Supplier *',
    'What is your current monthly-bill/EAC *',
    'When does your current contract expire *',
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
    let emptyIndex = -1;

    if (inputs[0] === '') emptyIndex = 0;
    else if (inputs[2] === '') emptyIndex = 2;

    if (emptyIndex !== -1) {
      setError('Please fill this input before continuing.');
      setCurrentStep(emptyIndex);
      return;
    }

    setError('');
    router.push(`/services/${type}/addressform`);
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
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg">
          <h2 className="text-2xl font-extrabold mb-6 text-left text-blue-950">
            Ready for Change? Help Us Understand Your Current Setup.
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
                      <option>E.ON Next</option>
                      <option>British Gas</option>
                      <option>British Gas Lite</option>
                      <option>Scottish Power</option>
                      <option>EDF Energy</option>
                      <option>Smartest Energy</option>
                      <option>TotalEnergies Gas & Power</option>
                      <option>YGP</option>
                      <option>Yü Energy</option>
                      <option>Utilita Energy</option>
                      <option>Other</option>
                    </select>
                  ) : index === 1 ? (
                    <div className="flex gap-4">
                      <div className="relative w-1/2">
                        <input
                          type="number"
                          placeholder="Bill (approx.)"
                          className="no-spinner w-full pr-8 p-3 border border-black text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                          value={inputs[1].bill}
                          onChange={(e) => handleChange(1, e.target.value, 'bill')}
                        />
                        <div className="absolute inset-y-0 right-3 flex items-center space-x-1 text-gray-500 text-lg">
                          <span className="h-5 border-l border-gray-300"></span>
                          <span>£</span>
                        </div>
                      </div>
                      <div className="relative w-1/2">
                        <input
                          type="number"
                          placeholder="EAC (approx.)"
                          className="no-spinner w-full pr-12 p-3 border border-black text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                          value={inputs[1].eac}
                          onChange={(e) => handleChange(1, e.target.value, 'eac')}
                        />
                        <div className="absolute inset-y-0 right-3 flex items-center space-x-1 text-gray-500 text-sm">
                          <span className="h-5 border-l border-gray-300"></span>
                          <span>kWh/year</span>
                        </div>
                      </div>
                    </div>
                  ) : index === 2 ? (
                    <input
                      type="date"
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
            className="w-full mt-4 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
          >
            Next
          </motion.button>
        </div>
      </div>
    </div>
  );
}
