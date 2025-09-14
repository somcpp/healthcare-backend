import Announcement from '../models/Announcement.js';

export const getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find();
    res.json(announcements);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const createAnnouncement = async (req, res) => {
  try {
    const announcement = new Announcement(req.body);
    const savedAnnouncement = await announcement.save();
    res.status(201).json(savedAnnouncement);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
