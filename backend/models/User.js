const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    totalPoints: {
        type: Number,
        default: 0
    },

    avatarUrl:{
        type:String,
        default:'https://i.imgur.com/placeholder.png'
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;