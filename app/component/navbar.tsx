"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-pink-700 to-pink-500 shadow-md sticky top-0 z-50">
      {/* Reduced padding here */}
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center justify-between">
        <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0 ">
          {/* Reduced width of logo to make it more compact */}
          <Image
              src="/assets/picture/flower-removebg-preview.png"  // Use relative path from the public directory
              alt="Please wait"
              width={50}
              height={50}
              className="w-[50px] rounded-full shadow-lg"
            />

          {/* Reduced font size for logo */}
          <span className="ml-2 text-xl font-semibold tracking-wide text-white hover:bg-gradient-to-r from-pink-400 to-pink-300 rounded-md ">Perfume Palace</span>
        </div>
        
        {/* Reduced space between links */}
        <nav className="hidden md:flex flex-wrap items-center space-x-6">
          <Link href="/" className="text-white hover:bg-pink-300 hover:text-purple-900 px-3 py-1 rounded-md transition-all duration-300 font-medium text-lg">
            Home
          </Link>
          <Link href="/about" className="text-white hover:bg-pink-300 hover:text-purple-900 px-3 py-1 rounded-md transition-all duration-300 font-medium text-lg">
            About
          </Link>
          <Link href="/latest" className="text-white hover:bg-pink-300 hover:text-purple-900 px-3 py-1 rounded-md transition-all duration-300 font-medium text-lg">
            Latest
          </Link>
          <Link href="/contact" className="text-white hover:bg-pink-300 hover:text-purple-900 px-3 py-1 rounded-md transition-all duration-300 font-medium text-lg">
            Contact
          </Link>
        </nav>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="outline-none focus:outline-none">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu with smooth slide-in effect */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 transform -translate-y-10"
        enterTo="opacity-100 transform translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 transform translate-y-0"
        leaveTo="opacity-0 transform -translate-y-10"
      >
        <div className="md:hidden bg-gradient-to-r from-pink-700 to-pink-500 text-white px-4 pt-4 pb-8">
          <Link href="/" className="block py-2 text-white hover:bg-pink-300 rounded-md px-4 font-semibold">
            Home
          </Link>
          <Link href="/about" className="block py-2 text-white hover:bg-pink-300 rounded-md px-4 font-semibold">
            About
          </Link>
          <Link href="/latest" className="block py-2 text-white hover:bg-pink-300  rounded-md px-4 font-semibold">
            Latest
          </Link>
          <Link href="/contact" className="block py-2 text-white hover:bg-pink-300 rounded-md px-4 font-semibold">
            Contact
          </Link>
        </div>
      </Transition>
    </header>
  );
};

export default Navbar;
