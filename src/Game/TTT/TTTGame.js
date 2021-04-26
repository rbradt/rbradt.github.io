import { Move } from "../Move.js";

    /*---------------------------------------------------------------------------------------------------
     *                                        TTTBoard - ttt board model
     *---------------------------------------------------------------------------------------------------*/
class TTTBoard {
    constructor(tttBoard = null, turn = null) {
        this.board = (tttBoard == null)? Array(9).fill(null) : tttBoard.board.slice();
        this.turn = (turn == null)? 0 : turn;
        this.movesIterator = 0;
    }

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

    /*---------------------------------------------------------------------------------------------------
     *                                      TTTGame - game logic
     *---------------------------------------------------------------------------------------------------*/
class TTTGame {
    constructor(gamemode, player) {
        this.history = [new TTTBoard()];
        this.turn = 0;
        this.gamemode = gamemode;
        this.player = (gamemode == 0 || player == 2)? null: player;
        this.observers = [];
        this.gameOver = false;
    }

    verifyMove(move) {
        return !this.gameOver
                && this.history[this.turn].at(move.row*3 + move.col) == null
                && (this.player == null || this.turn%2 == this.player);
    }

    getBoard() {
        return this.history[this.turn];
    }

    getTurn() {
        return this.turn;
    }

    isGameOver() {
        return this.gameOver;
    }

    // --- Observer pattern ---
    update(callback, info) {
        let isUpdateValid = false;
        
        // add new move
        if(info instanceof Move && this.verifyMove(info)) {
            let board = new TTTBoard(this.history[this.turn], this.turn + 1);
            board.set(info.row*3 + info.col, this.turn++%2===0? 'X':'O');
            this.gameOver = TTTEvaluator.evaluate(board) !== null;
            this.history.push(board);
            isUpdateValid = true;
        }
        // rollback to previous turn
        else if(typeof info == 'number' && info >= 0 && info <= this.turn) {
            this.turn = info;
            this.history = this.history.slice(0, info + 1);
            this.gameOver = false;
            isUpdateValid = true;
        }

        if(callback != null && isUpdateValid)
            this.notifyObservers(callback);
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers(callback) {
        for(let i = 0; i < this.observers.length; i++)
            this.observers[i].update(callback, this);
    }
}

    /*---------------------------------------------------------------------------------------------------
     *                  TTTEvaluator - game evaluator w/ weighted gamestate evaluations
     *---------------------------------------------------------------------------------------------------*/
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
        for(let i = 0; i < this.winningIndeces.length; i++) {
            let order = this.winningIndeces[i];
            if(TTTBoard.at(order[0]) != null && TTTBoard.at(order[0]) === TTTBoard.at(order[1]) && TTTBoard.at(order[0]) === TTTBoard.at(order[2])) {
                let evaluation = TTTBoard.at(order[0]) === 'X'? -1: 1;
                return weighted? evaluation*(100 - TTTBoard.getTurn()): evaluation;
            }       
        }

        return TTTBoard.getTurn()==9? 0: null;
    }
}

export{TTTGame, TTTBoard, TTTEvaluator};

/* IN AI
update(game) {
    if(!game.isPlayersMove())
        // generate move
        notifyObservers(turn, move)
}*/