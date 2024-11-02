const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Question = require('./Question');

const app = express();
app.use(cors());

mongoose.connect('mongodb://localhost:27017/quiz', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/questions', async (req, res) => {
  const questions = await Question.find();
  res.json(questions);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});