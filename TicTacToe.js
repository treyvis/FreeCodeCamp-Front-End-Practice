var gameBoard = [[" "," "," "],
				 [" "," "," "],
				 [" "," "," "]];
var userMarkType = "";
var computerMarkType = "";

console.log("Pick 'X' or 'O' to get started.");


function resetGame() {
	for (i = 0; i < 3; i++){
		//i for row
		for (j = 0; j < 3; j++){
			//j for column
			gameBoard[i][j] = " ";
		}
	}
	userMarkType = "";
	computerMarkType = "";
	console.log("The game has been reset. Select your mark type.");
};

function setUserMarkType(mark){
	if (mark === "X") {
		userMarkType = "X";
		computerMarkType = "O";
		console.log("You're up!");
	} else if (mark === "O") {
		userMarkType = "O";
		computerMarkType = "X";
		console.log("Alright, computer goes first.");
		computerRound();
	}
}

function markBoard(row,column, mark){
	if (gameBoard[row][column] === " "){
		gameBoard[row][column] = mark;
		return true;
	}
		return false;
}

function winCheck(){
	var xWin = "XXX";
	var oWin = "OOO";

	//Checking rows for win
	for (i = 0; i < 3; i++){
		var row = "";
		for(j = 0; j < 3; j++){
			row += gameBoard[i][j];
		}
		if (row === xWin){
			return "X";
		} else if ( row === oWin){
			return "O";
		}
	}

	//Checking colmuns for win
	for (j = 0; j < 3; j++) {
		var column = "";
		for (i = 0; i < 3; i++){
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
	for (i = 0; i < 3; i++){
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
	}
}

function userRound(row, column){
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
	}
}

function endGame(winningMark){
	if (winningMark === userMarkType) {
		console.log("Congratulations! You've won- let's play again.");
	} else {
		console.log("Looks like the computer got you. Better luck next time.");
	}
	resetGame();
}

/*
markBoard(1,0,"O");
markBoard(1,1,"O");
markBoard(1,2,"O");

markBoard(0,1,"O");
markBoard(1,1,"O");
markBoard(2,1,"O");

markBoard(0,0,"O");
markBoard(1,1,"O");
markBoard(2,2,"O");

markBoard(2,0,"X");
markBoard(1,1,"X");
markBoard(0,2,"X");

*/