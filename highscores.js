var restartBtn = document.getElementById("restartBtn");

var clearBtn = document.getElementById("clearBtn");

var highScores = JSON.parse(localStorage.getItem("highScores" || "[]"))

highScores.sort(function (a,b){
    return b.score - a.score
})

clearBtn.addEventListener("click", function() {
    localStorage.clear();
})

restartBtn.addEventListener("click", function() {
    window.location.href = "index.html"
})