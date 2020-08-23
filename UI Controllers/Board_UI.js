
function BoardUI(numCells) {
	// inheritance
	Listener.apply(this, arguments);
	
	// save this
	this.save = this;
	
	// ui object
	this.board = document.getElementById("board");
	
	// dimensions
	this.maxDim = 800;
	this.minDim = 400;
	this.currentDim = 0;
	this.rtw = 0.7; // ratio to window
	
	// cells
	this.numCells = numCells;
	
	this.boardResize = function() {
		var x = window.innerWidth;
		var y = window.innerHeight;
		var max = this.maxDim/this.rts;
		var min = this.minDim/this.rts;
		
		if((x < max || y < max) && (x > min && y > min))
			this.currentDim = (x < y? x: y) * this.rts;
		else
			this.currentDim = x < min || y < min? this.minDim: this.maxDim;
			
		board.style.width = this.currentDim + "px";
		board.style.height = this.currentDim + "px";
		document.getElementById("devOut").innerHTML = this.currentDim + "";
	}
	
	this.cellResize = function() {
		var cellDim = this.currentDim / numCells;
	}
	
	this.generateCells = function() {
		
	}
}

BoardUI.prototype = Object.create(Listener.prototype);

BoardUI.prototype.constructor = BoardUI;

BoardUI.prototype.update = function(message, data) {
	switch(String(message)) {
		case "resize":
			boardResize();
			cellResize();
			break;
	}
}

$(function() {
	function TTTBoardUI() {
		this.observer = new Observer();
		this.board = new Board();
		this.ui = document.getElementById("board");
		
		this.generateBoard = function() {
			// add event handlers to cells
			
			// 
		}
	}

	function ChessBoardUI() {
		this.generateBoard = function() {
			
		}
	}
});
