var autoAdvance;
var speed;
var score;
var max = 5000;
var step = 100;
function renewBUG() {
		var bug = document.getElementById('pokemon');
		random = Math.floor(Math.random() * 5) + 1;
		picURL = "url(../images/" + random + ".svg)";
		randX = Math.floor(Math.random() * 736) + 1;
		randY = Math.floor(Math.random() * 436) + 1;
		bug.style.backgroundImage = picURL;
		bug.style.marginLeft = randX;
		bug.style.marginTop = randY;
}
function goal() {
	score = score + 1;
	document.getElementById('score').value = score;
	speed = speed + step;
	document.getElementById('speed').value = speed;
	renewBUG();
	clearInterval(autoAdvance);
	autoAdvance = setInterval("renewBUG()", max - speed);
}
function resetSpeed() {
	speed = 0;
	document.getElementById('speed').value = speed;
	clearInterval(autoAdvance);
	autoAdvance = setInterval("renewBUG()", max);
}
function resetScore() {
	score = 0;
	document.getElementById('score').value = score;
}
function init() {
	renewBUG();
	autoAdvance = setInterval("renewBUG()", max);
	speed = 0;
	score = 0;
	document.getElementById('score').value = 0;
	document.getElementById('speed').value = 0;
}