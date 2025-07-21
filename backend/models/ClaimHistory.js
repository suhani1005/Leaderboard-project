const mongoose = require('mongoose');

const claimHistorySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    pointsClaimed: {
        type: Number,
        required: true
    },
    claimedAt: {
        type: Date,
        default: Date.now
    }
});

const ClaimHistory = mongoose.model('ClaimHistory', claimHistorySchema);

module.exports = ClaimHistory;