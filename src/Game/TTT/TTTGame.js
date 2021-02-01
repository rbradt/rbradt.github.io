import { Move } from "../Move.js";

class TTTBoard {
    constructor() {this.board = Array(9).fill(null);}
    constructor(TTTBoard) {this.board = TTTBoard.board.slice();}
    at(i) {return this.board[i];}
}

class TTTGame {
    constructor(player, gamemode) {
        this.history = [new TTTBoard()];
        this.turn = 0;
        this.player = player;
        this.gamemode = gamemode;
        this.observers = [];
    }
    
    // private
    goToTurn(turn) {
        if(turn >= 0) {
            this.turn = turn;
            this.history = this.history.slice(0, turn + 1);
            this.notifyObservers();
        }
    }

    // public
    verifyMove(move) {
        return this.gamemode==0 || this.turn%2==move.side() && this.history[move.row()*3 + move.col()] == null;
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
            let board = new TTTBoard(this.history[this.turn]);
            board.at(move.row()*3 + move.col()) = move.side()==0? 'X':'O';
            this.history.concat();
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
    static quickEval() {
        
    }

    static weightedEval() {

    }
}

export{TTTGame};

/* IN AI
update(game) {
    if(!game.isPlayersMove())
        // generate move
        notifyObservers(turn, move)
}*/