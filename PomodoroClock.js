//Promodoro Clock
function PomodoroClock(){
	//Variables
	var timeStart = 1500; //Time in seconds
	var currentTimer = 0;
	var countDown;

	this.startTimer = function(){
		if (timeStart > 0) {
			this.reset();
			countDown = setInterval(timerCountDown, 1000);
		} 
	};

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

	this.changeTimeStart = {
		"increment": function(){
			timeStart += 60;
		},
		"decrement": function(){
			if (timeStart != 0){
				timeStart -= 60;
			}
		}
	};

	//Pause Time

	this.pause = function(){
		if (countDown != undefined){
			clearInterval(countDown);
		}
	};

	//Resume

	this.resume = function(){
		if (currentTimer != 0){
			countDown = setInterval(timerCountDown, 1000);
		}
	};

	//Reset Time

	this.reset = function(){
		this.pause();
		currentTimer = timeStart;
	};
}