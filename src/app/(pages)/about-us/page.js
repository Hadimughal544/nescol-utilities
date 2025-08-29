import Image from "next/image";

export default function About() {
  return (
    <main className="text-black">
      {/* Hero Section */}
      <div className="relative  w-full h-[450px] md:h-[400px] lg:h-[550px]">
        <Image
          src="/assets/aboutus.jpg"
          alt="about us image"
          fill
          className="object-cover "
        />
        {/* Overlay */}
        <div className="absolute inset-0  bg-opacity-50 z-10" />
        
      </div>

      {/* Content Sections */}
      <div className="px-6 md:px-24 py-12 space-y-16">

        <Section title="Driving Simplicity in a Complex Utility World">
          <p>
             At Nescol Utilities, we believe managing your utilities shouldn’t be complicated.
            That is why we have built a customer-focused company that delivers straightforward
            solutions in energy, broadband, water, payments, and more — all in one place.
            Whether you are a homeowner, small business, or large enterprise, we take the
            confusion out of switching, saving, and scaling.
          </p>

        </Section>
        {/* Who We Are */}
        <Section title="Who We Are">
          <p>
            Nescol Utilities is a UK-based utility consultancy dedicated to helping people and businesses make smarter decisions.
            From competitive energy tariffs to fast broadband and merchant card services, we partner with trusted providers to bring
            you better value — without the usual headaches. Our team is made up of experienced industry professionals who genuinely care
            about your bottom line.
          </p>
        </Section>

        {/* What We Stand For */}
        <Section title="What We Stand For">
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Clarity over Complexity:</strong> No jargon. No hidden fees. Just transparent advice and clear comparisons that save you money.</li>
            <li><strong>Personalised Support:</strong> We don’t believe in one-size-fits-all. Our advisors get to know your needs and tailor every recommendation accordingly.</li>
            <li><strong>Reliability You Can Count On:</strong> We only work with established suppliers who share our commitment to quality, speed, and customer service.</li>
            <li><strong>Innovation for Everyday Life:</strong> From bundled packages to smarter tech integration, we’re always evolving to make your utility experience easier and more efficient.</li>
          </ul>
        </Section>

        {/* Mission */}
        <Section title="Our Mission">
          <p>
            Our mission is simple: <strong>to take the stress out of services.</strong> We do this by offering guidance you can trust,
            deals that work for you, and a support team that always picks up the phone.
          </p>
          <p>
            We envision a future where switching providers, managing bills, and setting up new services are effortless for every household and business.
            At Nescol Utilities, we’re not just saving you money — we’re saving you time, worry, and energy.
          </p>
        </Section>

        {/* Why Our Clients Choose Us */}
        <Section title="Why Our Clients Choose Us">
          <ul className="list-disc list-inside space-y-2">
            <li>Trusted by hundreds of homes and businesses across the UK</li>
            <li>Rapid response time with a dedicated personal advisor</li>
            <li>Exclusive deals through our partner network</li>
            <li>Full-service utility setup for new properties</li>
            <li>Ongoing support — long after the contract is signed</li>
          </ul>
        </Section>

        {/* Let's Work Together */}
        <Section title="Let's work together">
          <p>
            Whether you are moving premises, looking to cut costs, or just need advice, Nescol Utilities is here to make it happen.
            We do not just compare prices — we build partnerships. Let’s simplify your utilities and put you back in control.
          </p>
        </Section>
      </div>
    </main>
  );
}

// Reusable Section component
function Section({ title, children }) {
  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">{title}</h2>
      <div className="text-md md:text-lg leading-relaxed">{children}</div>
    </section>
  );
}
