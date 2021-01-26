import {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faUndo} from '@fortawesome/free-solid-svg-icons';
import '../CSS/ttt_board.css';

// Board Controller
class TTTCellUI extends Component {
	render() {
		return (<button className="ttt_board_cell" onClick={this.props.onClick} onMouseOver={this.props.hover} onMouseOut={this.props.nohover} style={this.props.style}> {this.props.value} </button>);
	}
}

class TTTBoardUI extends Component {
	createCell(i) {
		const newGameMsg = "TICTACTOE";
		let value;
		let style;

		
		if(this.props.isHovered[i]) {
			value = this.props.turn%2===0? 'X':'O';
			style = {color: "#0f1011"};
		}
		else {
			value = this.props.isNewGame? newGameMsg[i]: this.props.board[i];
			console.log(i/3);
			style = this.props.board[i]==='X' || this.props.isNewGame && Math.floor(i/3) == 1 ? {color: "#a55463", textShadow: "0px 0px 5px #a55463"}: {color: "#61dafb", textShadow: "0px 0px 5px #ccccff"}
		}

		return (<TTTCellUI value={value}
						   onClick={() => this.props.onClick(i)}
						   hover={() => this.props.onMouseIn(i)}
						   nohover={() => this.props.onMouseOut(i)}
						   style={style}/>);
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
			newGame: true,
			turn: 0
		};
		library.add(faUndo);
		// this.props.observers // list of observers to be notified of user input on board
		// this.props.gametype // specifies game type (0 = local, 1 = vsAI, 2 = vsPlayer)
		// this.props.player // specifies player's turn (X or O)
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
		  turn: moves.length,
		  newGame: false
		});
		
		/*this.notifyObservers(board);*/
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
	notifyObservers(activeBoard) {
		for(var i = 0; i < this.props.observers.length; i++)
			this.props.observers[i].update(/*new model(activeBoard)*/);
	}

	undoButton(turn) {
		let newTurn = turn - (this.props.gametype + 1);
		if(this.props.gametype !== 2) 
			return (
				<div className="ttt_undo" onClick={() => this.goTo(newTurn)}>
					<div>Undo</div>
					<div className=""><FontAwesomeIcon icon='undo'/></div>
				</div>
			);
	}
	
	render() {
		const moves = this.state.moves;
		const turn = this.state.turn;
		const current = moves[turn];
		const hovered = this.state.isHovered;
		const newGame = this.state.newGame;
		
		let info = 'X Wins!';
		/*
		if(evaluateBoard(current.board) !== null) {
			info += (evaluateBoard(current.board) === 0)? 'X Wins': 'O Wins';
		}*/
		
		return (
			<div className="ttt_game font unselectable">
				<div>{info}</div>
				<div>
					<TTTBoardUI isNewGame={newGame} isHovered={hovered} turn={turn} board={current.board} onClick={i => this.onClick(i)} onMouseIn={i => this.onMouseIn(i)} onMouseOut={i => this.onMouseOut(i)}/>
				</div>
				{this.undoButton(turn)}
			</div>
		);
	}
}

export {TTTGameUI};
