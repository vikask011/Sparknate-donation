import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import causeRoutes from './routes/causeRoutes.js';
import stripeRoutes from './routes/stripeRoutes.js';

dotenv.config();
const app = express();

// CORS Configuration
const allowedOrigins = [
  'https://sparknate-donation.vercel.app', // backend
  'https://sparknate-donation-qpsd.vercel.app' // frontend
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json());

// Static folder
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  dbName: 'charityDB',
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use('/api/causes', causeRoutes);
app.use('/api/stripe', stripeRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
