import { Brush } from './brush'

export class Ruler extends Brush {
  updateStroke(newX: number, newY: number) {
    this.pathX[0] = newX;
    this.pathY[0] = newY;

    return this;
  }
}