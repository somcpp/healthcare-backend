import express from 'express';
import { getVaccinations, createVaccination, updateVaccination,getVaccinationsByUserId,deleteVaccination } from '../controllers/vaccinationController.js';

const router = express.Router();

router.get('/', getVaccinations);
router.post('/', createVaccination);
router.put('/:id', updateVaccination);
router.get('/user/:userId', getVaccinationsByUserId); 
router.delete('/:id', deleteVaccination);
// router.delete('/:id',)
export default router;
