
function BoardUI(numCells) {
	// inheritance
	Listener.apply(this, arguments);
	
	// ui object
	this.board = document.getElementById("ttt_board");
	
	// dimensions
	this.maxDim = 800;
	this.minDim = 400;
	this.currentDim = 0;
	this.ratioToScreen = 0.7;
	
	// 
	
	this.boardResize = function() {
		var x = window.innerWidth;
		var y = window.innerHeight;
		var max = this.maxDim/this.ratioToScreen;
		var min = this.minDim/this.ratioToScreen;
		var currentDim;
		
		if((x < max || y < max) && (x > min && y > min))
			currentDim = x < y? x*this.ratioToScreen: y*this.ratioToScreen;
		else
			currentDim = x < min || y < min? this.minDim: this.maxDim;
			
		board.style.width = currentDim + "px";
		board.style.height = currentDim + "px";
		document.getElementById("devOut").innerHTML = currentDim + "";
	}
	
	this.cellResize = function() {
		
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