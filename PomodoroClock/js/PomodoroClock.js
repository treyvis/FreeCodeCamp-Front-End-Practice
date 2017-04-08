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
			updateTimerView();
			currentTimer--;
		} else {
			updateTimerView();
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
			updateStartView();
		},
		"decrement": function(){
			if (timeStart != 0){
				timeStart -= 60;
				updateStartView();
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
		updateTimerView();
	};

	function updateTimerView(){
		if (currentTimer === 0){
			$(".well").html("Time is up!");
		} else {
			$(".well").html(timeFormat(currentTimer));
		}
	}

	function updateStartView(){
		$(".startTime").html(timeFormat(timeStart));
	}
}

var clock;

$( document ).ready(function() {
    clock = new PomodoroClock();
    $(".start").click(function(){
    	clock.startTimer();
    });
    $(".pause").click(function(){
    	clock.pause();
    });
    $(".resume").click(function(){
    	clock.resume();
    });
    $(".reset").click(function(){
    	clock.reset();
    });
    $(".decrement").click(function(){
    	clock.changeTimeStart.decrement();
    });
    $(".increment").click(function(){
    	clock.changeTimeStart.increment();
    });
});