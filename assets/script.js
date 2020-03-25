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
  ];
  var card = $("#questions")
  var timeRemaining = 120;
  //creating game object
  var game = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    timeRemaining: timeRemaining,
    currentQuestion: 0,
    //building countdown timer
    countdown: function () {
      this.timeRemaining--;
      $("#timeRemain").text(this.timeRemaining + "Seconds Left");
      if (this.timeRemaining === 0) {
        this.stop()
        alert("Time is up!")
        this.checkAnswers()
      }
    },
    run: function () {
      counter = setInterval(countdown, 1000)
    },
    stop: function () {
      clearInterval(counter)
    },
    //building question form
    // function questionForm(data) {
    //   var questionString = "<form>" + data.question + "<br>"
    //   var possibleAnswers = data.answers;
    //   for (var i = 0; i < possibleAnswers.length; i++) {
    //     var possibleAnswer = possibleAnswers[i];
    //     questionString = questionString + "<input type = 'radio' name = " + data.id + " value = " + i + ">" + possibleAnswer
    //   }
    //   return questionString + "</form><br>"
    // }
    // window.formTemplate = questionForm
    questionForm: function (data) {
      
      card.html("<h2>" + questions[this.currentQuestion].question + "</h2>")
      for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
        card.append("<button class = 'answer-button' id = 'button' data-name='" + questions[this.currentQuestion].answers[i] + "'>" + questions[this.currentQuestion].answers[i] + "</button>")
      }
    },
    //building questions
    //buildQuestions: function () {
     // var questions2 = questions
      //for (var i = 0; 1 < questions2.length; i++) {
        //questions2.splice(Math.floor(Math.random() * questions2.length), 1)
      //}
      //var questionHTML = ""
      //for (var i = 0; i < questions2.length; i++) {
       // questionHTML = questionHTML + questionForm(questions2[i])
      //}
      //$("#questions").append(questionHTML)
    //},
    isCorrect: function (question) {
      var answers = $("[name = " + question.id + "]")
      var correct = answers.eq(question.correctAnswer)
      var isChecked = correct.is(":checked")
      return isChecked;
    },

    //building function to check for correct answers
    checkAnswers: function () {

      for (var i = 0; i < questions.length; i++) {
        if (isCorrect(questions[i])) {
          correct++
        } else {
          if (checkAnswered(questions[i])) {
            incorrect++
          } else {
            unanswered++
          }
        }
      }
      
    },
    results: function () {
      clearInterval (window.timeRemaining)
      $("#timeRemain").text(this.timeRemaining)
      card.append("<h3>Correct Answers" + this.correct + "</h3>")
      card.append("<h3>Incorrect Answers" + this.incorrect + "</h3>")
      card.append("<h3>Unanswered" + (questions.length - (this.incorrect + this.correct)) + "</h3>")
      card.append("<br><button id ='start-over'>Start Over?</button>")
    },
    clicked: function (e) {
      clearInterval(window.timeRemaining)
      if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
        this.answeredCorrectly()
      }
      else {this.answeredIncorrectly()

      }
    },
    answeredIncorrectly: function () {
      this.incorrect++
      window.timeRemaining - 10
      card.html("<h2>Incorrect</h2>")
      if (this.currentQuestion === questions.length - 1) {
        setTimeout(this.results.bind(this), 3 * 1000)
      }
      else {
        setTimeout(this.nextQuestion.bind(this), 3 * 1000)
      }
    },

    reset: function () {

    }
  }
  $("#finish").on("click", function () {
    checkAnswers()
    stop()
    alert("Game Over!")
  })
})
