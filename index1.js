var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var leftDice = document.querySelectorAll("img")[0];
var rightDice = document.querySelectorAll("img")[1];

function diceImage1(){
    var diceNum = "images/dice" + randomNumber1 + ".png";
    return String(diceNum);
}

function diceImage2(){
    var diceNum = "images/dice" + randomNumber2 + ".png";
    return String(diceNum);
}

leftDice.setAttribute("src", diceImage1());
rightDice.setAttribute("src", diceImage2());

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = ("Player 1 wins! 🏆")
}  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = ("Player 2 wins! 🏆");
}  else {
    document.querySelector("h1").innerHTML = ("Draw! 🤝");
}