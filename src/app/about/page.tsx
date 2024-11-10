import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
      <div>
        <section className="text-gray-600 body-font py-16 sm:py-24">
          <div className="container px-5 mx-auto">
            {/* Dishes Section */}
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              {/* Dish 1 */}
              <div className="p-4 md:w-1/3 sm:w-1/2 w-full flex flex-col text-center items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 inline-flex items-center justify-center rounded-full text-red-800 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5zM2 17l10 5 10-5" />
                  </svg>
                </div>
                <div className="flex-grow text-center">
                  <h2 className="text-lg title-font font-medium mb-3">
                    <span className="text-red-800 font-bold">Specia</span>
                    <span className="text-black font-bold"> Dishes</span>
                  </h2>
                  <p className="leading-relaxed text-base opacity-90">
                  Treat yourself to our curated selection of exquisite dishes that will have you coming back for more. Each bite is a little taste of paradise!
                  </p>
                </div>
              </div>
  
              {/* Dish 2 */}
              <div className="p-4 md:w-1/3 sm:w-1/2 w-full flex flex-col text-center items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 inline-flex items-center justify-center rounded-full text-red-800 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 13h18M12 3v18" />
                  </svg>
                </div>
                <div className="flex-grow text-center">
                  <h2 className="text-lg title-font font-medium mb-3">
                    <span className="text-red-800 font-bold">Fresh</span>
                    <span className="text-black font-bold"> Ingredients</span>
                  </h2>
                  <p className="leading-relaxed text-base opacity-90">
                  We prioritize using only the freshest, locally grown ingredients in each dish to guarantee exceptional flavor and top-notch quality.
                  </p>
                </div>
              </div>
  
              {/* Dish 3 */}
              <div className="p-4 md:w-1/3 sm:w-1/2 w-full flex flex-col text-center items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 inline-flex items-center justify-center rounded-full text-red-800 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                    viewBox="0 0 24 24"
                  >
                    <circle cx={12} cy={12} r={10} />
                  </svg>
                </div>
                <div className="flex-grow text-center">
                  <h2 className="text-lg title-font font-medium mb-3">
                    <span className="text-red-800 font-bold">Delicious</span>
                    <span className="text-black font-bold"> Flavors</span>
                  </h2>
                  <p className="leading-relaxed text-base opacity-90">
                  From bold and spicy to sweet and savory, our dishes are crafted to delight and satisfy every taste preference..
                  </p>
                </div>
              </div>
            </div>
  
            {/* Link to the Shop page */}
            <div className="text-center mt-12 sm:mt-16">
              <Link href="/shop">
                <button className="flex mx-auto text-white bg-red-800 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">
                  Our Menu Card
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default About;