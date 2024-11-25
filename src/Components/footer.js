import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative ">
      <div className="absolute inset-0">
        <img
          src="footerbg.jpg"
          alt="Footer Background"
          className="w-full h-[500px] object-cover opacity-50"
        />
      </div>
      <div className="relative z-10 bg-[#363636B8] backdrop-blur-md px-16 py-24 shadow-2xl">
        <footer className="max-w-screen-xl mx-auto text-white">
          <div className="grid md:grid-cols-4 text-center gap-12">
            <div className="space-y-5">
              <img src="footerLogo.png" alt="Logo" className="h-20" />
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus.
              </p>
            </div>
            <div>
              <h2 className="mb-6 text-xl font-bold">Navigation</h2>
              <ul className="space-y-4 text-gray-300">
                <li>Home</li>
                <li>Pages</li>
                <li>About Us</li>
                <li>Services</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-xl font-bold">Quick Links</h2>
              <ul className="space-y-4 text-gray-300">
                <li>Contact Us</li>
                <li>FAQs</li>
                <li>Booking</li>
                <li>Pages</li>
              </ul>
            </div>
            <div className="">
              <h2 className="mb-6 text-xl font-bold">Services</h2>
              <ul className="space-y-4 text-gray-300">
                <li>Home</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>404</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mt-12">
            <div className="flex items-center justify-center space-x-3">
              <FaMapMarkerAlt className="text-yellow-300 text-2xl" />
              <p className="text-white text-lg font-semibold" >London Eye, UK</p>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <FaPhone className="text-yellow-300 text-2xl" />
              <p className="text-white text-lg font-semibold">088-777-666-85</p>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <HiOutlineMailOpen className="text-yellow-300 text-2xl" />
              <p className="text-white text-lg font-semibold">mail@grance.com</p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <div className="border border-yellow-300 p-2">
                <FaFacebook className="text-yellow-300 text-xl" />
              </div>
              <div className="border border-yellow-300 p-2">
                <FaTwitter className="text-yellow-300 text-xl" />
              </div>
              <div className="border border-yellow-300 p-2">
                <FaYoutube className="text-yellow-300 text-xl" />
              </div>
            </div>
          </div>
          <hr className="my-6 border-yellow-300" />
          <div className="text-center text-gray-300">
            © 2024 Grance Template • All Rights Reserved
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;



