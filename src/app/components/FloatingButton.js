import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <div>
      <Link 
        href="https://wa.me/+447482430256" // Replace with your actual number in international format
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={24} />
      </Link>
    </div>
  );
}
