const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const leaderboardRoutes = require('./routes/leaderboardRoutes');
const historyRoutes = require('./routes/historyRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/history', historyRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    
}).then(() => {
    console.log('MongoDB Connected');
}).catch(err => console.log(err));

// Import user routes
const userRoutes = require('./routes/userRoutes');

// Use user routes
app.use('/api/users', userRoutes);

const claimRoutes = require('./routes/claimRoutes');
app.use('/api/claim', claimRoutes);

// Sample Route
app.get('/', (req, res) => {
    res.send('Leaderboard API Running');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});