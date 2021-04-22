class Move {
    constructor(row, col, side) {
        this.row = row;
        this.col = col;
        this.side = side;
    }

    getRow() {return this.row;}
    getCol() {return this.col;}
    getSide() {return this.side;}
}

export {Move};