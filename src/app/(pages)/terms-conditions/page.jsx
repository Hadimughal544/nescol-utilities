import Image from "next/image";
import Link from "next/link";
import { FaGreaterThan, FaPhone } from "react-icons/fa6";

export default function TermsConditions() {
    return (
        <main>
            <div className="relative w-full h-[450px] md:h-[350px] lg:h-[500px]">
                {/* Blurred Background Image */}
                <Image
                    src="/assets/terms.jpg"
                    alt="Hero"
                    fill
                    className="object-cover w-full h-full z-0  brightness-75 "
                    priority
                />

                {/* Optional: Extra Dark Overlay */}
                <div className="absolute inset-0 bg-blue-950/40 z-10" />

                {/* Centered Text Content */}
                <div className="absolute inset-0 mt-20 z-20 flex items-center justify-center text-center space-y-4">
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide drop-shadow-lg">
                        Terms &amp; Conditions
                        <div className=" flex text-sm items-center justify-center text-center gap-2 py-3">
            <Link href="/" className=" text-pink-500 hover:text-white">
          Home 
          </Link>
          <p><FaGreaterThan /></p>
          <p className=" flex gap-3">
            Terms &amp; Conditions
          </p>
          </div>
                    </h1>
                </div>
            </div>

            <div className="mx-auto px-20 py-10 space-y-8 text-gray-800">

                {/* Intro */}
                <section>
                    <p className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
                        At Nescol Utilities, clarity and trust guide every interaction.
                    </p>
                    <p className="mb-2">
                        These Terms and Conditions, together with any other documents referred to herein, set out the terms of use
                        under which you may use our website,{" "}
                        <a href="https://www.nescolutilities.com" className="text-pink-600 underline">
                            www.nescolutilities.com
                        </a>{" "}
                        (&quot;Our Site&quot;). Please read these Terms and Conditions carefully and ensure that you understand them.
                    </p>
                    <p>
                        By using Our Site, you agree to comply with and be bound by these Terms and Conditions. If you do not agree,
                        you must stop using Our Site immediately.
                    </p>
                </section>

                {/* 1 */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
                        1. Definitions and Interpretation
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <strong>Content:</strong> Any text, images, audio, video, scripts, code, software, databases, or other
                            information appearing on Our Site.
                        </li>
                        <li>
                            <strong>System:</strong> Any online communications facility we provide, including contact forms, email, or
                            live chat.
                        </li>
                        <li>
                            <strong>We/Us/Our:</strong> NEIL &amp; NESCOL LTD, a company registered in Scotland SC679848, with its
                            registered office at 3/2, 28 Ancroft Street, Glasgow, Scotland, G20 7HU.
                        </li>
                    </ul>
                </section>

                {/* 2 */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
                        2. Information About Us
                    </h2>
                    <p className="mb-2">
                        Our Site, www.nescolutilities.com, is owned and operated by NEIL &amp; NESCOL LTD.
                    </p>
                </section>

                {/* 3 */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
                        3. Access to Our Site
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Access is free of charge.</li>
                        <li>You are responsible for making arrangements to access Our Site.</li>
                        <li>
                            Access is provided &quot;as is&quot; and &quot;as available.&quot; We may alter, suspend, or discontinue Our Site at any
                            time without liability.
                        </li>
                    </ul>
                </section>

                {/* 4 */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
                        4. Intellectual Property Rights
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>All Content belongs to or is licensed by Us.</li>
                        <li>You may not reproduce, copy, or distribute Content without written permission.</li>
                        <li>
                            You may view, download, and print pages for personal or business use, provided our ownership is
                            acknowledged.
                        </li>
                        <li>Commercial use requires a licence.</li>
                    </ul>
                </section>

                {/* 5 */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
                        5. Links to Our Site
                    </h2>
                    <p className="mb-2">You may link to Our Site if:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>It is fair and legal.</li>
                        <li>It does not suggest endorsement where none exists.</li>
                        <li>It does not damage our reputation.</li>
                    </ul>
                    <p className="mt-2">Deep linking or framing requires written permission.</p>
                </section>

                {/* 6 */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
                        6. Links to Other Sites
                    </h2>
                    <p>
                        Our Site may include links to third party sites. We are not responsible for their content or policies.
                    </p>
                </section>

                {/* 7 */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
                        7. Use of Our System
                    </h2>
                    <p className="mb-2">You must not use Our System to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Send offensive, unlawful, or misleading communications.</li>
                        <li>Infringe privacy or intellectual property rights.</li>
                        <li>Misrepresent your identity or affiliation.</li>
                    </ul>
                    <p className="mt-2">
                        We may monitor communications and modify submitted information. Personal data will be handled in accordance
                        with our Privacy Policy.
                    </p>
                </section>

                {/* 8 */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
                        8. Disclaimers
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Content is for general information only and does not constitute professional advice.</li>
                        <li>We make reasonable efforts to ensure accuracy but provide no guarantees.</li>
                        <li>Pricing and service details may change without notice.</li>
                        <li>Availability of services is not guaranteed.</li>
                    </ul>
                </section>

                {/* 9 */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
                        9. Our Liability
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>We accept no liability for loss or damage arising from use of Our Site, except where required by law.</li>
                        <li>We are not liable for business losses such as lost profits, goodwill, or interruptions.</li>
                        <li>We are not responsible for viruses, malware, or external disruptions.</li>
                        <li>Nothing excludes liability for fraud, negligence, or personal injury.</li>
                    </ul>
                </section>

                {/* 10 */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
                        10. Viruses, Malware and Security
                    </h2>
                    <p>
                        You must not introduce viruses, attempt unauthorised access, or attack Our Site. Breaches may constitute
                        criminal offences and will be reported.
                    </p>
                </section>

                {/* 11 */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
                        11. Acceptable Use Policy
                    </h2>
                    <p>
                        You must use Our Site lawfully and not for fraudulent or harmful purposes. Breaches may result in
                        suspension, termination, or legal action.
                    </p>
                </section>

                {/* 12 */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
                        12. Privacy and Cookies
                    </h2>
                    <p>
                        Use of Our Site is governed by our Privacy Policy and Cookie Policy, available at{" "}
                        <a href="https://www.nescolutilities.com/privacy-policy" className="text-pink-600 underline">
                            www.nescolutilities.com/privacy-policy
                        </a>
                        .
                    </p>
                </section>

                {/* 13 */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
                        13. Data Protection
                    </h2>
                    <p>
                        We comply with the UK GDPR and Data Protection Act. For details of how we collect, process, and retain
                        personal data, please see our Privacy Policy.
                    </p>
                </section>

                {/* 14 */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
                        14. Communications from Us
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>We may send important notices by email.</li>
                        <li>
                            Marketing emails will only be sent with your consent and will include an unsubscribe option.
                        </li>
                    </ul>
                </section>

                {/* 15 */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
                        15. Changes to These Terms
                    </h2>
                    <p>
                        We may update these Terms at any time. Continued use of Our Site constitutes acceptance of the updated
                        Terms.
                    </p>
                </section>

                {/* 16 */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
                        16. Contacting Us
                    </h2>
                    <p>
                        You can contact us via Our Site, by email at{" "}
                        <a href="mailto:info@nescolutilities.com" className="text-pink-600 underline">
                            info@nescolutilities.com
                        </a>
                        , or through the details provided on our Contact page.
                    </p>
                </section>

                {/* 17 */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
                        17. Law and Jurisdiction
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>These Terms are governed by the laws of England &amp; Wales.</li>
                        <li>Consumers benefit from mandatory protections in their country of residence.</li>
                        <li>Business disputes fall under the exclusive jurisdiction of the courts of England &amp; Wales.</li>
                    </ul>
                </section>

            </div>
        </main>
    );
}