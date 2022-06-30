
//producing random number nad and random image variable
var randomNum1 = Math.floor( Math.random()*6) + 1;
var imageForPlayer1 = "dice"+ randomNum1 + ".png";

var randomNum2 = Math.floor( Math.random()*6) + 1;
var imageForPlayer2 = "dice"+ randomNum2 + ".png";

//changing the attributes and their values to get desired results using DOM
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",imageForPlayer1);

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",imageForPlayer2);

//Now changing heading according to the result
if(randomNum1 > randomNum2){
    document.querySelector("h1").textContent = "Player 1 Wins";
}
if(randomNum1 < randomNum2){
    document.querySelector("h1").textContent = "Player 2 Wins";
}
if(randomNum1 === randomNum2){
    document.querySelector("h1").textContent = "It's a Match!";
}

