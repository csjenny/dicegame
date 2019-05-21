var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageSource = "image/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomImageSource2 = "image/dice" + randomNumber2 + ".png";

document.getElementsByTagName("img")[1].setAttribute("src", randomImageSource2); 

var randomNumber3 = Math.floor(Math.random()*6 +1);

var randomImageSource3 = "image/dice" + randomNumber3 + ".png";

document.querySelectorAll("img")[2].setAttribute("src", randomImageSource3);

var randomNumber4 = Math.floor(Math.random()*6 + 1);

var randomImageSource4 = "image/dice" + randomNumber4 + ".png";

document.querySelectorAll("img")[3].setAttribute("src", randomImageSource4);

var randomNumber5 = Math.floor(Math.random() * 6 + 1);

var randomImageSource5 = "image/dice" + randomNumber5 + ".png";

document.querySelectorAll("img")[4].setAttribute("src", randomImageSource5);

var randomNumber6 = Math.floor(Math.random()*6 + 1);

var randomImageSource6 = "image/dice" + randomNumber6 + ".png";

document.querySelectorAll('img')[5].setAttribute("src", randomImageSource6);

if(randomNumber1 > randomNumber2) {
	document.querySelector("H1").innerHTML = "🏴‍☠️play 1 win";
} 
else if (randomNumber3 > randomNumber1) {
	document.querySelector("H1").style.color = "yellow";
}
 else if (randomNumber4 > randomNumber3){
	document.querySelector("H1").textContent = "Player 4 win 😆";
}  
else if (randomNumber2 > randomNumber5){
   document.querySelector("h1").innerHTML = "Player 2 win"
} 
else if (randomNumber6 > randomNumber5) {
   document.querySelector("h1").innerHTML = "Player 6 win";
} else {
	document.querySelector("h1").innerHTML = "draw!"
}