"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaPhoneAlt, FaTruck } from "react-icons/fa";

const Hero = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailSent(true);
  };

  return (
    <section className="flex flex-col items-center bg-white p-6 md:p-10">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        {/* Left Section: Text and Button */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 px-10 md:px-20">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            BEST  & <span className="text-[#a82e2e]">QUALITY FOOD</span>{" "}
            <span className="px-1">FOR YOU</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 mt-4">
          Monal Restaurant Offers Exceptional Food Quality, with Fresh Ingredients and Exquisite Flavors.
          </p>

          {/* Rectangle Order Now Button with Phone Icon */}
          <button className="mt-6 bg-[#a82e2e] text-white py-3 px-8 flex items-center justify-center rounded-lg shadow-lg hover:bg-orange-600 transition duration-300 ease-in-out">
            <FaPhoneAlt className="mr-2" /> {/* Phone Icon */}
            Order Now
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 flex justify-evenly">
          <div className="relative">
            <Image 
              src="/the-monal-restaurant.jpg"
              alt="Resturant Image"
              width={450}
              height={450}
              className="rounded-lg shadow-lg " 
            />
            <div className="absolute top-2 right-2 border-3 border-[#a82e2e] rounded-lg w-full h-full" />
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-10 w-full bg-[#a82e2e] text-white p-6 flex flex-col md:flex-row items-center justify-between">
        {!emailSent ? (
          <>
            <p className="px-6 text-lg md:text-xl font-semibold">
              Join our News Letter and Get{" "}
              <span className="font-bold">40% Off</span> Your First Order
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex mt-4 md:mt-0 w-full md:w-auto"
            >
              <input
                type="email"
                placeholder="Enter your Email..."
                className="p-3 w-full md:w-80 rounded-full text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-black text-white py-3 px-6 rounded-full ml-4 hover:bg-gray-800"
              >
                Send
              </button>
            </form>
          </>
        ) : (
          <p className="text-lg">Thank you! Your Email has been Sent.</p>
        )}
      </div>

      {/* Fast Delivery Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full mt-10">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <Image
            src="/delivery.jpg"
            alt="Delivery Person Image"
            width={380}
            height={280}
            className="rounded-lg shadow-lg border-2 border-[#a82e2e]"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 flex items-center justify-center md:justify-start">
            FAST <span className="text-black ml-2">DELIVERY</span>{" "}
            <FaTruck className="text-[#a82e2e] ml-2" />
          </h2>
          <p className="text-base md:text-lg text-gray-600 mt-4">
          Pakistan's Quickest Food Delivery Service. Our Partner Will Reach Your Door in Just 10 Minutes. Savor the Taste.!
          </p>
        </div>
      </div>

      {/* Product 3 */}
      <div className="flex flex-col items-center mt-10">
        <Image
          src="/f.png"
          alt="All image"
          width={1200}
          height={800}
          className="rounded-lg shadow-lg "
        />
      </div>

      {/* Bestsellers Section */}
      <div className="mt-10 w-full">
        <h2 className="text-4xl font-bold text-center text-[#a82e2e] mb-6">
          Special Foods Our Resturant
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* First Image */}
          <div className="w-full md:w-1/3 p-2 flex justify-center">
            <Image
              src="/s.png"
              alt="Best Food 1"
              width={350}
              height={350}
              className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          {/* Second Image */}
          <div className="w-full md:w-1/3 p-2 flex justify-center">
            <Image
              src="/r.png"
              alt="Best Food 2"
              width={350}
              height={350}
              className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          {/* Third Image */}
          <div className="w-full md:w-1/3 p-2 flex justify-center">
            <Image
              src="/k.png"
              alt="Best Food 3"
              width={350}
              height={350}
              className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;