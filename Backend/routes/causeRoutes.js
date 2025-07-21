import express from 'express';
import upload from '../middlewares/upload.js'; // Make sure this is correctly set up
import {
  createCause,
  getCauses,
  getCauseById,
} from '../controllers/causeController.js'; // Correct path and function names

const router = express.Router();

// POST: Add a new cause with image upload
router.post('/', upload.single('image'), createCause);

// GET: Fetch all causes
router.get('/', getCauses);

// GET: Fetch a single cause by ID
router.get('/:id', getCauseById);

export default router;
