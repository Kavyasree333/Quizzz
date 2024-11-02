const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  id: Number,
  question: String,
  answers: [
    {
      text: String,
      correct: Boolean,
    },
  ],
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;