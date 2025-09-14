import express from 'express';
import userRoutes from './routes/userRoutes.js';
import vaccinationRoutes from './routes/vaccinationRoutes.js';
import announcementRoutes from './routes/announcementRoutes.js';
import cors from "cors";
const app = express();
app.use(cors());
// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/vaccinations', vaccinationRoutes);
app.use('/api/announcements', announcementRoutes);

// Basic error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

export default app;
