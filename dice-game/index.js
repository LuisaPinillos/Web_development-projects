var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage = "images/dice" + randomNumber1 + ".png"

var image1 = document.querySelector("img.img1");

image1.setAttribute("src", randomDiceImage);

// Dice two

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"

var image2 = document.querySelector("img.img2");

image2.setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆 Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🏆";
} else {
    document.querySelector("h1").innerHTML = "🙅‍♀️ Draw!";
}
