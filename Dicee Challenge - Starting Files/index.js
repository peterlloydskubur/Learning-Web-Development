// Assigning random numbers
dice1 = Math.floor((Math.random() * 6) + 1);
dice2 = Math.floor((Math.random() * 6) + 1);

// Chaning image Attribute based on random number
document.querySelector(".img1").setAttribute("src","images/dice" + dice1 + ".png")
document.querySelector(".img2").setAttribute("src","images/dice" + dice2 + ".png")

// Changing the text for the outcome/winner
if(dice1 > dice2){
    document.querySelector("h1").innerHTML = "Player ONE wins"
}else if(dice1 == dice2){
    document.querySelector("h1").innerHTML = "DRAW!"
}else {
    document.querySelector("h1").innerHTML = "Player TWO  wins"
}

