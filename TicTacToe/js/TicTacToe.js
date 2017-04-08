function TicTacToe(){
	var gameBoard = [[" "," "," "],
					 [" "," "," "],
					 [" "," "," "]];
	var userMarkType = "";
	var computerMarkType = "";

	this.resetGame = function () {
		for (var i = 0; i < 3; i++){
			
			for (var j = 0; j < 3; j++){
				
				gameBoard[i][j] = " ";
				$("#" + i + j).html("");
			}
		}
		userMarkType = "";
		computerMarkType = "";
		console.log("The game has been reset. Select your mark type.");
		setMessage("The game has been reset. Select your mark type.");
		$(".mark-selection").css("display","block");
		$(".board-container").css("display","none");
	};

	this.setUserMarkType = function (mark){
		$(".mark-selection").css("display","none");
		$(".board-container").css("display","block");
		if (mark === "X") {
			userMarkType = "X";
			computerMarkType = "O";
			console.log("You're up!");
			setMessage("You're up!");
		} else if (mark === "O") {
			userMarkType = "O";
			computerMarkType = "X";
			console.log("Alright, computer goes first.");
			computerRound();
		}
	};

	function markBoard(row,column, mark){
		if (gameBoard[row][column] === " "){
			gameBoard[row][column] = mark;
			$("#" + row + column).html(mark);
			return true;
		}
			return false;
	}

	function winCheck(){
		var xWin = "XXX";
		var oWin = "OOO";

		//Checking rows for win
		for (var i = 0; i < 3; i++){
			var row = "";
			for(var j = 0; j < 3; j++){
				row += gameBoard[i][j];
			}
			if (row === xWin){
				return "X";
			} else if ( row === oWin){
				return "O";
			}
		}

		//Checking colmuns for win
		for (var j = 0; j < 3; j++) {
			var column = "";
			for (var i = 0; i < 3; i++){
				column += gameBoard[i][j];
			}
			if (column === xWin){
				return "X";
			} else if (column === oWin){
				return "O";
			}
		}

		//Checking diagnols for win
		var topDiagonal = "";
		var bottomDiagonal = "";
		for (var i = 0; i < 3; i++){
			topDiagonal += gameBoard[i][i];
			bottomDiagonal += gameBoard[2 - i][i];
		}
		if (topDiagonal === xWin || bottomDiagonal === xWin){
			return "X";
		} else if(topDiagonal === oWin || bottomDiagonal === oWin){
			return "O";
		}
	}

	function computerRound(){
		var markPlaced = false;
		while (!markPlaced){
			var i = Math.floor(Math.random() * 3);
			var j = Math.floor(Math.random() * 3);
			markPlaced = markBoard(i,j,computerMarkType);
			if (markPlaced) {
				console.log("Computer marked: " + i + "," + j + ".");
			}
		}
		var winner = winCheck();
		if (winner) {
			endGame(winner);
		} else {
			console.log("Your turn.");
			setMessage("Computer marked board. Your turn.");
		}
	}

	this.userRound = function (row, column){
		if (markBoard(row, column, userMarkType)){
			var winner = winCheck();
			if(winCheck()){
				endGame(winner);
			} else {
				console.log("User marked: " + row + "," + column + ". Computer's turn.");
				computerRound();
			}
		} else {
			console.log("Sorry, that's already been marked. Try again.");
			setMessage("Sorry, that's already been marked. Try again.");
		}
	};

	function endGame(winningMark){
		if (winningMark === userMarkType) {
			console.log("Congratulations! You've won- let's play again.");
			setMessage("Congratulations! You've won- let's play again.");
		} else {
			console.log("Looks like the computer got you. Better luck next time.");
			setMessage("Looks like the computer got you. Better luck next time.");
		}
	}

	function setMessage(message){
		$(".message").html(message);
	}
}
var game;
$(document).ready(function(){
	game = new TicTacToe();
	$(".markers").click(function(){
		game.setUserMarkType($(this).html());
	});
	$(".board").click(function(){
		game.userRound($(this).attr("row"),$(this).attr("column"));
		console.log($(this).attr("row"));
		console.log($(this).attr("column"));
	});
	$(".reset").click(function(){
		game.resetGame();
	});
});
