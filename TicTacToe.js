var gameBoard = [[" "," "," "],
				 [" "," "," "],
				 [" "," "," "]];

function resetBoard() {
	for (i = 0; i < 3; i++){
		//i for row
		for (j = 0; j < 3; j++){
			//j for column
			gameBoard[i][j] = " ";
		}
	}
};

function markBoard(row,column, mark){
	gameBoard[row][column] = mark;
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

	//Checking diagnol for win
}

/*
markBoard(1,0,"O");
markBoard(1,1,"O");
markBoard(1,2,"O");

markBoard(0,1,"O");
markBoard(1,1,"O");
markBoard(2,1,"O");

*/