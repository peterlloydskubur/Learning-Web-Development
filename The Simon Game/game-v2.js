var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

//Creating first random color


var randomChosenColour = buttonColours[nextSequence()];


//Creating random pattern
gamePattern.push(randomChosenColour);


// Flashing the selected random color and playing its sound effect
$("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour)



//Detect button press and call functions
$(".btn").on("click", function () {

    var userChosenColor = ($(this).attr("id"));

    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor)
    animatePress(userChosenColor)
     

});


function playSound(name){
    new Audio("sounds/" + name + ".mp3").play()

}


function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){$("#"+currentColour).removeClass("pressed"); }, 100);


}


function nextSequence(){
    return randomNumber = Math.floor(Math.random() * 4)

}