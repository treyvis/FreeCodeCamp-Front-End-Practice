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