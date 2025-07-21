import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Donate = () => {
  const [causes, setCauses] = useState([]);
  const [customAmounts, setCustomAmounts] = useState({});
  const [loadingCauseId, setLoadingCauseId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCauses = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/causes');
        setCauses(res.data);
      } catch (error) {
        console.error('Error fetching causes:', error);
      }
    };

    fetchCauses();
  }, []);

  const handleViewStory = (id) => {
    navigate(`/story/${id}`);
  };

  const handleDonate = async (id) => {
    const amountInput = customAmounts[id];

    if (!amountInput || Number(amountInput) < 50) {
      alert('Please enter a valid donation amount of ₹50 or more.');
      return;
    }

    const enteredAmount = Number(amountInput);

    try {
      setLoadingCauseId(id);

      const selectedCause = causes.find((cause) => cause._id === id);

      const res = await axios.post('http://localhost:5000/api/stripe/create-checkout-session', {
        title: selectedCause.title,
        amount: enteredAmount,
      });

      if (res.data.url) {
        window.location.href = res.data.url;
      } else {
        alert('Stripe did not return a valid redirect URL.');
      }
    } catch (error) {
      console.error('Stripe redirect error:', error);
      alert('Unable to redirect to payment.');
    } finally {
      setLoadingCauseId(null);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-10 text-center text-emerald-700">
        Donate to a Cause
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {causes.map((cause) => (
          <div
            key={cause._id}
            className="border rounded-xl p-4 shadow-md bg-white flex flex-col max-w-sm mx-auto"
          >
            {cause.image && (
              <img
                src={cause.image}
                alt={cause.title}
                className="w-full h-52 object-cover rounded-md mb-4 shadow"
              />
            )}

            <h2 className="text-lg font-semibold mb-2">{cause.title}</h2>

            <p className="text-base font-medium text-gray-700 mb-4">
              Target: ₹{cause.amount}
            </p>

            <button
              onClick={() => handleViewStory(cause._id)}
              className="mb-4 bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 self-start"
            >
              View Story
            </button>

            <input
              type="number"
              min="50"
              placeholder="Enter amount (₹50+)"
              className="border px-3 py-2 rounded w-full mb-2"
              value={customAmounts[cause._id] || ''}
              onChange={(e) =>
                setCustomAmounts({ ...customAmounts, [cause._id]: e.target.value })
              }
            />
            <p className="text-sm text-gray-500 mb-4">Minimum donation: ₹50</p>

            <button
              onClick={() => handleDonate(cause._id)}
              disabled={loadingCauseId === cause._id}
              className={`${
                loadingCauseId === cause._id
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-emerald-600 hover:bg-emerald-700'
              } text-white px-4 py-2 rounded`}
            >
              {loadingCauseId === cause._id ? 'Processing...' : 'Donate'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donate;
