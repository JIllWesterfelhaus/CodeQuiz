//building array of questions

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
    questionForm: function () {
      
      card.html("<h2>" + questions[this.currentQuestion].question + "</h2>")
      for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
        card.append("<button class = 'answer-button' id = 'button' data-name='" + questions[this.currentQuestion].answers[i] + "'>" + questions[this.currentQuestion].answers[i] + "</button>")
      }
    },
    nextQuestion: function () {
      this.currentQuestion ++
      this.questionForm.bind(this)()
    },
    
    stop: function () {
      clearInterval(counter)
      if (this.currentQuestion === questions.length - 1) {
        setTimeout(this.results, 3 * 1000) 
      }
      else {
        setTimeout(this.nextQuestion, 3 * 1000)
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
    answeredCorrectly: function () {
      this.correct++
      clearInterval(window.timeRemaining)
      card.html("<h2>Correct</h2>")
      if (this.currentQuestion === questions.length - 1) {
        setTimeout(this.results.bind(this), 3 * 1000) 
      }
      else {
        setTimeout(this.nextQuestion.bind(this), 3 * 1000)
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
      this.currentQuestion = 0;
      this.correct = 0;
      this.incorrect = 0;
      this.timeRemaining = timeRemaining;
      this.questionForm();
    }
  }
  $(document).on("click","#start-over",game.reset.bind(game))
  $(document).on("click",".answer-button",function (e) {
    game.clicked.bind(game,e)()
  })
  $(document).on("click","#start",function (){
    game.questionForm.bind (game)()
  })
  

