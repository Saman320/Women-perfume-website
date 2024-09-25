"use client"
import React from "react";

const Contact = () => {
  return (
    <div id="Contact" className="relative text-gray-600 bg-cover bg-center custom-image bg-fixed">
      <section className="container mx-auto text-white px-5">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-[cursive] text-pink-800">
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed text-pink-800 font-bold">
            We love to hear from you! Whether you have a question about our fragrances or want to share feedback, feel free to contact us.
          </p>
        </div>

        {/* Contact Form and Info */}
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 mb-2 ">
          
          {/* Contact Form */}
          <form className="w-full md:w-1/2 bg-gradient-to-r from-pink-400 to-pink-200 rounded-lg p-8 shadow-lg border-2 border-pink-600">
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-pink-900 text-lg font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
                placeholder="Your name"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-pink-900 text-lg font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
                placeholder="Your email"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-pink-900 text-lg font-bold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
                placeholder="Your message"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-pink-700 to-pink-500 text-white font-bold py-3 px-6 rounded-full hover:bg-pink-600 transition duration-300 ease-in-out shadow-lg font-[cursive]">
                Send Message
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-8 md:mt-0 md:w-1/2 bg-gradient-to-r from-pink-300 to-pink-100 p-8 rounded-lg shadow-lg border-2 border-pink-600 relative z-10 ">
            <h2 className="text-2xl font-bold mb-6 font-[cursive] text-pink-700">Contact Information</h2>
            <p className="text-lg leading-relaxed mb-4 text-pink-700">
              <strong>Email:</strong> info@perfumepalace.com
            </p>
            <p className="text-lg leading-relaxed mb-4 text-pink-700">
              <strong>Phone:</strong> +123 456 7890
            </p>
            <p className="text-lg leading-relaxed mb-4 text-pink-700">
              <strong>Location:</strong> 123 Fragrance St., Dubai, UAE
            </p>
            <p className="text-lg leading-relaxed text-pink-700 font-semibold">
              We are available Monday to Friday from 9 AM to 6 PM. Feel free to visit our store or reach out via email!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
