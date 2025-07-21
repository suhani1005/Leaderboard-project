const express = require('express');
const router = express.Router();
const User = require('../models/User');
const ClaimHistory = require('../models/ClaimHistory');

// Route to claim random points for a user
router.post('/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const randomPoints = Math.floor(Math.random() * 10) + 1;
        user.totalPoints += randomPoints;

        await user.save();

        await ClaimHistory.create({
    userId: user._id,
    pointsClaimed: randomPoints
});

        res.json({
            message: `${randomPoints} points awarded to ${user.name}`,
            totalPoints: user.totalPoints,
            pointsAwarded: randomPoints
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;