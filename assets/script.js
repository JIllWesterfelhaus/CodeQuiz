//building array of questions
$(document).ready(function () {
  var questions = [
    {
      question: "What is 1 + 1?",
      answers: [
        "2",
        "3",
        "4",
        "5"
      ],
      id: "question-1",
      correctAnswer: 0
    },
    {
      question: "What is 2 + 2?",
      answers: [
        "2",
        "3",
        "4",
        "5"
      ],
      id: "question-2",
      correctAnswer: 2
    },
    {
      question: "What is 3 + 3?",
      answers: [
        "3",
        "4",
        "5",
        "6"
      ],
      id: "question-3",
      correctAnswer: 3
    }
  ]
  //building countdown timer
  var timeRemaining = 120;
  function countdown() {
    timeRemaining--;
    $("#timeRemain").text(timeRemaining + "Seconds Left");
    if (timeRemaining === 0) {
      stop()
      alert("Time is up!")
      checkAnswers()
    }
  }
  function run() {
    counter = setInterval(countdown, 1000)
  }
  function stop() {
    clearInterval(counter)
  }
  run()
//building question form
  function questionForm(data) {
    var questionString = "<form>" + data.question + "<br>"
    var possibleAnswers = data.answers;
    for (var i = 0; i < possibleAnswers.length; i++) {
      var possibleAnswer = possibleAnswers[i];
      questionString = questionString + "<input type = 'radio' name = " + data.id + " value = " + i + ">" + possibleAnswer
    }
    return questionString + "</form><br>" 
  }
  window.formTemplate = questionForm

//building questions
  function buildQuestions() {
    var questions2 = questions
    for (var i = 0; i < questions2.length; i++)  {
      questions2.splice(Math.floor(Math.random()* questions2.length),1)
    }
    var questionHTML = ""
    for (var i = 0; i < questions2.length; i++)  {
      questionHTML = questionHTML + questionForm(questions2[i])
    }
    $("#questions").append(questionHTML)
  }
buildQuestions()

//building function to check for correct answers
function checkAnswers()  {

}


})
