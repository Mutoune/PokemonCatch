var autoAdvance;
var speed;
var score;
var max = 5000;
var step = 100;
var random;
var picURL;
function renewBUG() {
		var bug = document.getElementById('pokemon');
		random = Math.floor(Math.random() * 500) + 1;
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
	updateInfo();
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

function updateInfo() {
	let httpRequest = new XMLHttpRequest();
	httpRequest.open("POST", "/getInfo");
	httpRequest.setRequestHeader("Content-Type", "application/json");
	httpRequest.send(JSON.stringify({pid: random}));

	httpRequest.onreadystatechange = () => {
		if (httpRequest.readyState === 4) {
			if (httpRequest.status === 200) {
				res = JSON.parse(httpRequest.responseText);
				picURL = "url(../images/" + res[0].id + ".svg)";
				document.getElementById('pimg').style.backgroundImage = picURL;
				document.getElementById('pname').innerText = res[0].name;

				document.getElementById('php').innerText = "HP " + res[0].hp;
				document.getElementById('php').style.backgroundColor = "green";
				document.getElementById('php').style.width = 80 + res[0].hp;

				document.getElementById('pattack').innerText = "ATTACK " + res[0].attack;
				document.getElementById('pattack').style.backgroundColor = "red";
				document.getElementById('pattack').style.width = 80 + res[0].attack;

				document.getElementById('pdefense').innerText = "DEFENSE " + res[0].denfense;
				document.getElementById('pdefense').style.backgroundColor = "orange";
				document.getElementById('pdefense').style.width = 80 + res[0].denfense;

				document.getElementById('pspeed').innerText = "SPEED " + res[0].speed;
				document.getElementById('pspeed').style.backgroundColor = "#81a7d6";
				document.getElementById('pspeed').style.width = 80 + res[0].speed;

			}else{
				console.log("Error getting Data");
			}
		}
	}
}