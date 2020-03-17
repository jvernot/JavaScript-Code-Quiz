
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

    var userScoreEl = document.getElementById("userScore");

    // need to set this as -1 so that when we add it starts on the first question in the array [0] 
    questionNumber = -1


    function startTimer() {

        document.getElementById("homePage").classList.add("d-none");
        document.getElementById("questions").classList.remove("d-none");

        var timeLeft = setInterval(function() {
            secondsLeft--;
            console.log("tick")
            timerEl.textContent = "Time: " + secondsLeft;
            
            if (secondsLeft === 0 || questionNumber === questions.length) {
                clearInterval(timeLeft);
                setTimeout(showFinalScore);
            }
        }, 1000);

        displayQuestion();

    }

    function displayQuestion() {
        questionNumber++;

        // index the questions array for the tite based on the questionNumber that we are on and create the question text
        questionTextEl.textContent = questions[questionNumber].title
        answerTextEl.innerHTML = "";

        //index the questions array for the answer based on what question we are on
        answer = questions[questionNumber].answer;

        var choices = questions[questionNumber].choices;

        for (i = 0; i < choices.length; i++) {
            var nextChoice = document.createElement("button");

            nextChoice.textContent = choices[i];
            answerBtn = answerTextEl.appendChild(nextChoice).setAttribute("class", "p-3 btn btn-light");
        }
        console.log(choices);
    }

    function hideCorrect() {
        document.getElementById("correct?").classList.add("d-none");
    }

    function showCorrect() {
        document.getElementById("correct?").classList.remove("d-none");
    }

    function showFinalScore() {
        document.getElementById("questions").classList.add("d-none");
        document.getElementById("scores").classList.remove("d-none");
        userScoreEl.textContent = "Your score is: " + secondsLeft;
    }

    answerTextEl.addEventListener("click", function(event) {
        var rightWrong = document.getElementById("correct?");

        if (answer === event.target.textContent) {
            rightWrong.innerHTML = "Correct!";
            setTimeout(hideCorrect, 1000);
            showCorrect();
        }
        else {
            rightWrong.innerHTML = "Incorrect!";
            setTimeout(hideCorrect, 1000)
            secondsLeft = secondsLeft - 10;
            showCorrect();

        }
        
        displayQuestion();
    
    })
    
    startBtn.addEventListener("click", startTimer);








});
