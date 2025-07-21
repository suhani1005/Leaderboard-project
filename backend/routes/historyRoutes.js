const express = require('express');
const router = express.Router();
const ClaimHistory = require('../models/ClaimHistory');

// Get history for specific user
router.get('/:userId', async (req, res) => {
    try {
        const history = await ClaimHistory.find({ userId: req.params.userId }).sort({ claimedAt: -1 });
        res.json(history);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;