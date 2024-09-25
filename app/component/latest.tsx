"use client"
import React from "react";
import Image from "next/image";
import { useEffect } from "react";

const Mid = () => {
  useEffect(() => {
    // Add scroll animation using IntersectionObserver API
    const images = document.querySelectorAll(".image");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      {
        threshold: 0.2, // Adjust to trigger animation earlier/later
      }
    );

    images.forEach((image) => {
      observer.observe(image);
    });
  }, []);

  return (
    <div id="latest">
      <section className="relative text-gray-600 bg-cover bg-center custom-image bg-fixed py-20">
        {/* Background Image with Opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('/path/to/your/background/image.jpg')" }}
        ></div>

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 relative z-10">
          {/* Image 1 */}
          <div className="image transform transition duration-500 ease-in-out opacity-0">
          <Image
              src="/assets/picture/perfume7.webp"  
              alt="Please wait"
              width={400}
              height={400}
              className="w-[400px] rounded-lg shadow-lg"
            />

          </div>

          {/* Image 2 */}
          <div className="image transform transition duration-500 ease-in-out opacity-0">
          <Image
              src="/assets/picture/perfume3.webp"  
              alt="Please wait"
              width={400}
              height={400}
              className="w-[400px] rounded-lg shadow-lg"
            />

          </div>

          {/* Image 3 */}
          <div className="image transform transition duration-500 ease-in-out opacity-0">
          <Image
              src="/assets/picture/perfume6.jpeg"  
              alt="Please wait"
              width={400}
              height={400}
              className="w-[400px] rounded-lg shadow-lg"
            />

          </div>
        </div>
      </section>
    </div>
  );
};

export default Mid;
