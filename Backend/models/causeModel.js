import mongoose from 'mongoose';

const causeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  amount: { type: Number, required: true },
}, {
  timestamps: true,
});

const Cause = mongoose.model('Cause', causeSchema);

export default Cause;
