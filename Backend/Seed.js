const mongoose = require('mongoose');
const Question = require('./Question');

mongoose.connect('mongodb://localhost:27017/quiz', { useNewUrlParser: true, useUnifiedTopology: true });

const questions = [
  {
    id: 1,
    question: "What is the time complexity of binary search?",
    answers: [
      { text: "O(n)", correct: false },
      { text: "O(log n)", correct: true },
      { text: "O(n^2)", correct: false },
      { text: "O(1)", correct: false },
    ],
  },
  {
    id: 2,
    question: "Which data structure uses LIFO order?",
    answers: [
      { text: "Queue", correct: false },
      { text: "Stack", correct: true },
      { text: "Array", correct: false },
      { text: "Linked List", correct: false },
    ],
  },
  {
    id: 3,
    question: "What is the primary purpose of a DNS server?",
    answers: [
      { text: "To store website data", correct: false },
      { text: "To translate domain names to IP addresses", correct: true },
      { text: "To manage email services", correct: false },
      { text: "To host websites", correct: false },
    ],
  },
  {
    id: 4,
    question: "Which sorting algorithm is the fastest on average?",
    answers: [
      { text: "Bubble Sort", correct: false },
      { text: "Quick Sort", correct: true },
      { text: "Selection Sort", correct: false },
      { text: "Insertion Sort", correct: false },
    ],
  },
  {
    id: 5,
    question: "What does SQL stand for?",
    answers: [
      { text: "Structured Query Language", correct: true },
      { text: "Simple Query Language", correct: false },
      { text: "Structured Question Language", correct: false },
      { text: "Simple Question Language", correct: false },
    ],
  },
  {
    id: 6,
    question: "Which protocol is used to send emails?",
    answers: [
      { text: "HTTP", correct: false },
      { text: "SMTP", correct: true },
      { text: "FTP", correct: false },
      { text: "IMAP", correct: false },
    ],
  },
  {
    id: 7,
    question: "What is the main advantage of using a linked list over an array?",
    answers: [
      { text: "Faster access time", correct: false },
      { text: "Dynamic size", correct: true },
      { text: "Less memory usage", correct: false },
      { text: "Easier to sort", correct: false },
    ],
  },
  {
    id: 8,
    question: "Which of the following is not a NoSQL database?",
    answers: [
      { text: "MongoDB", correct: false },
      { text: "Cassandra", correct: false },
      { text: "MySQL", correct: true },
      { text: "Redis", correct: false },
    ],
  },
  {
    id: 9,
    question: "What is the purpose of a foreign key in a database?",
    answers: [
      { text: "To uniquely identify a record", correct: false },
      { text: "To enforce referential integrity", correct: true },
      { text: "To speed up queries", correct: false },
      { text: "To store large objects", correct: false },
    ],
  },
  {
    id: 10,
    question: "Which of the following is a compiled language?",
    answers: [
      { text: "Python", correct: false },
      { text: "JavaScript", correct: false },
      { text: "Java", correct: true },
      { text: "PHP", correct: false },
    ],
  },
  {
    id: 11,
    question: "What is the output of the following code: console.log(typeof null);",
    answers: [
      { text: "'null'", correct: false },
      { text: "'undefined'", correct: false },
      { text: "'object'", correct: true },
      { text: "'number'", correct: false },
    ],
  },
  {
    id: 12,
    question: "Which of the following is a RESTful HTTP method?",
    answers: [
      { text: "GET", correct: true },
      { text: "SEND", correct: false },
      { text: "RECEIVE", correct: false },
      { text: "POST", correct: true },
    ],
  },
  {
    id: 13,
    question: "What is the main purpose of the OSI model?",
    answers: [
      { text: "To define network protocols", correct: false },
      { text: "To standardize network communication", correct: true },
      { text: "To provide internet access", correct: false },
      { text: "To manage network hardware", correct: false },
    ],
  },
  {
    id: 14,
    question: "Which of the following is a version control system?",
    answers: [
      { text: "Git", correct: true },
      { text: "Docker", correct: false },
      { text: "Kubernetes", correct: false },
      { text: "Jenkins", correct: false },
    ],
  },
  {
    id: 15,
    question: "What is the purpose of a load balancer?",
    answers: [
      { text: "To store data", correct: false },
      { text: "To distribute network traffic", correct: true },
      { text: "To secure the network", correct: false },
      { text: "To monitor network performance", correct: false },
    ],
  },
];

Question.insertMany(questions)
  .then(() => {
    console.log('Questions inserted successfully');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error inserting questions:', error);
  });