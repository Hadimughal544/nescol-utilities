// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import LogoSwiper from "./components/swiper";
import FloatingButton from './components/FloatingButton';
import SustainabilitySection from "./components/SustainabilitySection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import SuccessAlert from "./components/SuccessAlert";
import TrustpilotWidget from "./components/TrustpilotWidget";
import ReviewSection from "./components/ReviewSection";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nescol Utilities",
  description:
    "Helping UK businesses cut costs on Energy, Broadband, Water, and Payment solutions—while also delivering expert Web Development, App Development, SEO, and Graphic Design services to boost your digital presence.",
  keywords: [
    "UK business broker",
    "energy broker UK",
    "business broadband UK",
    "business water supplier UK",
    "business payment solutions UK",
    "UK web development",
    "UK app development",
    "SEO services UK",
    "graphic design UK",
    "digital marketing UK",
  ],
  icons: {
    icon: "/favicon.ico",
  },
    metadataBase: new URL("https://nescolutilities.co.uk"),
  alternates: {
    canonical: "https://nescolutilities.co.uk",
  },

  openGraph: {
    title: "Nescol Utilities",
    description:
      "Say goodbye to inflated bills. We give you affordable rates that help your business save big.",
    url: "https://nescolutilities.co.uk",
    siteName: "Nescol Utilities",
    images: [
      {
        url: "https://nescolutilities.co.uk/_next/image?url=%2Fassets%2Fmainlogo.png&w=384&q=75", // 👈 place your image here
        width: 1200,
        height: 630,
        alt: "Nescol Utilities",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nescol Utilities",
    description:
      "Say goodbye to inflated bills. We give you affordable rates that help your business save big.",
    images: ["hhttps://nescolutilities.co.uk/_next/image?url=%2Fassets%2Fmainlogo.png&w=384&q=75"], // 👈 same image for Twitter
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main className="bg-white ">
          <Header />
          {children}

          <SustainabilitySection />

          <div>
            <ReviewSection />
          </div>

          <section className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto py-16 px-4">
            <div className="flex-[1.5] relative h-[350px]">
              <Image
                src="/assets/business1.jpg"
                alt="Business energy"
                fill
                className="rounded-xl object-cover"
              />
            </div>

            <div className=" flex-1 text-left">
              <h2 className=" text-2xl font-bold mb-2">
                Simplify your business billing and start saving today with Nescol Utilities.
              </h2>

              <p className="mb-2">
                Why stay loyal to one supplier when your business deserves better?
              </p>

              <p className="mb-2">
                At Nescol Utilities, we help you manage energy, broadband, and more smarter, not harder.
              </p>

              <p className="mb-2">
                Business contracts are complex, with tailored rates and no cooling-off period. Sticking with one supplier could mean overpaying.
              </p>
              <p>
                We make it easy to compare, customize, and lock in competitive deals that fit your needs. Whether you are a startup or scaling up, we keep your bills efficient, intelligent, and profitable.
              </p>
            </div>
          </section>

          {/* Supplier Logos */}
          <section className="mt-5 mb-5 bg-gray-100">
            <div className="flex items-center justify-center pt-8 pb-4 px-4 text-center">
              <h1 className="text-xl sm:text-2xl font-semibold">
                We connect you with vetted suppliers for reliable service.
              </h1>
            </div>
            <LogoSwiper />
          </section>
        </main>
        <FloatingButton />
        <Footer />
      </body>
    </html>
  );
}
