var num1 = Math.floor(Math.random() * 6 ) + 1; // It will give 1-6
var randomDiceImage = "dice" + num1 + ".png"; // dice1.png to dice6.png
var randomDiceImageSource = "./images/" + randomDiceImage; // ./images/dice1.png to ./images/dice6.png
var image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', randomDiceImageSource);

var num2 = Math.floor(Math.random() * 6 ) + 1;
var randomDiceImage2 = "dice" + num2 + ".png";
var randomDiceImageSource2 = "./images/" + randomDiceImage2;
var image2 = document.querySelectorAll('img')[1];
image2.setAttribute('src', randomDiceImageSource2);

if (num1 > num2) {
    document.querySelector('h1').innerHTML = "Player 1 Wins";
} else if (num2 > num1) {
    document.querySelector('h1').innerHTML = "Player 2 Wins";
} else {
    document.querySelector('h1').innerHTML = "Draw";
}