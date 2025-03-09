import React from "react";

import image from "../../images/Background.jpg";
function Hero() {
  return (
    <div>
      {/* Hero Section with Search Bar */}
      <section
        className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center text-white pt-20"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold">Search Your Next Home</h1>
          <p className="text-lg mt-2">
            Find new & featured property located in your local city.
          </p>
        </div>
        <div className="relative z-10 mt-6 bg-white shadow-lg rounded-lg p-4 w-3/4">
          <div className="grid grid-cols-4 gap-4 items-center">
            <div>
              <label className="block text-gray-600 text-sm">City/Street</label>
              <input
                type="text"
                placeholder="Location"
                className="w-full border p-2 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm">
                Property Type
              </label>
              <input
                type="text"
                placeholder="Property Type"
                className="w-full border p-2 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm">Price Range</label>
              <input
                type="text"
                placeholder="Price Range"
                className="w-full border p-2 rounded-md"
              />
            </div>
            <div className="flex items-end">
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg flex items-center">
                <span>Advance Filter</span>
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
