import Image from "next/image";
import Link from "next/link";
import { FaGreaterThan } from "react-icons/fa6";

export default function PrivacyPolicy() {
    return (
        <main>
            <div className="relative w-full h-[450px] md:h-[350px] lg:h-[500px]">
                {/* Blurred Background Image */}
                <Image
                    src="/assets/privacy-1.png"
                    alt="Hero"
                    fill
                    className="object-cover w-full h-full z-0  brightness-75 "
                    priority
                />

                {/* Optional: Extra Dark Overlay */}
                <div className="absolute inset-0 bg-blue-950/40 z-10" />

                {/* Centered Text Content */}
                <div className="absolute inset-0 z-20 mt-20 flex items-center justify-center text-center space-y-4">
                    <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide drop-shadow-lg">
                        Privacy Policy
                        <div className=" flex text-sm items-center justify-center text-center gap-2 py-3">
                            <Link href="/" className=" text-pink-500 hover:text-white">
                                Home
                            </Link>
                            <p><FaGreaterThan /></p>
                            <p className=" flex gap-3">
                                Privacy Policy
                            </p>
                        </div>
                    </h1>
                </div>
            </div>

            <div className="mx-auto px-20 py-10 space-y-8 text-gray-800">

                {/* Intro */}
                <section>
                    <p className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
                        Nescol Utilities – Protecting Your Privacy, Empowering Your Business
                    </p>
                    <p className="mb-2">
                        Nescol Utilities respects your privacy and is committed to protecting your personal data. This Privacy
                        Policy explains how we collect, use, and safeguard your information when you:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                        <li>Use the Nescol Utilities website, including data you provide when making an enquiry as a business owner.</li>
                        <li>Register for our products and/or services.</li>
                        <li>Interact with Nescol Utilities on social media.</li>
                        <li>Share personal data with us by any other means.</li>
                    </ul>
                    <p>
                        This Policy also outlines your privacy rights and how the law protects you. It should be read alongside any
                        other privacy notices we may provide on specific occasions.
                    </p>
                </section>

                {/* Who We Are */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">Who We Are</h2>
                    <p>
                        Nescol Utilities is a Business Utility Broker working alongside trusted UK energy suppliers. Our mission is
                        to help businesses secure the most competitive utility prices while delivering transparent, client focused
                        service.
                    </p>
                </section>

                {/* Your Personal Data */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">Your Personal Data</h2>
                    <p className="mb-2">We may collect, store, and use information such as:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Name and contact details (business &amp; personal address, email, phone number).</li>
                        <li>Date of birth.</li>
                        <li>Business utility information (energy consumption, meter numbers, supplier details).</li>
                        <li>Website activity and device information (IP address, browser, location).</li>
                        <li>Bank details.</li>
                        <li>Any other personal information you choose to share.</li>
                    </ul>
                </section>

                {/* How and Why */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">How and Why We Use Your Information</h2>
                    <p>
                        Your data may be used to provide the services, products, or information you request, process orders and
                        fulfil contractual obligations, maintain records of our relationship with you, conduct market research and
                        improve our services, keep in touch with updated contact details, seek feedback on our services, notify you
                        of changes or updates, and send communications relevant to your business needs, including promotions and
                        service updates.
                    </p>
                </section>

                {/* How We Collect */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">How We Collect Your Data</h2>
                    <p className="mb-2">We obtain information through:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Direct input via our website or enquiry forms.</li>
                        <li>Website analytics (pages visited, time spent, referral sources).</li>
                        <li>Technical details (device type, IP address, operating system).</li>
                        <li>Third party service providers or subcontractors.</li>
                        <li>Cookies (see &quot;Use of Cookies&quot; below).</li>
                        <li>Social media interactions (depending on your privacy settings).</li>
                    </ul>
                </section>

                {/* Disclosures */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">Disclosures of Your Personal Data</h2>
                    <p className="mb-2">We may share your information with:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                            Trusted third party providers who deliver services on our behalf under strict contractual obligations to
                            protect your data.
                        </li>
                        <li>
                            Product partners who act as joint controllers when fulfilling your enquiries (we advise reviewing their
                            Privacy Policies).
                        </li>
                        <li>Authorities or regulators when required by law (e.g., fraud prevention, court orders).</li>
                        <li>
                            In business restructuring or sale scenarios, ensuring your privacy rights remain protected.
                        </li>
                    </ul>
                    <p className="mt-2">
                        We will never sell your data or allow third parties to use it for direct marketing without your consent.
                    </p>
                </section>

                {/* Data Security */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">Data Security</h2>
                    <p>
                        We take appropriate technical and organisational measures to protect your information. While transmission
                        over the internet can never be 100% secure, we strive to safeguard your data once received. If you are
                        given a password to access certain services, you are responsible for keeping it confidential.
                    </p>
                </section>

                {/* Cookies */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">Use of Cookies</h2>
                    <p>
                        Like many websites, we use cookies to enhance your browsing experience and personalise services. You can
                        disable cookies in your browser settings, though this may affect functionality.
                    </p>
                </section>

                {/* Links */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">Links to Other Websites</h2>
                    <p>
                        Our website may contain links to external sites. This Privacy Policy applies only to Nescol Utilities. We
                        encourage you to review the privacy policies of any third party sites you visit.
                    </p>
                </section>

                {/* Data Retention */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">Data Retention</h2>
                    <p>
                        We retain your information only as long as necessary for operational and legal purposes (e.g., tax, health
                        &amp; safety compliance). Retention periods are reviewed regularly.
                    </p>
                </section>

                {/* Legal Rights */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">Your Legal Rights</h2>
                    <p className="mb-2">
                        We may process your data where it is necessary for legitimate interests, such as:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Sending postal communications.</li>
                        <li>Conducting customer research.</li>
                        <li>Improving services and communications.</li>
                        <li>Understanding website interactions.</li>
                    </ul>
                    <p className="mt-2">
                        We balance these interests against your rights and will not use your data in ways that are excessively
                        intrusive. Sensitive personal data will only be processed with explicit consent or as permitted by law.
                    </p>
                </section>

                {/* Changes */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. Significant changes will be highlighted on our
                        website. Please check back periodically to stay informed.
                    </p>
                </section>

                {/* Review */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">Review of Policy</h2>
                    <p>This Privacy Policy is kept under regular review.</p>
                    <p className="mt-2 text-gray-500 text-sm">Last updated: 2020</p>
                </section>

            </div>
        </main>
    );
}