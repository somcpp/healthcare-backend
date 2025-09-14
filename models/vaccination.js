import mongoose from 'mongoose';

const vaccinationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  vaccine: { type: String, required: true },
  dueDate: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'done'], default: 'pending' },
  description: String
});


export default mongoose.model('Vaccination', vaccinationSchema);
