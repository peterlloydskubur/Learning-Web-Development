// preparing variables
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var randomChosenColour;
var hasLost = false;


// Waiting on user keypress to start game.
$(document).on("keypress", function () {

    prepareGame();
    nextSequence();

});


// Waiting for user click
$(".btn").on("click", function () {

    // User clicked on this:
    var userChosenColor = ($(this).attr("id"));

    // Assigning User choosen color and visuals/music.
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor)
    animatePress(userChosenColor)


    // Looking if player clicked incorrectly (If player made a mistake)
    for (let index = 0; index < userClickedPattern.length; index++) {
        if (userClickedPattern[index] != gamePattern[index]) {
            youLost();
            break;
        }

    }

    // Player did not made a mistake and Player went true the whole game pattern
    // If statment is true, start new level with 1 second delay.blue
    if (!hasLost && userClickedPattern.length == gamePattern.length) {
        setTimeout(function () { nextSequence() }, 1000);

    }

});


function prepareGame() {

    hasLost = false;
    gamePattern = [];
    $("#level-title").text("Press Any Key to Start");

}

function nextSequence() {

    userClickedPattern = [];

    // Assigning random color to variable
    randomChosenColour = buttonColours[randomNumberGenerator()];

    gamePattern.push(randomChosenColour);

    // Flashing the selected random color and playing its sound effect
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour)

    $("#level-title").text("Level " + gamePattern.length)

}

function youLost() {
    hasLost = true;

    $("#level-title").text("n00b you lost at " + "Level " + gamePattern.length +" Press any key to Start!");

}

function playSound(name) {
    new Audio("sounds/" + name + ".mp3").play()

}


function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () { $("#" + currentColour).removeClass("pressed"); }, 100);


}


function randomNumberGenerator() {

    return randomNumber = Math.floor(Math.random() * 4)

}