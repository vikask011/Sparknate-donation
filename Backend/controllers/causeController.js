import Cause from '../models/causeModel.js';

export const createCause = async (req, res) => {
  try {
    const { title, description, amount } = req.body;

    // 🖼️ Get the image path from the uploaded file
   const image = req.file?.path || req.body.image;;

    const cause = new Cause({ title, description, image, amount });
    const savedCause = await cause.save();

    res.status(201).json(savedCause);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCauses = async (req, res) => {
  try {
    const causes = await Cause.find();
    res.json(causes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCauseById = async (req, res) => {
  try {
    const cause = await Cause.findById(req.params.id);

    if (!cause) {
      return res.status(404).json({ message: 'Cause not found' });
    }

    res.json(cause);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
