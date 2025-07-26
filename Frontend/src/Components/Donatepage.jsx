// src/Components/Donatepage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DonatePage = () => {
  const [causes, setCauses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCauses = async () => {
      try {
        const response = await axios.get("https://sparknate-donation.vercel.app/api/causes");
        let fetchedCauses = response.data;

        // If backend has no causes, use dummy data
        if (fetchedCauses.length === 0) {
          fetchedCauses = [
            {
              title: "Sponsor a Child's Education",
              imageUrl: "https://via.placeholder.com/300x150?text=Education+Support",
            },
            {
              title: "Help Build Clean Water Wells",
              imageUrl: "https://via.placeholder.com/300x150?text=Clean+Water",
            },
            {
              title: "Fund Emergency Medical Aid",
              imageUrl: "https://via.placeholder.com/300x150?text=Medical+Aid",
            },
          ];
        }

        setCauses(...fetchedCauses);
        console.log(fetchCauses)
      } catch (error) {
        console.error("Error fetching causes:", error);

        // Fallback to dummy causes on error
        setCauses([
          {
            title: "Sponsor a Child's Education",
            imageUrl: "https://via.placeholder.com/300x150?text=Education+Support",
          },
          {
            title: "Help Build Clean Water Wells",
            imageUrl: "https://via.placeholder.com/300x150?text=Clean+Water",
          },
          {
            title: "Fund Emergency Medical Aid",
            imageUrl: "https://via.placeholder.com/300x150?text=Medical+Aid",
          },
        ]);
      }
    };

    fetchCauses();
   
  }, []);
   

  const buttonStyle = {
    backgroundColor: "transparent",
    color: "#007bff",
    fontSize: "16px",
    padding: "10px 20px",
    border: "2px solid #007bff",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.3s",
    fontWeight: "bold",
    width: "100%",
  };

  const buttonHoverStyle = {
    backgroundColor: "#e6f0ff",
    color: "#0056b3",
    borderColor: "#0056b3",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Donation Causes</h2>
      {causes.length === 0 ? (
        <p>No causes available yet.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {causes.map((cause, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
                width: "300px",
              }}
            >
      <img
        src={cause.image}
        alt={cause.title}
        className="w-full rounded-lg mb-6"
      />


              <h3>{cause.title}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
                <button
                  style={buttonStyle}
                  onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
                  onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
                  onClick={() => navigate(`/story/${index}`)}
                >
                  View Story
                </button>
                <button
                  style={buttonStyle}
                  onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
                  onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
                  onClick={() => navigate(`/donate/${index}`)}
                >
                  Donate
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DonatePage;
