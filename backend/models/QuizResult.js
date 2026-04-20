const mongoose = require('mongoose');

const QuizResultSchema = new mongoose.Schema({
    userId:  { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    score:   { type: Number, required: true },
    answers: { type: [Number], required: true },
    takenAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('QuizResult', QuizResultSchema);
