// Board Controller
function BoardUI(board) {
	// inheritance
	Listener.apply(this, arguments);
	
	// save this
	this.save = this;
	
	// ui object
	this.board = board;
	
	// dimensions
	this.maxDim = 800;
	this.minDim = 400;
	this.currentDim = 0;
	this.rtw = 0.7; // ratio to window
	
	// cells
	this.numCells = 1;
	
	this.boardResize = function() {
		var x = window.innerWidth;
		var y = window.innerHeight;
		var max = this.maxDim/this.rtw;
		var min = this.minDim/this.rtw;
		
		if((x < max || y < max) && (x > min && y > min))
			this.currentDim = (x < y? x: y) * this.rtw;
		else
			this.currentDim = x < min || y < min? this.minDim: this.maxDim;
			
		this.board.style.width = this.currentDim + "px";
		this.board.style.height = this.currentDim + "px";
	}
	
	this.cellResize = function() {
		var cellDim = this.currentDim/this.numCells;
		
		board.childNodes
	}
	
	this.generateCells = function(numCells) {
		this.numCells = numCells;
		this.board.innerHTML = "";
		
		for(var i = 0; i < numCells*numCells; i++) {
			if(i%numCells === 0)
				var row = board.insertRow(-1);
			var cell = row.insertCell(-1);
			cell.innerHTML = document.createElement("button");
		}
	}
}

BoardUI.prototype = Object.create(Listener.prototype);

BoardUI.prototype.constructor = BoardUI;

BoardUI.prototype.updateListener = function(message, data) {
	switch(String(message)) {
		case "resize":
			this.boardResize();
			this.cellResize();
			break;
	}
}

$(function() {
	// Tic-Tac-Toe Controller
	function TTTBoardUI() {
		this.observer = new Observer();
		this.ui = document.getElementById("board");
		this.board = new BoardUI(ui);
		
		
		this.generateBoard = function() {
			// add event handlers to cells
			
			// 
		}
	}

	// Chess Controller
	function ChessBoardUI() {
		this.generateBoard = function() {
			
		}
	}
});
