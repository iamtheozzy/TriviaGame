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

// Array of questions and answers
var questionsArray = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5];
var answersArray = [answers.a1, answers.a2, answers.a3, answers.a4, answers.a5];
var gameBegin;

// Correct answer array
var correctAnswer = ["Gary", "Jello", "Beets", "Erin", "40"];

// array to hold images for correct answers
var correctImage = ["gary.gif", "jello.gif", "beets.gif", "erin.gif", "40.gif"];


// hides the reset button when page reloads
$('#reset').hide();

// Click binding for game Start button
$("#startButton").click(function(){
  // game start function
  gameBegin = true;
  startGame();
  // hides start Button
  $("#startButton").hide();
  showReset();
});

// Starts the game
function startGame() {
  console.log("THE GAME HAS BEGUN!!!");
  startQuestion();
};

// Start first question
function startQuestion(){
  // starts the Timer
  time();
  // Displays questions for game
  $("#start").html("<h2>" + questionsArray[questionIndex][0] + "</h2>");
  logArray(answersArray[answerIndex]);
};

// Logic for moving to the next questions
function next() {
  //There are 5 questions
  if(questionIndex < 4){
    questionIndex++;
    answerIndex++;
    startQuestion();
    $("#answer1, #answer2, #answer3, #answer0").show();
    $('#images').hide();
  }
  //On the last question
  else if (questionIndex === 4){
    gameBegin = false;
    stop();
    $('#images').hide();
    $("#answer1, #answer2, #answer3, #answer0").hide();
    $('#display').hide();
    $('#start').html("<h2>Your score is: "+ score+"<br>You guessed wrong: "+wrongAnswer+"<br>You didn't guess at all: "+unanswered+'</h2>');
    showReset();
  }
};

// click binding for when user selects an answer
$("#answer1, #answer2, #answer3, #answer0").on("click", function(word){
  // stores value of button pushed
  var word = "";
  word = $(this).text();
  // checks for correct answer
  if(word == correctAnswer[answerIndex]){
    $("#start").html("<h2>You got it!</h2>");
    $("#answer1, #answer2, #answer3, #answer0").hide();
    showImage();
    setTimeout(next,4000);
    stop();
    score++
  }
  // if incorrect answer
  else if (word != correctAnswer[answerIndex]){
    $("#start").html("<h2> NOPE!!!!! The right answer is " + correctAnswer[answerIndex] + "</h2>");
    $("#answer1, #answer2, #answer3, #answer0").hide();
    showImage();
    stop();
    setTimeout(next, 4000);
    wrongAnswer++;
  }
// ends click binding
});

// displays correct image
function showImage() {
  $("#images").show();
  $('#images').html("<img src = 'assets/images/" + correctImage[answerIndex] + "'>");
};

// reset button
$("#reset").on("click",function(){
  // resets game to beginning
  reset();
  // then hides reset button
  $("#reset").hide();
});

// displays the answers
function logArray(list){
  for (var i = 0; i < list.length; i++){
    $("#answer" + i).html(list[i] + "<br>");
  }
};

// Starts the Timer
function time(){
  timer = 30;
  clearInterval(intervalId);
  // Decreases timer by 1 second
  intervalId = setInterval(decrement, 1000);
};

// Resets the game to the start
function reset(){
  questionIndex = 0;
  answerIndex = 0;
  $("#answer1, #answer2, #answer3, #answer0").show();
  $('#display').show();
  time();
  wrongAnswer = 0;
  unanswered = 0;
  score = 0;
  startGame();
};

// displays or removes reset Button
function showReset(){
  if(gameBegin == true){
    $("#reset").hide();
  }
  else if (gameBegin == false){
    $("reset").show();
  }
};

// Decreases the timer by 1 and thens stops the Timer
function decrement(){
  timer--;
  // display remaining time
  $("#display").html("<h2>Time Left: " + timer + "</h2>");

  // Alerting user time is up when counter hits 0
  if(timer === 0){
    $("display").html("<h2>TIME'S UP!</h2>");
    $("$start").html("<h2>You're out of time! The right asnwer is: " + correctAnswer[answerIndex] + "</h2>");
    $("#answer1, #answer2, #answer3, #answer0").hide();
		stop();
		setTimeout(next, 3000);
		unanswered++;
  }
};

// stops the Timer
function stop(){
  clearInterval(intervalId);
};




// Final closing brackets of our javascript.
});
