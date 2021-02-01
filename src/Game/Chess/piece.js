import { Move } from "../Move.js";

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

    getSide() {return this.side;}
    isWhitePiece() {return this.side == 0;}
    row() {return this.currentRow;}
    col() {return this.currentCol;}
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
        move = new Move(r, c, this.side);
        if(board.isEmpty(move))
            moves.push(move);
        move = new Move(r, c-1);
        if(!board.isEmpty(move) && board.pieceAt(move).getSide() != this.side)
            moves.push(move);
        move = new Move(r, c+1);
        if(!board.isEmpty(move) && board.pieceAt(move).getSide() != this.side)
            moves.push(move);
        r += r_direction;
        move = new Move(r, c);
        if(board.isEmpty(move))
            moves.push(move);
    }

    attackedPositions() {

    }
}