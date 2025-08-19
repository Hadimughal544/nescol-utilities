'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ThankYouPage() {
  return (
    <div className="relative min-h-screen flex  bg-gray-50">
      {/* Background image */}
      <Image
        src="/assets/thanks.jpg" // use your own image path
        alt="background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Content */}
      <div className="relative z-20 min-h-screen flex items-start justify-start pt-20 px-20">
        <h2 className=' text-3xl text-justify font-bold  '>
            Thanks for choosing Nescol Utilities—an energy expert <br></br> will contact you shortly to discuss your quotes
        </h2>
      </div>
    </div>
  );
}
