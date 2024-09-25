"use client"
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-pink-700 to-pink-500 w-full z-50">
      <footer className="text-white body-font">
        <div className="container px-5 py-8 mx-auto flex items-center flex-col sm:flex-row">
          {/* Logo and Title */}
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <Image
              src="/assets/picture/flower-removebg-preview.png"  // Use relative path from the public directory
              alt="Please wait"
              width={50}
              height={50}
              className="w-[50px] rounded-full shadow-lg"
            />

            <span className="ml-3 text-xl font-bold cursive-font">PERFUME PALACE</span>
          </a>

          {/* Copyright Text */}
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-white sm:py-2 sm:mt-0 mt-4">
            © 2024 SAMAN SIDDIQUI
          </p>

          {/* Social Links */}
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href="https://www.facebook.com/saman.siddiqui.5682"
              className="mr-5 text-white"
            >
              <BsFacebook className="text-2xl hover:text-[#3b5998] transition duration-300 ease-in-out" />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/saman_siddiqui320/"
              className="mr-5 text-white"
            >
              <BsInstagram className="text-2xl hover:text-[#8a3ab9] transition duration-300 ease-in-out" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/saman-siddiqui-0023b3292/"
              className="mr-5 text-white"
            >
              <BsLinkedin className="text-2xl hover:text-[#0e76a8] transition duration-300 ease-in-out" />
            </Link>
            <Link
              target="_blank"
              href="http://www.youtube.com/@academicmentors"
              className="mr-5 text-white"
            >
              <BsYoutube className="text-3xl hover:text-[#ff0000] transition duration-300 ease-in-out" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
