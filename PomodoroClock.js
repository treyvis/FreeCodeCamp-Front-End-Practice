//Promodoro Clock

//Variables
var timeStart = 1500; //Time in seconds
var currentTimer = 0;
var countDown;

function startTimer(){
	if (timeStart > 0) {
		reset();
		countDown = setInterval(timerCountDown, 1000);
	} 
}

function timerCountDown(){
	if(currentTimer > 0){
		console.log(timeFormat(currentTimer));
		currentTimer--;
	} else {
		console.log(timeFormat(currentTimer));
		console.log("Times up!");
		clearInterval(countDown);
	}
}

function timeFormat(timeInSeconds){
	var minutes = Math.floor(timeInSeconds / 60);
	var seconds = timeInSeconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	return minutes + ":" + seconds;
}

//Increment Promodoro Time

var changeTimeStart = {
	"increment": function(){
		timeStart += 60;
	},
	"decrement": function(){
		if (timeStart != 0){
			timeStart -= 60;
		}
	}
}

//Pause Time

function pause(){
	if (countDown != undefined){
		clearInterval(countDown);
	}
}

//Resume

function resume(){
	if (currentTimer != 0){
		countDown = setInterval(timerCountDown, 1000);
	}
}

//Reset Time

function reset(){
	pause();
	currentTimer = timeStart;
}