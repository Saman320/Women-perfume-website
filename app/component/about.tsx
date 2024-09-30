"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div id="About">
      <section className="relative text-gray-600 bg-cover bg-center custom-image bg-fixed">
        {/* Background Image with Opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('/path/to/your/background/image.jpg')" }}
        ></div>

        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative z-10">
          {/* Profile Image */}
          <div className="ring-8 ring-pink-700/50 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center items-center mb-10 rounded-full shadow-lg">
            
            
              <Image
              src="/assets/picture/perfume1.webp"  
              alt="Please wait"
              width={400}
              height={400}
              className="w-[900px] object-cover rounded-full shadow-xl border-4 border-white"
            />
          </div>

          {/* Text Content */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-purple-900 mb-4 shadow-lg font-[cursive]">
              About Us
            </h1>
            <p className="mb-6 leading-relaxed text-xl text-gray-900 ">
              Welcome to Perfume Palace, where every fragrance tells a story. Our passion for fine scents drives us to bring
              you an exquisite selection of perfumes from around the world. At Perfume Palace, we believe that a fragrance is
              more than just a scent—its a reflection of your personality, mood, and style. Whether you are looking for
              something bold, elegant, or refreshing, we offer a curated collection that caters to every preference. Our
              commitment to quality ensures that every bottle is crafted with care, providing long-lasting, memorable
              fragrances that stay with you throughout the day. Explore our luxurious range and find your perfect signature
              scent today!
            </p>

            <div className="flex justify-center">
              <Link href="/contact">
                <button className="relative inline-flex text-white bg-gradient-to-r from-pink-700 to-pink-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-700 rounded-full text-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg font-[cursive]">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
