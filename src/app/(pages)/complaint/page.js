import Image from "next/image";
import Link from "next/link";
import { FaGreaterThan, FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export default function Complaint() {
  return (
    <main>
    <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px]">
      {/* Blurred Background Image */}
      <Image
        src="/assets/complaint.jpg"
        alt="Hero"
        fill
        className="object-cover w-full h-full z-0  brightness-75"
        priority
      />

      {/* Optional: Extra Dark Overlay */}
      <div className="absolute inset-0 bg-blue-950/40 z-10" />

      {/* Centered Text Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center text-center space-y-4">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide drop-shadow-lg">
          Complaints
          <div className=" flex text-sm items-center justify-center text-center gap-2 py-3">
            <Link href="/" className=" text-pink-500 hover:text-white">
          Home 
          </Link>
          <p><FaGreaterThan /></p>
          <p className=" flex gap-3">
            Complaints
          </p>
          </div>
          
        </h1>
      </div>
    </div>

    <div className=" mx-auto px-20 py-10 space-y-8 text-gray-800 ">

      <section>
    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">Submitting a Complaint</h2>
    <p className="mb-2">The quickest way to raise a concern is by emailing us at <a href="mailto:support@nescolutilities.co.uk" className="text-pink-600 underline">support@nescolutilities.co.uk</a>.</p>
    <p>If you prefer writing to us, you can send your letter to our postal address — but contacting us via phone or live chat is generally faster.</p>
  </section>


  <section >
    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
       What Happens After You Complain
      </h3>
      <ul className=" list-disc list-inside space-y-2">
        <li>Your complaint will be assigned to your account manager, who will send you an email outlining the complaints process.</li>
        <li>Expect a reply within 3 working days. We will aim to resolve your issue within 7 working days.</li>
        <li>Every detail of your complaint will be documented to help us improve our service</li>
        <li>Depending on the situation, resolution may include:
          <ul className=" list-decimal list-inside ml-4 mt-1 space-y-1">
            <li>A detailed explanation of what went wrong</li>
            <li>An apology</li>
            <li>Corrective action</li>
            <li>Compensation, where appropriate</li>
          </ul>
        </li>
        </ul> 

  </section>

  <section>
    <h3 className=" text-2xl md:text-3xl font-bold mb-3 text-blue-900">Not Satisfied Yet?</h3>
    <p className="mb-2">If your complaint has not been resolved within 7 working days, or you are unhappy with how things are progressing, we’ll escalate the issue to a senior manager. <br></br> They will:</p>
    <ul className=" list-disc list-inside space-y-2 ml-4 ">
      <li>Review your case with your account manager</li>
      <li>Contact you directly to work toward a resolution</li>
    </ul>
  </section>

  <section>
    <h3 className=" text-2xl md:text-3xl font-bold text-blue-900 mb-4">Commitment to Transparency</h3>
    <p>
      We publish complaint data to show how seriously we take feedback. It is part of our commitment to being transparent and holding ourselves accountable.
    </p>

  </section>



  <section>
    <h3 className=" text-2xl md:text-3xl mb-2  font-bold text-blue-900">Further Review (Internal Investigation)</h3>
    <p>
      If you are not happy with our resolution, we will review the case again internally.<br></br> We will:
    </p>
    <ul className=" list-disc list-inside space-y-2 ml-4">
      <li>Reassess how your complaint was handled</li>
      <li>Communicate our final decision and reasoning</li>
      <li>Share next steps or timelines if further action is needed</li>
    </ul>
  </section>

   <section>
    <h3 className=" text-2xl md:text-3xl mb-2  font-bold text-blue-900">Energy Ombudsman Services</h3>
    <p className=" mb-2">
      You can contact the Energy Ombudsman if:
    </p>
    <ul className=" list-disc list-inside space-y-1 ml-4">
      <li>Your complaint has been unresolved within 8 working weeks</li>
      <li>You have received a Final Resolution Offer Letter and still are not satisfied</li>
    </ul>
    <p className=" mt-2">This is a free, independent service. If you accept their decision, it becomes binding for us—but not for you.</p>
    <div className=" mt-4 space-y-1">
      <p><strong>How to Contact the Ombudsman:</strong></p>
      <div className=" ml-4">
      <div className=" flex gap-2 items-center ">
        <p className=" text-pink-500"><FaPhone /></p>
         <p> Phone: <a href="tel:03304401624" className=" underline">0330 440 1624</a></p>
      </div>
      <div className=" flex gap-2 items-center ">
        <p className=" text-pink-500"><MdOutlineMailOutline /></p>
         <p> Email: <a href="mailto:enquiry@ombudsman-services.org" className=" underline">enquiry@ombudsman-services.org</a></p>
      </div>
      <div className=" flex gap-2 items-center ">
        <p className=" text-pink-500"><TbWorld /></p>
         <p> Website: <a href="https://www.ombudsman-services.org/energy" target="_blank" className=" underline">www.ombudsman-services.org/energy</a></p>
      </div>
       <div className=" flex gap-2 items-center ">
        <p className=" text-pink-500"><FaRegAddressCard /></p>
         <p> Post: Ombudsman Services: Energy, PO Box 966, Warrington, WA4 9DF</p>
      </div>
      </div>
    </div>
  </section>


    </div>
    </main>
  );
}