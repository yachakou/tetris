import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { COLS, BLOCK_SIZE, ROWS } from '../constants/constants';
import { BoardService } from '../board.service';
import { NumberSymbol } from '@angular/common';
import { Piece } from '../model/piece';
import { PieceA } from '../model/PieceA';

@Component({
  selector: 'game-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @ViewChild('board', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  public points: number = 0;
  public lines: number = 0;
  public level: number = 0;
  ctx: CanvasRenderingContext2D;
  board:number[][];
  public piece:PieceA;


  constructor(private service: BoardService) {
  
   }

  initBoard() {
    this.ctx = this.canvas.nativeElement.getContext('2d');

    this.ctx.canvas.width = COLS * BLOCK_SIZE;
    this.ctx.canvas.height = ROWS * BLOCK_SIZE;
    this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
  }

  play() {
    this.board = this.service.getEmptyBoard();
    this.piece = new PieceA(this.ctx);
    this.piece.draw();
  }

  ngOnInit() {
    this.initBoard();
  }

}
