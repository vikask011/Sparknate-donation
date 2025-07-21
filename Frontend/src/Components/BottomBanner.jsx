import React from "react";

const BottomBanner = () => {
  return (
    <section className="bg-gray-100 py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-16 text-gray-800">Why Trust Us?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Point 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-emerald-600 mb-4">Verified Causes</h3>
            <p className="text-lg text-gray-700">Every campaign is manually reviewed and approved by us to ensure authenticity.</p>
          </div>

          {/* Point 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-emerald-600 mb-4">100% Transparency</h3>
            <p className="text-lg text-gray-700">All donations go directly to the cause. No hidden fees, ever.</p>
          </div>

          {/* Point 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-emerald-600 mb-4">Secure Payments</h3>
            <p className="text-lg text-gray-700">All transactions are protected with the highest security standards.</p>
          </div>

          {/* Point 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-emerald-600 mb-4">Real Impact</h3>
            <p className="text-lg text-gray-700">We share updates on how your donations make a difference in real lives.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomBanner;
