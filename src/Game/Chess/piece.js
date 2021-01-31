class Move {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
}

class Piece {
    constructor(side, row, col) {
        this.side = side;
        this.currentRow = row;
        this.currentCol = col;
    }

    getSide() {
        return this.side;
    }

    isWhitePiece() {
        return this.side == 0;
    }

    row() {
        return this.currentRow;
    }

    col() {
        return this.currentCol;
    }
}

class Pawn extends Piece {
    constructor(side, row, col) {
        super(side, row, col);

    }

    performMove(move) {

    }

    possibleMoves(currentBoard) {
        let moves = [];
        let r = this.row;
        let c = this.col;

        
        if(this.isWhitePiece()) {
            if(currentBoard[r-1][c] == null)
                moves.push(new Move(r - 1, c));
            if(r == 6 && currentBoard[r-2][c] == null)
                moves.push(new Move(r - 2, c));
            if()
        }
        else {

        }
        
    }

    attackedPositions() {

    }
}