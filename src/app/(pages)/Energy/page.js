import Image from "next/image";
import Link from "next/link";
import { FaBolt } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";

export default function Energy() {
    return (
        <main>
            <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] ">
                <Image
                    src="/assets/energy.jpg"
                    alt="services background"
                    fill
                    className="object-cover w-full h-full z-0 brightness-75 "
                />

                <div className="absolute inset-0 bg-blue-950/40 z-10" />

                <div className="absolute inset-0 z-20 py-30 px-10 pb-10 flex items-end">
                    <div className="space-y-6">
                        <h1 className="text-2xl md:text-3xl text-white font-bold">
                            Which energy do you need?
                        </h1>

                        <div className="flex gap-8">
                            <Link href="/services/Electricity/firstform">
                                <Box title="Electricity" icon={<FaBolt />} />
                            </Link>

                            <Link href="/services/gas/firstform">
                                <Box title="Gas" icon={<FaFire />} />
                            </Link>

                            <Link href="/services/electricity&Gas/firstform">
                                <Box
                                    title="Electricity & Gas"
                                    icon={
                                        <div className="flex ">
                                            <FaBolt />
                                            <FaFire />
                                        </div>
                                    }
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

function Box({ title, icon }) {
    return (
        <div className="group flex flex-col items-center justify-center 
                        w-48 h-32 p-4 
                        bg-white hover:bg-gray-100 
                        rounded-2xl shadow-5xl cursor-pointer transition-all">
            <div className="text-lg text-center group-hover:text-pink-500">
                {title}
            </div>
            <div className="text-4xl mt-2 group-hover:scale-110 transition-transform group-hover:text-pink-500">
                {icon}
            </div>
        </div>
    );
}
