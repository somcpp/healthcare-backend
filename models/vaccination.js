import mongoose from 'mongoose';

const vaccinationSchema = new mongoose.Schema({
  vaccine: { type: String, required: true },
  dueDate: Date,
  status: { type: String, enum: ['pending', 'done'], default: 'pending' },
  description: String
});

export default mongoose.model('Vaccination', vaccinationSchema);
