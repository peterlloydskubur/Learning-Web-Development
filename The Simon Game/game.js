
var gamePattern = [];
var userClickedPattern = [];

var buttonColors = ["red","blue","green","yellow"];


function nextSequence(){
    return Math.floor(Math.random() * 4)

}

// Waiting for user to press "a" to start generating Colors.
$(document).keydown(function (e) {  
    if (e.key === "a") {
        // Pushing a new color to gamePattern sequence
        gamePattern.push(buttonColors[nextSequence()])

        //Changing header text after " a " is pressed
        $("#level-title").text("Game Starting" )

    }else{
        console.log("User has not pressed a")
    }
    
});



// Storing all user clicks in the userClickedPattern
$(".btn").on("click", function (e) {
    userClickedPattern.push(($(this).attr("id")));

});

if (userClickedPattern === gamePattern){
    level = 0;
    gamePattern.push(buttonColors[nextSequence()])
    $("#level-title").text("Level" + level )
    
    
}