import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now },
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'low' }
});

export default mongoose.model('Announcement', announcementSchema);
