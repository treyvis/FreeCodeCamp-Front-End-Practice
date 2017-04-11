function SimonGame(){
	//Variables
	var onSwitch = false;
	var colorArray = [];
	var currentStep = 0;
	var strict = false;
	var sounds = {};
	var colors = ["Green","Red","Yellow","Blue"];

	//Audio Variables
	for(var i in colors) {
		var ref = parseInt(i) + 1;
		sounds[colors[i]] = document.createElement("AUDIO");
		sounds[colors[i]].src = "https://s3.amazonaws.com/freecodecamp/simonSound" + ref + ".mp3";
		document.body.appendChild(sounds[colors[i]]);
	}

	//Functions
	this.powerSwitch = function(){
		onSwitch = !onSwitch;
		if(onSwitch) {
			$(".stepCount").html("Hello! Press 'Start' to play :)");
			$(".on").html("Off");
		} else {
			$(".stepCount").html("--");
			$(".on").html("On");
			colorArray = [];
			currentStep = 0;
		}
		
	};

	this.strictSwitch = function(){
		strict = !strict;
		if (strict) {
			$(".strict").html("Disable Strict");
		} else {
			$(".strict").html("Enable Strict");
		}
	}

	this.startGame = function(){
		colorArray = [];
		currentStep = 0;
		getNewColor();
		displayColors();
	};

	function getNewColor(){
		colorArray.push(colors[(Math.floor(Math.random() * 4))]);
		$(".stepCount").html(colorArray.length);
	}

	this.submitColor = function (color){
		if (color && colorArray[currentStep] && colorArray[currentStep] === color){
			sounds[color].play();
			if (colorArray.length === 20){
				$(".stepCount").html("Congratulations! You win! Press 'Start' to play again.");
			} else if(currentStep === colorArray.length - 1) {
				getNewColor();
				currentStep = 0;
				displayColors();
			} else {
				currentStep++;
			}
		} else {
			if (strict === false){
				currentStep = 0;
				for(var i in sounds){
					sounds[i].play();
				}
				$(".stepCount").html("Wrong! Try again.");
				displayColors();
				setTimeout(function(){
					$(".stepCount").html(colorArray.length);
				},1000);
			} else	{
				$(".stepCount").html("You Lose! Press 'Start' to play again.");
				for(var i in sounds){
					sounds[i].play();
				}
				colorArray = [];
				currentStep = 0;
			}
		}
	};

	function displayColors(){
		var colorIterator = 0;
		var colorsTimer = setInterval(showColor,1000);

		function showColor(){
			$(".color").css("opacity","0.7");
			if (colorArray.length === colorIterator){
				clearInterval(colorsTimer);
			} else {
				$("#" + colorArray[colorIterator].toLowerCase()).css("opacity","1");
				sounds[colorArray[colorIterator]].play();
				colorIterator++;
			}
		}
	}
}

var game;

$(document).ready(function(){
    game = new SimonGame();
    $(".on").click(function(){
    	game.powerSwitch();
    });
    $(".start").click(function(){
    	game.startGame();
    });
    $(".color").click(function(){
    	game.submitColor($(this).html());
    });
    $(".strict").click(function(){
    	game.strictSwitch();
    });
});



