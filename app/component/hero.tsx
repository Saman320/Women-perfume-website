"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <div>
            <section className="relative text-gray-600 bg-cover bg-center custom-image bg-fixed">
                {/* Background Image with Opacity */}
                <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: "url('/path/to/your/background/image.jpg')" }}></div>

                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between h-full px-5 py-24 relative z-10">
                    {/* Image on the left */}
                    <div className="lg:w-2/6 md:w-3/6 w-5/6 mb-10">
                    <Image
              src="/assets/picture/perfume4.jpg"  // Use relative path from the public directory
              alt="Please wait"
              width={400}
              height={400}
              className="w-[900px] shadow-lg"
            />

                    </div>

                    {/* Text content on the right */}
                    <div className="text-center lg:text-left lg:w-2/3 w-full ml-10">
                        <h1 className="title-font sm:text-8xl text-4xl mb-4 font-medium text-purple-900 shadow-md cursive-font">
                            Scent Up Your Life
                        </h1>
                        <h3 className="mb-8 leading-relaxed text-2xl font-bold text-purple-900 cursive-font shadow-md">
                            A person can remember you by your perfume. Absolute Attraction; Intimate yourself with Desire.
                        </h3>

                        <div className="flex justify-center lg:justify-start">
                            <Link href="/latest">
                                <button className="relative inline-flex text-white bg-gradient-to-r from-pink-700 to-pink-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-700 rounded-full text-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg cursive-font">
                                    Latest Perfume
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400&display=swap');

                .cursive-font {
                    font-family: 'Dancing Script', cursive;
                }
            `}</style>
        </div>
    );
};

export default Hero;
