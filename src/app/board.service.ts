import { Injectable } from '@angular/core';
import { ROWS, COLS } from './constants/constants';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor() { }


  getEmptyBoard(): number[][] {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  }
}
