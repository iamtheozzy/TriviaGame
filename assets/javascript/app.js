$(document).ready(function() {


// setting variables for the game

var timer;
var intervalId;
var wrongAnswer = 0;
var unanswered = 0;
var score = 0;

// Variable to hold the index of current question and answer.
var questionIndex = 0;
var answerIndex = 0;

// Array of questions and answers
var questionsArray = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5];
var answersArray = [answers.a1, answers.a2, answers.a3, answers.a4, answers.a5];
var gameBegin;

// Question array for the game
var questions = {
  q1: ["What is Michael Scott's middle name?"],
  q2: ["What substance does Jim put office supplies owned by Dwight and Andy into?"],
  q3: ["Dwight owns and runs a farm in his spare time. What does this farm primarily produce?"],
  q4: ['Which of the following characters was not in the first season of "The Office"?'],
  q5: ["What is the amount of rules that male Shrutes had to learn?"]
};

// answer option array for the game
var answers = {
  a1: ["Oscar", "Steven", "Gary", "Danger"],
  a2: ["Jello", "Corn", "Flour", "Water"],
  a3: ["Apples", "Sprouts", "Beets", "Potatoes"],
  a4: ["Creed", "Oscar", "Kevin", "Erin"],
  a5: ["30", "40", "25", "50"]
};

// Correct answer array
var correctAnswer = ["Gary", "Jello", "Beets", "Erin", "40"];

// array to hold images for correct answers
var correctImage = []






// Final closing brackets of our javascript.
});
