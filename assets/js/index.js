var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
function randomRange(max) {
return Math.floor(Math.random()*max);
}
//variables
var win = 0;
var lose = 0;
var guess = 0;
var guessLeft = 9;
var guessList = [];
var randIndex = randomRange(letters.length);
var cpuLetter = letters[randIndex].toLowerCase();


document.onkeyup = function(event){
var userInput = String.fromCharCode(event.keyCode).toLowerCase();
console.log(cpuLetter);
console.log(userInput);
//var reset function
var reset = function() {
	guess = 0;
	guessLeft = 9;
	guessList = [];
	randIndex = randomRange(letters.length);
	cpuLetter = letters[randIndex].toLowerCase();
	document.getElementById("guessListCounter").innerHTML = "Your Guesses so far : ";
	document.getElementById("guessLeftCounter").innerHTML = "Guesses Left: " + guessLeft;

};
//Win 
	if (cpuLetter == userInput){

		win++;
		document.getElementById("winCounter").innerHTML = "Wins: " + win;
		document.getElementById("results").innerHTML = "<h3> YAS!! My psychic powers told me you would win!</h3>";
		reset();
		
	}
	//Game interaction
	else if (guessLeft <= 9 && guessLeft >= 1) {
		document.getElementById("results").innerHTML = " ";
		guessLeft--;
		guessList.push(userInput);
		document.getElementById("guessLeftCounter").innerHTML = "Guesses Left: " + guessLeft;
		document.getElementById("guessListCounter").innerHTML = "Your Guesses so far: " + guessList +" ";
		console.log(lose);
	}
	//Lose
		else if (guessLeft === 0) {
			console.log("lose");
			lose++;
			document.getElementById("loseGameCounter").innerHTML = "Losses: " + lose;
			document.getElementById("results").innerHTML = "<h3> Your psychic powers are seriously lacking.</h3>";
			reset();  
			

		}
};



	/*return console.log("The Game is over!")
	return console.log("Wins: " + win);
	return console.log("Losses: " + lose);*/