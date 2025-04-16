import express from 'express';
import mongoose from 'mongoose';  
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB connection error:', err));

// Job Schema
const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  type: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Job = mongoose.model('Job', jobSchema);

// Routes
// Create a new job
app.post('/jobs', async (req, res) => {
    try {
        const newJob = new Job(req.body);
        await newJob.save();
        res.status(201).json(newJob);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all jobs
app.get('/jobs', async (req, res) => {
    try {
        const jobs = await Job.find(); // Fetch all jobs from the database
        res.status(200).json(jobs); // Respond with the list of jobs
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a job by ID
app.get('/jobs/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const job = await Job.findById(id); // Find the job by ID
      if (!job) {
        return res.status(404).json({ message: 'Job not found' });
      }
      res.status(200).json(job); // Return the job
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
