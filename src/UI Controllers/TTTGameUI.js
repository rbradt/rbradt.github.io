import {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faUndo} from '@fortawesome/free-solid-svg-icons';
import '../CSS/ttt_board.css';

// Board Controller
class TTTCellUI extends Component {
	render() {
		return (<button className="ttt-board-cell" onClick={this.props.onClick} onMouseOver={this.props.hover} onMouseOut={this.props.nohover} style={this.props.style}> {this.props.value} </button>);
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
			style = this.props.board[i]==='X' || this.props.isNewGame && Math.floor(i/3) === 1 ? {color: "#a55463", textShadow: "0px 0px 5px #a55463"}: {color: "#61dafb", textShadow: "0px 0px 5px #ccccff"}
		}

		return (<TTTCellUI value={value}
						   onClick={() => this.props.onClick(i)}
						   hover={() => this.props.onMouseIn(i)}
						   nohover={() => this.props.onMouseOut(i)}
						   style={style}/>);
	}
	
	render() {
		return (
			<div className="ttt-board">
				<div className="ttt-row">
					{this.createCell(0)}
					{this.createCell(1)}
					{this.createCell(2)}
				</div>
				<div className="ttt-row">
					{this.createCell(3)}
					{this.createCell(4)}
					{this.createCell(5)}
				</div>
				<div className="ttt-row">
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
			board: Array(9).fill(null),
			/*moves: [{board: Array(9).fill(null)}],*/
			isHovered: Array(9).fill(false),
			newGame: true,
			turn: 0
		};
		library.add(faUndo);
		this.props.model.addObserver(this);
		// this.props.observers // list of observers to be notified of user input on board
		// this.props.gametype // specifies game type (0 = local, 1 = vsAI, 2 = vsPlayer)
		// this.props.player // specifies player's turn (X or O)
		// this.props.model
	}
	
	onClick(i) {
		const thisMove = new Move(i/3, i%3, this.props.player);

		if(this.model.verifyMove(thisMove)) {
			/*const moves = this.state.moves.slice(0, this.state.turn + 1);
			const active = moves[this.state.turn];
			const board = active.board.slice();*/
			const board = this.props.model.getBoard().toOutputBoard();
			const isHovered = this.state.isHovered.slice();

			// update observer
			this.props.model.update(this.state.turn, new Move(i/3, i%3, this.props.player));

			// update ui
			isHovered[i] = false;
			board[i] = this.state.turn%2 === 0? 'X': 'O';
			this.setState({
				/*moves: moves.concat([{board: board}]),*/
				board: board,
				isHovered: isHovered,
				turn: moves.length,
				newGame: false
			});
		}
	}
	
	onMouseIn(i) {
		const thisMove = new Move(i/3, i%3, this.props.player);
		if(this.model.verifyMove(thisMove)) {
			const isHovered = this.state.isHovered.slice();
			
			// update ui
			isHovered[i] = true;
			this.setState({isHovered: isHovered});
		}
	}
	
	onMouseOut(i) {
		const thisMove = new Move(i/3, i%3, this.props.player);
		if(this.model.verifyMove(thisMove)) {
			const isHovered = this.state.isHovered.slice();
			
			// update ui
			isHovered[i] = false;
			this.setState({isHovered: isHovered});
		}
	}
	
	goTo(move) {
		if(move >= 0) {
			this.props.model.update(move);
			/*this.setState({turn: move});*/
		}
	}
	
	// ReactDOM.render() will return this object, but the value of this will be unknown
	//Observe TTT board model
	update(model) {
		if(!this.props.model.getBoard().equals(model)) {
			const newTurn = model.getTurn();
			const newBoard = model.toOutputBoard();
			/*const moves = this.state.moves.slice(0, newTurn);*/
			
			this.setState({
				/*moves: moves.concat([{board: newBoard}]),*/
				board: newBoard,
				turn: newTurn
			});
		}
	}
	
	// Notify model of user input
	notifyObservers(activeBoard) {
		for(var i = 0; i < this.props.observers.length; i++)
			this.props.observers[i].update(/*new model(activeBoard)*/);
	}

	/*shouldComponentUpdate() {
		// may be unecessary
		return true;
	}*/

	undoButton(turn) {
		let newTurn = turn - (this.props.gametype + 1);
		if(this.props.gametype !== 2) 
			return (
				<div className="ttt-undo" onClick={() => this.goTo(newTurn)}>
					<div>Undo</div>
					<div className=""><FontAwesomeIcon icon='undo'/></div>
				</div>
			);
	}
	
	render() {
		/*const moves = this.state.moves;*/
		const turn = this.state.turn;
		/*const current = moves[turn];*/
		const current = this.props.model.getBoard();
		const hovered = this.state.isHovered;
		const newGame = this.state.newGame;
		
		let info = 'Game Over -> ';
		let eval = TTTEvaluator.evaluate(current);
		if(eval !== null)
			info += eval === 0? 'Tie': eval === -1? 'X Wins': 'O Wins';

		return (
			<div className="ttt-game font unselectable">
				<div>{info}</div>
				<div>
					<TTTBoardUI isNewGame={newGame} isHovered={hovered} turn={turn} board={current.toOutputBoard()} onClick={i => this.onClick(i)} onMouseIn={i => this.onMouseIn(i)} onMouseOut={i => this.onMouseOut(i)}/>
				</div>
				{this.undoButton(turn)}
			</div>
		);
	}
}

export {TTTGameUI};
