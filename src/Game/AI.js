import { Move } from "./Move.js";

class AI {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers(move) {
        for(let i = 0; i < this.observers.length; i++)
            this.observers[i].update(null, move);
    }

    update(callback, model) {return null;}
}

class Minimax extends AI {
    constructor(evaluate) {
        super();
        this.evaluate = evaluate;
    }

    update(callback, model) {
        if(!(model.isPlayerMove() || model.isGameOver())) {
            // update model
            setTimeout(()=>this.notifyObservers(this.generateTurn(model.getBoard())), 1);

            // update UI
            callback(200);
        }
    }

    generateTurn(board) {
        return this.minimax(board, 0, -1000, 1000, board.getTurn()%2 == 1);
    }

    minimax(board, depth, alpha, beta, maximizer) {
        let optimalMove = null;

        // return evaluation of final board state 
        let value = this.evaluate(board);
        if(value != null)
            return value;

        let minmax = (maximizer)? -1000: 1000;
        board.resetMoveIterator();
        let nextMove = board.getNextMove();
        while(nextMove != null) {
            // recurse on possible move                                    
            value = this.minimax(nextMove, depth + 1, alpha, beta, !maximizer);  

            // update max/min
            if((maximizer && minmax < value) || (!maximizer && minmax > value)) {   
                minmax = value;
                if(depth == 0)
                    optimalMove = board.getMove();
            }

            // prune 
            if(maximizer && value > alpha) 
                alpha = value;
            if(!maximizer && value < beta)
                beta = value;
            if(beta <= alpha)
                break;

            nextMove = board.getNextMove();
        }

        if(depth == 0)
            minmax = optimalMove;

        return minmax;
    }
}

export {Minimax};