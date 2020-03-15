
$(document).ready(function() {

    console.log("test")

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
        $(".questionTitle").text("Commonly used data types do not include:");
        $(".questionContent").hide();
    }
    
    $(".start").click(function() {
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
