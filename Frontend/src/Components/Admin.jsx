import React, { useState } from "react";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "YOUR_UPLOAD_PRESET"); // Replace with your Cloudinary preset

    const res = await fetch("https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data.secure_url; // Cloudinary returns this URL
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage("");

  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("amount", amount);
    if (file) formData.append("image", file); // 👈 this must match multer field name

    const response = await fetch("http://localhost:5000/api/causes", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setMessage("🎉 Cause added successfully!");
      setTitle("");
      setDescription("");
      setAmount("");
      setFile(null);
    } else {
      const errorData = await response.json();
      setMessage(`❌ Failed: ${errorData.message}`);
    }
  } catch (err) {
    setMessage("❌ Error adding cause");
  }

  setLoading(false);
};


  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-xl p-6 mt-10 mb-20">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Add a Fundraising Cause
      </h2>

      {message && (
        <p className="mb-4 text-center font-medium text-sm text-blue-600">
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1 font-medium text-sm text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="e.g., Support Child’s Cancer Treatment"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block mb-1 font-medium text-sm text-gray-700">
            Story / Description
          </label>
          <textarea
            id="description"
            placeholder="Write the story of the person in need..."
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="block mb-1 font-medium text-sm text-gray-700">
            Required Amount (in ₹)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="file-upload" className="block mb-1 font-medium text-sm text-gray-700">
            Upload Image
          </label>
          <input
            type="file"
            id="file-upload"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
          />
          <p className="text-xs text-gray-500 mt-1">
            Supported formats: JPG, PNG, GIF
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"} text-white py-2 px-4 rounded-md font-semibold`}
        >
          {loading ? "Submitting..." : "Submit Cause"}
        </button>
      </form>
    </div>
  );
};

export default Admin;
