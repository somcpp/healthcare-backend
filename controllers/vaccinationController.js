import Vaccination from '../models/vaccination.js';

export const getVaccinations = async (req, res) => {
  try {
    const vaccinations = await Vaccination.find().populate('userId', 'name');  
    // ⚡ Populates userId field and selects only the `name` field from User

    res.json(vaccinations);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const createVaccination = async (req, res) => {
  try {
    const vaccination = new Vaccination(req.body);
    const savedVaccination = await vaccination.save();
    res.status(201).json(savedVaccination);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateVaccination = async (req, res) => {
  try {
    const updatedVaccination = await Vaccination.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedVaccination) return res.status(404).json({ message: 'Vaccination not found' });
    res.json(updatedVaccination);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getVaccinationsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const vaccinations = await Vaccination.find({ userId });

    if (vaccinations.length === 0) {
      return res.status(200).json({ message: 'No vaccinations found for this user' });
    }

    res.json(vaccinations);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteVaccination = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedVaccination = await Vaccination.findByIdAndDelete(id);

    if (!deletedVaccination) {
      return res.status(404).json({ message: 'Vaccination not found' });
    }

    res.json({ message: 'Vaccination deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

