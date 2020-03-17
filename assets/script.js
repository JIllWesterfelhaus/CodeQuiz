
$(document).ready(function()  {
  var questions = [ 
      {question: "What is 1 + 1?",
      answers:[
        "2",
        "3",
        "4",
        "5"
      ], 
      id: "question-1",
      correctAnswer: 0
},
{question: "What is 2 + 2?",
      answers:[
        "2",
        "3",
        "4",
        "5"
      ], 
      id: "question-2",
      correctAnswer: 2
},
{question: "What is 3 + 3?",
      answers:[
        "3",
        "4",
        "5",
        "6"
      ], 
      id: "question-3",
      correctAnswer: 3
    }
]  
var timeRemaining = 120;
function countdown() {
    timeRemaining--;
    $("#timeRemain").text(timeRemaining + "Seconds Left");
    if (timeRemaining === 0) 
    {
        stop()
        alert("Time is up!") 
        checkAnswers()
    }
}
function run() {
    counter = setInterval(countdown,1000)
}
function stop() {
    clearInterval(counter)
}
    run()
    










    
    
 })
