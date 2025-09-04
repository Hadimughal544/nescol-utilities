'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

export default function Toaster() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000); // auto-hide after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.2 }}
          className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white text-black px-10 py-7 rounded-lg shadow-lg z-50 flex items-center gap-2"
        >
          <CheckCircle size={20} className=' text-pink-500'/>
          <span className="font-medium">Form submitted successfully!</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
