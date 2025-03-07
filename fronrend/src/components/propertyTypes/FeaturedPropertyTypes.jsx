import React from "react";

function FeaturedPropertyTypes() {
  return (
    <section className="py-12 bg-gray-100 text-center h-[500px]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800">
          Featured Property Types
        </h2>
        <p className="text-gray-500 mt-2">Find All Type of Property.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-red-100">
              <span className="text-3xl text-red-500">🏡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mt-4">
              Family House
            </h3>
            <p className="text-gray-500">122 Property</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-100">
              <span className="text-3xl text-green-500">🏠</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mt-4">
              House & Villa
            </h3>
            <p className="text-gray-500">155 Property</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-yellow-100">
              <span className="text-3xl text-yellow-500">🏢</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mt-4">
              Apartment
            </h3>
            <p className="text-gray-500">300 Property</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-100">
              <span className="text-3xl text-purple-500">🏬</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mt-4">
              Office & Studio
            </h3>
            <p className="text-gray-500">80 Property</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100">
              <span className="text-3xl text-blue-500">🏛️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mt-4">
              Villa & Condo
            </h3>
            <p className="text-gray-500">80 Property</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedPropertyTypes;
