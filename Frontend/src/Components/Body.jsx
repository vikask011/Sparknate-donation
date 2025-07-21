import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="relative w-full min-h-[85vh] flex flex-col items-center justify-center px-6 bg-gray-100 overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.squarespace-cdn.com/content/v1/54c60a40e4b05e6378d000ae/1552376854867-MYRILHAOSFC8QY9HC8QB/medical-charity-gallery-05.jpg"
        alt="Donation Background"
        className="absolute top-10 left-0 w-full min-h-[90vh] object-cover opacity-40 z-0"
      />

      {/* Content */}
      <div className="relative z-10 text-center mt-[-3rem]">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Support a Cause That Matters 

        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Every contribution, big or small, helps transform lives. Join us in our
          mission to bring hope and change.
        </p>
      </div>

      {/* Donate Button */}
      <div className="relative z-10 mt-10">
        <Link
          to="/donate"
          className="bg-blue-600 hover:bg-emerald-600 text-white text-xl font-semibold py-4 px-10 rounded-full shadow-xl transition duration-300"
        >
          Donate Now →
        </Link>
      </div>
    </div>
  );
};

export default Body;
