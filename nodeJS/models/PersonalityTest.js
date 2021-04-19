const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonalityTestSchema = new Schema({
    type: {
        type: String,
        required: true
    },

    question: {
        type: String,
        value: Number,
        required: true
    },
    
    optionA: {
        type: String,
        value: Number,
        required: true
    },

    optionB: {
        type: String,
        value: Number,
        required: true
    },

    optionC: {
        type: String,
        value: Number,
        required: true
    },

    optionD: {
        type: String,
        value: Number,
        required: true
    },

    dateCreated: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('personalitytest', PersonalityTestSchema);