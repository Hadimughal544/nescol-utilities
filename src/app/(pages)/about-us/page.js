import Image from "next/image";

export default function About() {
    return(
        <main>

            <div className=" relative w-full h-[5   00px] md:h-[550px] lg:h-[600px]">

                <Image
                src="/assets/HomePoster.jpg"
                alt="about us image"
                fill
                className="object-cover w-full h-full z-0   "
                />

                <div className=" absolute inset-0 z-20 text-white flex flex-col  space-y-4 px-30 py-20 pt-30 gap-10  ">
                    <h1 className=" text-3xl md:text-4xl font-bold text-white ">
                        Driving Simplicity in a Complex Utility World
                    </h1>
                    <p className="  text-base md:text-lg leading-relaxed text-justify">
                        At Nescol Utilities, we believe managing your utilities shouldn’t be complicated. That is why we have <br></br>built a customer-focused company that delivers straightforward solutions in energy, broadband, <br></br>water, payments, and more — all in one place. Whether you are a homeowner, small business, or <br></br>large enterprise, we take the confusion out of switching, saving, and scaling.
                    </p>
                </div>

            </div>

            <div className="px-6 md:px-24 py-12">

                <section>
                    <h2 className=" text-2xl md:text-3xl font-semibold text-blue-800 mb-4">Who We Are</h2>
                    <p className=" text-md mb-6 leading-relaxed">
                        Nescol Utilities is a UK-based utility consultancy dedicated to helping people and businesses make smarter decisions.
          From competitive energy tariffs to fast broadband and merchant card services, we partner with trusted providers to bring
          you better value — without the usual headaches. Our team is made up of experienced industry professionals who genuinely care
          about your bottom line.
                    </p>
                </section>
             
                <section>
                       <h2 className="text-2xl font-semibold text-blue-800 mb-4">What We Stand For</h2>
        <ul className="list-disc ml-6 mb-6 text-md space-y-2">
          <li><strong>Clarity over Complexity:</strong> No jargon. No hidden fees. Just transparent advice and clear comparisons that save you money.</li>
          <li><strong>Personalised Support:</strong> We don’t believe in one-size-fits-all. Our advisors get to know your needs and tailor every recommendation accordingly.</li>
          <li><strong>Reliability You Can Count On:</strong> We only work with established suppliers who share our commitment to quality, speed, and customer service.</li>
          <li><strong>Innovation for Everyday Life:</strong> From bundled packages to smarter tech integration, we’re always evolving to make your utility experience easier and more efficient.</li>
        </ul>
                </section>


                <section>
                     <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Mission</h2>
        <p className="text-lg mb-6 leading-relaxed">
          Our mission is simple: <strong>to take the stress out of utilities.</strong> We do this by offering guidance you can trust,
          deals that work for you, and a support team that always picks up the phone.
        </p>
                </section>


                <section>
                    <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Vision</h2>
        <p className="text-lg mb-6 leading-relaxed">
          We envision a future where switching providers, managing bills, and setting up new services are effortless for every household and business.
          At Nescol Utilities, we’re not just saving you money — we’re saving you time, worry, and energy.
        </p>
                </section>



                <section>
                    <h2 className="text-2xl font-semibold text-blue-900 mb-4">Why Our Clients Choose Us</h2>
                    <ul className=" list-disc list-inside space-y-2 mb-4">
                        <li>Trusted by hundreds of homes and businesses across the UK</li>
                        <li>Rapid response time with a dedicated personal advisor</li>
                        <li>Exclusive deals through our partner network</li>
                        <li>Full-service utility setup for new properties</li>
                        <li>Ongoing support — long after the contract is signed</li>
                    </ul>
                </section>


                <section>
                    <h2 className=" text-2xl font-semibold text-blue-900 mb-4"> {`Let's work together`}</h2>
                     <p className="text-lg leading-relaxed mb-4">
          {`Whether you're moving premises, looking to cut costs, or just need advice, Nescol Utilities is here to make it happen.
          We do not just compare prices — we build partnerships. Let’s simplify your utilities and put you back in control.`}
        </p>
                </section>



            </div>
        </main>
    );
}