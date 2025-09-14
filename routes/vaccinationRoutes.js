import express from 'express';
import { getVaccinations, createVaccination, updateVaccination } from '../controllers/vaccinationController.js';

const router = express.Router();

router.get('/', getVaccinations);
router.post('/', createVaccination);
router.put('/:id', updateVaccination);

export default router;
