class Move {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }

    row() {
        return this.row;
    }

    col() {
        return this.col;
    }

    exists() {
        return row < 8 && row > -1 && col < 8 && col > -1;
    }
}

class direction {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    delta_row() {return this.y;}
    delta_col() {return this.x;}
}

class Directions { 
    static straight() {return [new direction(0,1), new direction(1,0), new direction(-1,0), new direction(0,-1)]}
    static diagonal() {return [new direction(1,1), new direction(-1,-1), new direction(-1,1), new direction(1,-1)]}
    static all() {return [new direction(0,1), new direction(1,0), new direction(-1,0), new direction(0,-1), new direction(1,1), new direction(-1,-1), new direction(-1,1), new direction(1,-1)]}
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

    performMove(move, board) {
        let new_r = move.row();
        let new_c = move.col();
        let r_direction = this.isWhitePiece? -1: 1;

    }

    possibleMoves(board) {
        let moves = [];
        let r = this.row;
        let c = this.col;
        let r_direction = this.isWhitePiece? -1: 1;
        let move;

        r += r_direction;
        move = new Move(r, c);
        if(board.isEmpty(move))
            moves.push(move);
        move = new Move(r, c-1);
        if(!board.isEmpty(move) && board.pieceAt(move).getSide() != this.side)
            moves.push(move);
        move = new Move(r, c+1);
        if(!board.isEmpty(move) && board.pieceAt(move).getSide() != this.side)
            moves.push(move);
        
        if(this.isWhitePiece()) {
            if(currentBoard[r-1][c] == null)
                moves.push(new Move(r - 1, c));
            if(r == 6 && currentBoard[r-2][c] == null)
                moves.push(new Move(r - 2, c));
            if(currentBoard[r-1][c-1]!=null && currentBoard[r-1][c-1].getSide != this.side)
            if(currentBoard[r-1][c+1]!=null && currentBoard[r-1][c+1].getSide != this.side)
        }r-1 c+1
        else {

        }
        
    }

    attackedPositions() {

    }
}