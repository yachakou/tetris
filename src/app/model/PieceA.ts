import { Piece } from './piece';

export class PieceA implements Piece {
    x: number;
    y: number;
    color: string;
    shape: number[][];

    constructor(private ctx: CanvasRenderingContext2D) {
        this.spawn();
    }

    spawn() {
        this.color = 'blue';
        this.shape =
            [[2, 0, 0],
            [2, 2, 2],
            [0, 0, 0]];

        this.x = 3;
        this.y = 0;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    // this.x & this.y = position on the board
                    // x & y position are the positions of the shape
                    this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
                }
            });
        });

    }
}