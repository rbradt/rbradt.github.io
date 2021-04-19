import { Move } from "../Move.js";

class TTTBoard {
    constructor() {
        this.board = Array(9).fill(null);
        this.turn = 0;
        this.movesIterator = 0;
    }

    /*constructor(TTTBoard, turn) {
        this.board = TTTBoard.board.slice();
        this.turn = turn;
        this.movesIterator = 0;
    }*/

    at(i) {return this.board[i];}
    set(i, data) {this.board[i] = data;}
    getTurn() {return this.turn;}
    toOutputBoard() {return this.board.slice();}
    equals(TTTBoard) {
        let flag = true;

        for(let i = 0; i < 9; i++)
            if(this.board[i] !== TTTBoard.board[i]) {
                flag = false;
                break;
            }

        return flag;
    }

    // iterator for all possible moves from current board state
    resetMoveIterator() {this.movesIterator = 0;}
    getNextMove() {
        while(this.board[this.movesIterator] != null)
            if(++this.movesIterator > 8)
                return null;

        let newMove = new TTTBoard(this, this.turn + 1);
        newMove.board[this.movesIterator] = (newMove.turn%2 == 0)? 'X': 'O';
        return newMove;
    }
}

class TTTGame {
    constructor(player, gamemode) {
        this.history = [new TTTBoard()];
        this.turn = 0;
        this.player = player;
        this.gamemode = gamemode;
        this.observers = [];
        this.isGameOver = false;
    }
    
    // private
    goToTurn(turn) {
        if(turn >= 0 && turn <= this.turn) {
            this.turn = turn;
            this.history = this.history.slice(0, turn + 1);
            this.notifyObservers();
        }
    }

    // public
    verifyMove(move) {
        return TTTEvaluator.evaluate(this.getBoard()) == null
                && this.history[this.turn].at(move.row()*3 + move.col()) == null
                && (this.gamemode==0 || this.turn%2==move.side());
    }

    getBoard() {
        return this.history[this.turn];
    }

    getTurn() {
        return this.turn;
    }

    isPlayersMove() {
        return this.gamemode==0 || this.turn%2 == this.player;
    } 

    // Observer Pattern
    update(turn, move=null) {
        if(turn == ++this.turn && this.verifyMove(move)) {
            let board = new TTTBoard(this.history[this.turn - 1], this.turn);
            board.set(move.row()*3 + move.col(), move.side()==0? 'X':'O');
            this.isGameOver = TTTEvaluator.evaluate(board);
            this.history.push(board);
            this.notifyObservers();
        }
        else
            this.goToTurn(turn);
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers(message = null) {
        for(let i = 0; i < this.observers.length; i++)
            this.observers[i].update(this, message);
    }
}

class TTTEvaluator {
    static winningIndeces = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

    static evaluate(TTTBoard, weighted=false) {
        for(let i = 0; i < this.winningIndeces.length(); i++) {
            let order = this.winningIndeces[i];
            if(TTTBoard.at(order[0]) != null && TTTBoard.at(order[0]) === TTTBoard.at(order[1]) && TTTBoard.at(order[0]) === TTTBoard.at(order[2])) {
                let eval = TTTBoard.at(order[0]) === 'X'? -1: 1;
                return weighted? eval*(100 - TTTBoard.getTurn()): eval;
            }       
        }

        return TTTBoard.getTurn()==9? 0: null;
    }
}

export{TTTGame, TTTBoard};

/* IN AI
update(game) {
    if(!game.isPlayersMove())
        // generate move
        notifyObservers(turn, move)
}*/