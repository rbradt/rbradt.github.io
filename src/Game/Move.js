class Move {
    constructor(row, col, side) {
        this.row = row;
        this.col = col;
        this.side = side;
    }

    row() {return this.row;}
    col() {return this.col;}
    side() {return this.side;}
}

export {Move};