
$(document).ready(function() {

    var questions = [
        {
            title: "What is the correct way to write an array in JavaScript?",
            choices: ["var animals = 'dog', 'cat', 'turtle'", "var animals = 1 = (dog), 2 = (cat) 3 = (turtle)", "var animals = (1:dog, 2:cat, 3:turtle)", "var animals = ['dog', 'cat', 'turtle']"],
            answer: "var animals = ['dog', 'cat', 'turtle']"
        },
        {
            title: "A JavaScript function is enclosed within ______.",
            choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
            answer: "curly brackets"
        },
        {
            title: "Which opertor is used to assign a value to a variable?",
            choices: ["-", "*", "=", "/"],
            answer: "="
        },
        {
            title: "Which of the following demonstrates the proper syntax of an IF statement in JavaScript",
            choices: ["if x = 5", "if x = 5 then", "if (x ===5)", "if x =5 then"],
            answer: "if (x ===5)"
        },
        {
            title: "Which is the proper syntax of the start of a for loop",
            choices: ["for i = 1 to 10", "for(i = 10; i > 10)", "for (i <= 10; i++)", "for (i = 0; i < 10; i++)"],
            answer: "for (i = 0; i < 10; i++)"
        },
        {
            title: "Is JavaScript case-sensitive?",
            choices: ["Yes", "No", "Only on the weekends", "Never"],
            answer: "Yes"
        },
    ];

    var startBtn = document.getElementById("startBtn");

    var submitBtn = document.querySelector(".submitBtn");
    
    var secondsLeft = 75;

    var timerEl = document.getElementById("timer");

    var questionTextEl = document.getElementById("questionText");

    var answerTextEl = document.getElementById("answerText");

    function startTimer() {
        var timeLeft = setInterval(function() {
            secondsLeft--;
            console.log("tick")
            timerEl.textContent = "Time: " + secondsLeft;
            
            if (secondsLeft === 0) {

                clearInterval(timeLeft);
                setTimeout(showFinalScore);

            }
        }, 1000);
    }
    
    startBtn.addEventListener("click", startTimer);








});
