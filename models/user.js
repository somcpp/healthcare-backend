import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  address: String,
  phone: String,
  email: String,
  bloodType: String,
  allergies: String,
  chronicConditions: String
});

export default mongoose.model('User', userSchema);
