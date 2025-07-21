// src/Components/StoryDetails.jsx
import React from "react";

const StoryDetails = ({ cause }) => {
  const paymentLink = "https://buy.stripe.com/test_9AQ8zA8uNdCV5pG5kk";

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{cause.title}</h2>

      <img
        src={cause.image}
        alt={cause.title}
        className="w-full rounded-lg mb-6"
      />

      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        {cause.description}
      </p>

      <div className="text-center">
        <a
          href={paymentLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Donate Now
        </a>
      </div>
    </div>
  );
};

export default StoryDetails;
