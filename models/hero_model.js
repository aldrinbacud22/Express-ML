const mongoose = require('mongoose')

const heroSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },

    name: {
        type: String,
        require: true,
        min: 5
    },

    position: {
        type: String,
        require: true,
        min: 5
    }
})

module.exports = mongoose.model('Hero', heroSchema);