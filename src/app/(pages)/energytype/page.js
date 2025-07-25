"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function EnergyType() {
    const router = useRouter();
   


    return(
        <main>
            <div className="relative h-[650px] w-full ">
                <Image
                    src="/assets/EnergyType.jpg"
                    alt="homepage picture"
                    className=" object-fill z-0"
                    fill
                />

            <div className="absolute inset-0 z-20 py-20 px-10 pb-10 flex    ">
                    <div className="space-y-6">
                        <div className="flex flex-col gap-4 ">
                        <h1 className="text-4xl md:text-5xl text-white font-bold ">
                            Save More, Spend Smarter.
                        </h1>
                        <h2 className=" text-xl md:text-2xl  text-blue-300 font-bold ">
                            Find the best gas and electricity deals tailored for your business.
                        </h2>
                        <p className=" text-white text-md">
                            Nescol Utilities partners with trusted UK energy suppliers to help you cut costs, reduce<br></br> waste, and maximize your savings — all through smart, hassle-free solutions.
                        </p>
                        </div>
                    
                    <div className=" w-full max-w-md  flex gap-6 flex-col items-center justify-center bg-white px-4 py-8 rounded-2xl">
                    <h1 className=" text-2xl font-bold">Ready to save on energy?</h1>
                    <div className=" w-full h-1 bg-gray-300 rounded-full"></div>
                    <p className=" text-xl ">Business or home — start smart with Nescol.</p>
                    <div className=" flex gap-10 ">
                        <button onClick={() => router.push('/Energy')} className=" bg-blue-900 hover:bg-pink-500 p-4  px-8 rounded-xl text-white">
                            Business
                            </button>
                        <button className=" bg-blue-900 hover:bg-pink-500  p-4 px-8 rounded-xl text-white">
                            Home
                            </button>
                    </div>    
                    </div>
                    </div>
                </div>



                
            </div>
        </main>
    );
}