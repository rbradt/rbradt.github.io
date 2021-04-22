import {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faUndo} from '@fortawesome/free-solid-svg-icons';
import {Move} from "../Game/Move.js"
import {TTTEvaluator} from "../Game/TTT/TTTGame.js";
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
	constructor(props) { // IMPORTANT - React strictmode will call constructor and other lifecycle methods multiple times
		super(props);	 // 			https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
		
		// this.props.observers // list of observers to be notified of user input on board
		// this.props.gametype // specifies game type (0 = local, 1 = vsAI, 2 = vsPlayer)
		// this.props.player // specifies player's turn (X or O)
		// this.props.model

		this.state = {
			board: Array(9).fill(null),
			isHovered: Array(9).fill(false),
			newGame: true
		};

		library.add(faUndo);
	}

	componentDidMount() {

	}

	tick() {
		if(this.getSide() !== this.props.model.getTurn()%2) {
			//poll server - periodically poll server instead of awaiting instruction from an open connection
		}
	}
	
	onClick(i) {
		const move = new Move(Math.floor(i/3), i%3, this.getSide());
		const newTurn = this.props.model.getTurn() + 1;

		if(this.props.model.verifyMove(move)) {
			this.props.model.update(this.update, newTurn, move);

			const board = this.props.model.getBoard().toOutputBoard();
			const isHovered = this.state.isHovered.slice();

			// update ui
			isHovered[i] = false;

			this.setState({
				board: board,
				isHovered: isHovered,
				newGame: false
			});
		}
	}
	
	onMouseIn(i) {
		const move = new Move(Math.floor(i/3), i%3, this.getSide());
		if(this.props.model.verifyMove(move)) {
			const isHovered = this.state.isHovered.slice();
			
			// update ui
			isHovered[i] = true;
			this.setState({isHovered: isHovered});
		}
	}
	
	onMouseOut(i) {
		const move = new Move(Math.floor(i/3), i%3, this.getSide());
		if(this.props.model.verifyMove(move)) {
			const isHovered = this.state.isHovered.slice();
			
			// update ui
			isHovered[i] = false;
			this.setState({isHovered: isHovered});
		}
	}
	
	goTo(turn) {
		if(turn >= 0) {
			this.props.model.update(this.update, turn);
			const board = this.props.model.getBoard().toOutputBoard();
			this.setState({board: board});
		}
	}

	getSide() {
		return this.props.gametype==0? this.props.model.getTurn()%2: this.props.player;
	}
	
	// callback
	update = () => function() {
		setTimeout(()=>this.setState({board: this.props.model.getBoard().toOutputBoard()}), 1000);
	}

	undoButton() {
		let newTurn = this.props.model.getTurn() - (this.props.gametype + 1);
		if(this.props.gametype !== 2) 
			return (
				<div className="ttt-undo" onClick={() => this.goTo(newTurn)}>
					<div>Undo</div>
					<div className=""><FontAwesomeIcon icon='undo'/></div>
				</div>
			);
	}
	
	render() {
		const current = this.props.model.getBoard();
		const hovered = this.state.isHovered;
		const newGame = this.state.newGame;
		
		let info  = "TTT";
		let evaluation = TTTEvaluator.evaluate(current);
		if(evaluation !== null)
			info = evaluation === 0? 'Tie': evaluation === -1? 'X Wins': 'O Wins';

		return (
			<div className="ttt-game font unselectable">
				<div>{info}</div>
				<div>
					<TTTBoardUI isNewGame={newGame} isHovered={hovered} turn={this.props.model.getTurn()} board={current.toOutputBoard()} onClick={i => this.onClick(i)} onMouseIn={i => this.onMouseIn(i)} onMouseOut={i => this.onMouseOut(i)}/>
				</div>
				{this.undoButton()}
			</div>
		);
	}
}

export {TTTGameUI};
