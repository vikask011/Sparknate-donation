import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StoryPage = () => {
  const { id } = useParams();
  const [cause, setCause] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [amount, setAmount] = useState("");
  const [donating, setDonating] = useState(false);

  useEffect(() => {
    const fetchCause = async () => {
      try {
        const res = await axios.get(`https://sparknate-donation.vercel.app//api/causes/${id}`);
        setCause(res.data);
      } catch (err) {
        setError("Cause not found!");
      } finally {
        setLoading(false);
      }
    };

    fetchCause();
  }, [id]);

  const handleDonate = async () => {
    if (!amount || Number(amount) < 1) {
      alert("Please enter an amount of ₹1 or more.");
      return;
    }

    try {
      setDonating(true);
      const res = await axios.post("http://localhost:5000/api/stripe/create-checkout-session", {
        title: cause.title,
        amount: Number(amount),
      });

      if (res.data.url) {
        window.location.href = res.data.url;
      } else {
        alert("Stripe session failed.");
      }
    } catch (err) {
      console.error(err);
      alert("Payment failed.");
    } finally {
      setDonating(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!cause) return <p>Cause not found!</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "28px", fontWeight: "bold" }}>{cause.title}</h2>

      {cause.image && (
        <img
          src={cause.image}
          alt={cause.title}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            margin: "20px 0",
          }}
        />
      )}

      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>{cause.description}</p>

      <p style={{ fontSize: "18px", marginTop: "10px", color: "grey" }}>
        Target Amount: ₹{cause.amount}
      </p>

      {/* Donation Input */}
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <input
          type="number"
          min="1"
          placeholder="Enter amount (₹50+)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginRight: "10px",
            width: "200px",
          }}
        />

        <button
          onClick={handleDonate}
          disabled={donating}
          style={{
            backgroundColor: donating ? "#aaa" : "#059669",
            color: "#fff",
            padding: "12px 20px",
            fontSize: "16px",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: donating ? "not-allowed" : "pointer",
          }}
        >
          {donating ? "Processing..." : "Donate Now"}
        </button>
      </div>
    </div>
  );
};

export default StoryPage;
