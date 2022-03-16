const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            requires: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        profilePic: {
            type: String,
            default: 'defaultPic.jpeg',
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)
