
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
        this.evaluate = evaluate;
    }

    update(callback, model) {
        if(callback != null) {
            // update model
            this.notifyObservers(this.generateTurn(model.getBoard()));

            // update UI
            callback();
        }
    }

    generateTurn(board) {
        let pos = minimax(board, 0, alpha, beta, board.getTurn()%2 == 1);
        return new Move(Math.floor(pos/3), pos%3);
    }

    minimax(board, depth, alpha, beta, maximizer) {
        let optimalPos = 0;

        let value = this.evaluate(board, true);                                     // return evaluation of final board state
        if(value != null)
            return value;

        let minmax = (maximizer)? Integer.MIN_VALUE: Integer.MAX_VALUE;
        board.resetMoveIterator();
        let nextMove = getNextMove();
        while(nextMove != null) {                                    
            value = Minimax.minimax(nextMove, depth + 1, alpha, beta, !maximizer);  // recurse on possible move

            if((maximizer && minmax < value) || (!maximizer && minmax > value)) {   // update max/min
                minmax = value;
                if(depth == 0)
                    optimalPos = i;
            }

            if(maximizer && value > alpha)                                          // prune
                alpha = value;
            if(!maximizer && value < beta)
                beta = value;
            if(beta <= alpha)
                break;

            nextMove = getNextMove();
        }

        if(depth == 0)
            minmax = optimalPos;

        return minmax;
    }


}