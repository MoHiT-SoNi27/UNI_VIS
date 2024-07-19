import express from 'express';
import axios from 'axios';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {
  const email = req.user.email;
  // Fetch the LeetCode data using the username or email from the user's profile
  // Assuming you store the LeetCode username in the user's profile in the database
  const leetcodeUsername = 'jainmonark1000'; // Replace with logic to fetch LeetCode username

  try {
    const response = await axios.get(`${process.env.LEETCODE_API_URL}/${leetcodeUsername}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch LeetCode data', error: error.message });
  }
});

export default router;
