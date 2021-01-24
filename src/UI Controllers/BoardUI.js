import {Component} from 'react';
import '../CSS/ttt_board.css';

// Board Controller
class TTTCellUI extends Component {
	render() {
		return (<button className="ttt_board_cell" onClick={this.props.onClick} onMouseOver={this.props.hover} onMouseOut={this.props.nohover} style={this.props.style}> {this.props.value} </button>);
	}
}

class TTTBoardUI extends Component {
	createCell(i) {
		return (<TTTCellUI value={(this.props.isHovered[i])? this.props.turn%2===0? 'X':'O' : this.props.board[i]}
						   onClick={() => this.props.onClick(i)}
						   hover={() => this.props.onMouseIn(i)}
						   nohover={() => this.props.onMouseOut(i)}
						   style={(this.props.isHovered[i])? {color: "#0f1011"}: this.props.board[i]==='X'? {color: "#a55463", textShadow: "0px 0px 5px #a55463"}: {color: "#61dafb", textShadow: "0px 0px 5px #ccccff"}}/>);
	}
	
	render() {
		return (
			<div className="ttt_board">
				<div className="ttt_row">
					{this.createCell(0)}
					{this.createCell(1)}
					{this.createCell(2)}
				</div>
				<div className="ttt_row">
					{this.createCell(3)}
					{this.createCell(4)}
					{this.createCell(5)}
				</div>
				<div className="ttt_row">
					{this.createCell(6)}
					{this.createCell(7)}
					{this.createCell(8)}
				</div>
			</div>
		);
	}
}

class TTTGameUI extends Component {
	constructor(props) {
		super(props);
		var _this = this;
		this.state = {
			moves: [{board: Array(9).fill(null)}],
			isHovered: Array(9).fill(false),
			turn: 0
		};
		this.observers = [];
		// this.props.gametype // 0 = local; 1 = vsAI; 2 = vsPlayer
		// this.props.player // player's turn
	}
	
	onClick(i) {
		if(this.props.gametype && this.state.turn%2 !== this.props.player)
			return;
		
		const moves = this.state.moves.slice(0, this.state.turn + 1);
		const active = moves[this.state.turn];
		const board = active.board.slice();
		const isHovered = this.state.isHovered.slice();
		
		// if board space is occupied or game is over -> exit method
		if(board[i] /*|| evaluateBoard(board)*/)
			return;
		
		// update ui
		isHovered[i] = false;
		board[i] = this.state.turn%2 === 0? 'X': 'O';
		this.setState({
		  moves: moves.concat([{board: board}]),
		  isHovered: isHovered,
		  turn: moves.length
		});
		
		this.notifyObservers(board);
	}
	
	onMouseIn(i) {
		if(this.props.gametype && this.state.turn%2 !== this.props.player)
			return;
		
		const active = this.state.moves.slice(0, this.state.turn + 1)[this.state.turn];
		const board = active.board.slice();
		const isHovered = this.state.isHovered.slice();
		
		// if board space is occupied or game is over -> exit method
		if(board[i] /*|| evaluateBoard(board)*/)
			return;
		
		// update ui
		isHovered[i] = true;
		this.setState({isHovered: isHovered});
	}
	
	onMouseOut(i) {
		if(this.props.gametype && this.state.turn%2 !== this.props.player)
			return;
		
		const active = this.state.moves.slice(0, this.state.turn + 1)[this.state.turn];
		const board = active.board.slice();
		const isHovered = this.state.isHovered.slice();
		
		// if board space is occupied or game is over -> exit method
		if(board[i] /*|| evaluateBoard(board)*/)
			return;
		
		// update ui
		isHovered[i] = false;
		this.setState({isHovered: isHovered});
	}
	
	goTo(move) {
		if(move >= 0)
			this.setState({turn: move});
	}
	
	// ReactDOM.render() will return this object, but the value of this will be unknown
	//Observe TTT board model
	update(model) {
		const newTurn = model.getTurn();
		const newBoard = model.toOutputBoard();
		const moves = this.state.moves.slice(0, newTurn + 1);
		
		this.setState({
			moves: moves.concat([{board: newBoard}]),
			turn: newTurn
		});
	}
	
	// Notify model of user input
	addObserver(observer) {
		this.observers[this.observers.length] = observer;
	}
	
	removeObserver(observer) {
		
	}
	
	notifyObservers(activeBoard) {
		/*for(var i = 0; i < this.observers.length; i++)
			this.observers[i].update(new model(activeBoard));*/
	}
	
	render() {
		const moves = this.state.moves;
		const turn = this.state.turn;
		const current = moves[turn];
		const hovered = this.state.isHovered;
		
		let info = "Score";
		/*
		if(evaluateBoard(current.board)) {
			info = 
		}
		else {
			info = 
		}*/
		
		return (
			<div className="ttt_game">
				<div>{info}</div>
				<div id="ttt_game">
					<TTTBoardUI isHovered={hovered} turn={turn} board={current.board} onClick={i => this.onClick(i)} onMouseIn={i => this.onMouseIn(i)} onMouseOut={i => this.onMouseOut(i)}/>
				</div>
				{
					(this.props.gametype === 2)? <div></div>: (
							<div onClick={() => this.goTo(turn - (this.props.gametype + 1))}>
								<div>Undo</div>
								<div className="">undo symbol class</div>
							</div>
						)
				}
			</div>
		);
	}
}

export {TTTGameUI};
