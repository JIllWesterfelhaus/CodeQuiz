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
  var game = {
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
},
run: function() {
    counter = setInterval(countdown, 1000)
  },
  stop: function() {
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
 questionForm:function(data) {
    var card = $("#questions")
    for (var i = 0; i < questions.length; i++) {
      card.html("<h2>" + questions[i].question + "</h2>")
    }
    for (var i = 0; i < questions.answers.length; i++) {
      card.append("<button class = 'answer-button' id = 'button' data-name='" + questions.answers[i] + "'>" + questions.answers[i] + "</button>")
    }
  },
  //building questions
  buildQuestions: function() {
    var questions2 = questions
    for (var i = 0; 1 < questions2.length; i++) {
      questions2.splice(Math.floor(Math.random() * questions2.length), 1)
    }
    var questionHTML = ""
    for (var i = 0; i < questions2.length; i++) {
      questionHTML = questionHTML + questionForm(questions2[i])
    }
    $("#questions").append(questionHTML)
  },
  isCorrect: function(question) {
    var answers = $("[name = " + question.id + "]")
    var correct = answers.eq(question.correctAnswer)
    var isChecked = correct.is(":checked")
    return isChecked;
  },

  //building function to check for correct answers
  checkAnswers: function() {
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
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
    $("#results").html("Correct" + correct + "Incorrect" + incorrect + "Unanswered" + unanswered)
  },
  checkAnswered: function(question) {
    var anyAnswered = false
    var answers = $("[name = " + question.id + "]")
    for (var i = 0; i < answers.length; i++) {
      if (answers[i].checked) {
        anyAnswered = true
        timeRemaining - 5
      }
    }
    return anyAnswered;
  }
}
  $("#finish").on("click", function () {
    checkAnswers()
    stop()
    alert("Game Over!")
  })
})
