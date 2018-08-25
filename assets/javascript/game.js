//variables containing data for numbers
var computerNumbers = 0;
var j1 = 0;
var j2 = 0;
var j3 = 0;
var j4 = 0; 

var numberOptions = 0;
//random number generator

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//screen that shows random number

function start() {
    computerNumbers = randomNumber(19, 120);
    $("#randomNumber").text("Random Number =" + computerNumbers);
    j1 = randomNumber(1,12);
    j2 = randomNumber(1,12);
    j3 = randomNumber(1,12);
    j4 = randomNumber(1,12);
}



$(".start").click(function () {
    start();
});

//need buttons to generate random number and print number
//new function for Jewel Buttons

$("#ruby1").on("click", function() {
    $("#userScore").text("Your Score= " + j1);
    console.log(j1);
});

$("#sapphire1").on("click", function() {
    $("#userScore").text("Your Score="+j2);
    console.log(j2);
});

$("#emerald1").on("click", function() {
    $("#UserScore").text("Your Score=" +j3);
    console.log(j3);
});

$("#diamond1").on("click", function() {
    $("#UserScore").text("Your Score"+ j4);
    console.log(j4);
});

// onclick buttons that have values for jewels

//when player clicks on button it updates score

//when guess correct logs under win

// when player goes over logs lose

//game restarts when player loses; return