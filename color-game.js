var numSquares = 6;
var colors = setRandomColors(numSquares);
var randomNum = Math.floor(Math.random() * colors.length);
var squares = document.querySelectorAll(".color-square");
var resetButton = document.querySelector("#reset-button");
var easyButton = document.querySelector("#easy-button");
var hardButton = document.querySelector("#hard-button");
var messageDisplay = document.getElementById("game-message");
var winnerColor = setWinnerColor();
var headerColor = document.querySelector("header");

var colorDisplay = document.getElementById("color-display")
colorDisplay.textContent = winnerColor;

resetButton.addEventListener("click", resetGame);
easyButton.addEventListener("click", makeEasy);
hardButton.addEventListener("click", makeHard);

displayRandomColors();

function displayRandomColors() {
	for (var i = 0, j = squares.length; i < j; i++) {
		squares[i].style.backgroundColor = colors[i]; // set square color
		squares[i].addEventListener("click", userClick); // add 'on click' function
	}
}

function setRandomColors(num) {
	var colorArray = [];
	for(var i = 0; i < num ; i++) {
		colorArray.push(randomColors());
	}
	return colorArray; 
}

function randomColors() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"
}

function setWinnerColor() {
	var randomNum = Math.floor(Math.random() * colors.length);
	return colors[randomNum];
}

function userClick() { 
	var clickedColor = this.style.backgroundColor;
	if(winnerColor === clickedColor) {
		messageDisplay.textContent = "You Got It!";
		resetButton.textContent = "Play Again?";
		headerColor.style.backgroundColor = winnerColor;
		easyButton.disabled = true;
		hardButton.disabled = true;
		changeAllColors();
	}
	else {
		this.style.backgroundColor = "#202020";
		messageDisplay.textContent = "Try Again!";
	}
}

function changeAllColors() {
	for (var i = 0, j = squares.length; i < j; i++) {
	squares[i].style.backgroundColor = winnerColor; 
	}
}

function resetGame() {
	if (easyButton.classList.contains("selected")) {
		var numSquares = 3;
	}
	else {
		var numSquares = 6;
	}
	colors = setRandomColors(numSquares);
	winnerColor = setWinnerColor();
	colorDisplay.textContent = winnerColor;
	resetButton.textContent = "New Colors";
	easyButton.disabled = false;
	hardButton.disabled = false;
	messageDisplay.textContent = null;
	displayRandomColors();
	headerColor.style.backgroundColor = "rgb(40, 150, 175)";
}

function makeEasy() {
	var numSquares = 3;
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	colors = setRandomColors(numSquares);
	winnerColor = setWinnerColor();
	colorDisplay.textContent = winnerColor;	
	for (var i = 0, j = squares.length; i < j; i++) {
		if(colors[i] === undefined) {
			squares[i].style.display = "none";
		}
	}
	displayRandomColors();
}

function makeHard() {
	var numSquares = 6;
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	colors = setRandomColors(numSquares);
	winnerColor = setWinnerColor();
	colorDisplay.textContent = winnerColor;
	for (var i = 0, j = squares.length; i < j; i++) {
			squares[i].style.display = "block";
	}
	displayRandomColors();
}