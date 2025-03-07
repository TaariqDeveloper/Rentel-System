import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import image1 from "../../images/p-1.png";
import image2 from "../../images/p-2.png";
import image3 from "../../images/p-7.png";
import image4 from "../../images/p-4.png";
import image5 from "../../images/p-5.png";
import image6 from "../../images/p-6.png";
import { Link } from "react-router-dom";

function RecentPropertyListed() {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-gray-800">
          Recent Property Listed
        </h2>
        <p className="text-gray-500 mt-2 text-2xl pt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {/* Property 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={image1}
              alt="Property 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <span className="bg-yellow-500 text-white px-3 py-1 text-xs rounded">
                For Rent
              </span>
              <h3 className="text-lg font-semibold text-gray-700 mt-2">
                Red Carpet Real Estate
              </h3>
              <p className="text-gray-500 flex items-center">
                <FaMapMarkerAlt className="mr-2" /> 210 Zirak Road, Canada
              </p>
            </div>
            <div className="p-4 bg-gray-50 flex justify-between items-center">
              <Link
                to="#"
                className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition"
              >
                $3,700
              </Link>
              <span className="text-gray-500">Apartment</span>
            </div>
          </div>

          {/* Property 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={image2}
              alt="Property 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <span className="bg-green-500 text-white px-3 py-1 text-xs rounded">
                For Sale
              </span>
              <h3 className="text-lg font-semibold text-gray-700 mt-2">
                Fairmount Properties
              </h3>
              <p className="text-gray-500 flex items-center">
                <FaMapMarkerAlt className="mr-2" /> 5698 Zirak Road, NewYork
              </p>
            </div>
            <div className="p-4 bg-gray-50 flex justify-between items-center">
              <Link
                to="#"
                className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition"
              >
                $9,750
              </Link>
              <span className="text-gray-500">Condos</span>
            </div>
          </div>

          {/* Property 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={image3}
              alt="Property 3"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <span className="bg-yellow-500 text-white px-3 py-1 text-xs rounded">
                For Rent
              </span>
              <h3 className="text-lg font-semibold text-gray-700 mt-2">
                The Real Estate Corner
              </h3>
              <p className="text-gray-500 flex items-center">
                <FaMapMarkerAlt className="mr-2" /> 5624 Mooker Market, USA
              </p>
            </div>
            <div className="p-4 bg-gray-50 flex justify-between items-center">
              <Link
                to="#"
                className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition"
              >
                $5,860
              </Link>
              <span className="text-gray-500">Offices</span>
            </div>
          </div>

          {/* Property 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={image4}
              alt="Property 4"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <span className="bg-yellow-500 text-white px-3 py-1 text-xs rounded">
                For Sale
              </span>
              <h3 className="text-lg font-semibold text-gray-700 mt-2">
                Herringbone Realty
              </h3>
              <p className="text-gray-500 flex items-center">
                <FaMapMarkerAlt className="mr-2" /> 5621 Liverpool, London
              </p>
            </div>
            <div className="p-4 bg-gray-50 flex justify-between items-center">
              <Link
                to="#"
                className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition"
              >
                $7,540
              </Link>
              <span className="text-gray-500">Homes & Villas</span>
            </div>
          </div>

          {/* Property 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={image5}
              alt="Property 5"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <span className="bg-yellow-500 text-white px-3 py-1 text-xs rounded">
                For Rent
              </span>
              <h3 className="text-lg font-semibold text-gray-700 mt-2">
                Brick Lane Realty
              </h3>
              <p className="text-gray-500 flex items-center">
                <FaMapMarkerAlt className="mr-2" /> 210 Montreal Road, Canada
              </p>
            </div>
            <div className="p-4 bg-gray-50 flex justify-between items-center">
              <Link
                to="#"
                className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition"
              >
                $4,850
              </Link>
              <span className="text-gray-500">Commercial</span>
            </div>
          </div>

          {/* Property 6 */}

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={image6}
              alt="Property 5"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <span className="bg-yellow-500 text-white px-3 py-1 text-xs rounded">
                For Sale
              </span>
              <h3 className="text-lg font-semibold text-gray-700 mt-2">
                Banyon Tree Realty
              </h3>
              <p className="text-gray-500 flex items-center">
                <FaMapMarkerAlt className="mr-2" /> 210 Zirak Road, Canada
              </p>
            </div>
            <div className="p-4 bg-gray-50 flex justify-between items-center">
              <Link
                to="#"
                className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition"
              >
                $2,742
              </Link>
              <span className="text-gray-500">Apartment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentPropertyListed;
