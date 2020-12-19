// Board Controller

class tttCellUI extends React.Component {
	render() {
		return (<button onClick={this.props.onClick} onmouseover={this.props.hover} onmouseout={this.props.nohover}> {this.props.value} </button>);
	}
}

class tttBoardUI extends React.Component {
	createCell(i) {
		return (<Cell value={this.props.boardOut[i]} onClick={() => this.props.onClick(i)} hover={() => this.props.onMouseIn(i)} nohover={() => this.props.onMouseOut(i)}></Cell>);
	}
	
	render() {
		return (
			<div>
				<div>
					{this.createCell(0)}
					{this.createCell(1)}
					{this.createCell(2)}
				</div>
				<div>
					{this.createCell(3)}
					{this.createCell(4)}
					{this.createCell(5)}
				</div>
				<div>
					{this.createCell(6)}
					{this.createCell(7)}
					{this.createCell(8)}
				</div>
			</div>
		);
	}
}

class tttGameUI extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	
	onClick(i) {
		
	}
	
	onMouseIn(i) {
		
	}
	
	onMouseOut(i) {
		
	}
	
	render() {
		
	}
}

function BoardUI(board) {
	// inheritance
	Listener.apply(this, arguments);
	
	// save this
	var save = this;
	
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
