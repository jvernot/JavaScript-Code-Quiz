
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

    var secondsLeft = 75;

    function startTimer() {
        setInterval(function() {
            secondsLeft--;
            console.log("tick")
            if (secondsLeft > 0) {
                $(".timer").text("Timer: " + secondsLeft);
            }
        }, 1000);
    }

    function startQuestions() {
        $(".question").text("Commonly used data types do not include:");
        $(".questionContent").empty();
        
        var answers1 = ["1. strings", "2. booleans", "3. alerts", "4. numbers"];
        console.log(answers);

        var i; for (i = 0; i < answers1.length; i++) {
            var answerBtn = $("<button>");
            answerBtn.text(answers[i]);
            $(".questionContent").append(answerBtn);
        }


    }
    
    $(".start").click(function() {
        console.log("click");
        startTimer();
        startQuestions();
    })








});

// create another event inside of that "event listener" for the start button.
// brings up question when clicked 
// if correct button is pressed move to next questions
// --if incorrect button is pressed move to next questions + take away 10 seconds
// when the end of the questions are reached, create stop timer function
// when stop timer function is run the current secondsLeft should be added ot the "high scores div" and saved in local storage
// figure out how to have the high scores order from highest to lowest 
