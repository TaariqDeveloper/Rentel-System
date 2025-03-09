import React from "react";

function Footer() {
  return (
    <div>
      <div className="bg-green-500 w-full mt-10 ">
        <div className="px-10 pt-10 pb-10 flex justify-between">
          <div>
            <h1 className="text-5xl text-white font-bold pb-3">
              Do You Have Questions ?
            </h1>
            <p className=" text-white text-xl">
              We'll help you to grow your career and growth.
            </p>
          </div>
          <div className="mt-6">
            <button className="bg-white text-green-500 px-10 py-4 rounded-full text-xl">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>

      {/* end footer */}

      <div className=" bg-[#0a1636] px-20  py-20">
        <div className="flex  gap-40">
          <div>
            <h1 className="text-white text-4xl font-bold">
              <i
                class="fa-regular fa-square-caret-up
         text-green-500 mr-2"
              ></i>
              Rent House
            </h1>
            <h1 className="text-white text-3xl mt-4">
              Do You Need Help With Anything?
            </h1>
            <p className="text-gray-500 mt-4">
              {" "}
              Receive updates, hot deals, tutorials, discounts sent straignt in
              your
              <br></br> inbox every month
            </p>
            <input
              className=" w-80 border-none px-6  py-3 rounded-lg mt-6"
              type="text"
              name=""
              id=""
              placeholder="Email Address"
            />
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg">
              Subscribe
            </button>
          </div>

          <div className="flex gap-10 text-gray-500">
            <ul>
              <h1 className="text-white text-2xl font-bold">LAYOUTS</h1>
              <li className="mt-4 text-center">Home Page</li>
              <li className="mt-4 text-center">About Page</li>
              <li className="mt-4 text-center">Service Page</li>
              <li className="mt-4 text-center">Contact Page</li>
              <li className="mt-4 text-center">Single Blog</li>
            </ul>
            <ul>
              <h1 className="text-white text-2xl font-bold">ALL SECTIONS</h1>
              <li className="mt-4 text-center">Headers</li>
              <li className="mt-4 text-center">Features</li>
              <li className="mt-4 text-center">Attractive</li>
              <li className="mt-4 text-center">Testimonials</li>
              <li className="mt-4 text-center">Videos</li>
            </ul>

            <ul>
              <h1 className="text-white text-2xl font-bold">COMPANY</h1>
              <li className="mt-4 text-center">About</li>
              <li className="mt-4 text-center">Blog</li>
              <li className="mt-4 text-center">Pricing</li>
              <li className="mt-4 text-center">Affiliate</li>
              <li className="mt-4 text-center">Login</li>
            </ul>
          </div>
        </div>
        <hr className="w-full  bg-white mt-[10%]" />
        <p className="text-gray-500 mt-8 text-center">
          © 2025 HouseHub. Designed By Sprinaa .
        </p>
      </div>
    </div>
  );
}

export default Footer;
