"use client"
import Link from 'next/link';
import React from 'react';
import { FaUser, FaShoppingBag } from 'react-icons/fa'; // Import the shopping bag icon
import { useState } from 'react'; // For mobile menu toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-bold">
          <Link href="/">
            <span className="text-[#a82e2e]">Monal </span>
            <span className="text-black">Resturant</span>
          </Link>
        </h1>

        {/* Hamburger icon for mobile view */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#a82e2e] focus:outline-none"
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Main Navigation */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-8 md:gap-10 text-xl`}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:gap-6">
            <li>
              <Link href="/" className="hover:text-[#a82e2e]">
               <b> Home </b>
              </Link>

            </li>
            <li>
              <Link href="/shop" className="hover:text-[#a82e2e]">
                <b>Shop</b>
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#a82e2e]">
                <b>About</b>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#a82e2e]">
              <b>Contact</b>
              </Link>
            </li>
          </ul>

          {/* Store Icon with Badge */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link href="/contact">
              <div className="relative flex items-center justify-center bg-[#a82e2e] text-white rounded-full w-10 h-10">
                <FaShoppingBag size={20} />
                {/* Badge */}
                <span className="absolute top-0 right-0 bg-white text-[#a82e2e] rounded-full px-1 text-xs">
                  1
                </span>
              </div>
            </Link>

            {/* Profile Icon */}
            <Link href="/">
              <div className="flex items-center justify-center bg-[#a82e2e] text-white rounded-full w-10 h-10">
                <FaUser size={20} />
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;