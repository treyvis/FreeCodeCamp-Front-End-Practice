function SimonGame(){
	//Variables
	var onSwitch = false;
	var colorArray = [];
	var currentStep = 0;
	var secondChance = true;
	var sounds = {};
	var colors = ["Green","Red","Yellow","Blue"];

	//Audio Variables
	for(i in colors) {
		var ref = parseInt(i) + 1;
		sounds[colors[i]] = document.createElement("AUDIO");
		sounds[colors[i]]
			.setAttribute("src",
			"https://s3.amazonaws.com/freecodecamp/simonSound" + ref + ".mp3");
		document.body.appendChild(sounds[colors[i]]);
	}

	//Functions
	this.powerSwitch = function(){
		onSwitch = !onSwitch;
	};

	function strictSwitch(){
		secondChance = !secondChance;
	}

	this.startGame = function(){
		colorArray = [];
		currentStep = 0;
		getNewColor();
		displayColors();
	};

	function getNewColor(){
		colorArray.push(colors[(Math.floor(Math.random() * 4))]);
	}

	this.submitColor = function (color){
		if (color && colorArray[currentStep] && colorArray[currentStep] === color){
			if (colorArray.length === 20){
				console.log("Congratulations, you win!");
				startGame();
			} else if(currentStep === colorArray.length - 1) {
				getNewColor();
				currentStep = 0;
				displayColors();
			} else {
				currentStep++;
			}
		} else {
			if (secondChance === true){
				currentStep = 0;
				secondChance = false;
			} else	{
				startGame();
			}
		}
	};

	function displayColors(){
		var colorIterator = 0;
		var colorsTimer = setInterval(showColor,1000);

		function showColor(){
			if (colorArray.length === colorIterator){
				clearInterval(colorsTimer);
			} else {
				console.log(colorArray[colorIterator]);
				sounds[colorArray[colorIterator]].play();
				colorIterator++;
			}
		}
	}
}



