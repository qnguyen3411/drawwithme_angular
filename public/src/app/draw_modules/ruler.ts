import { Brush } from './brush'

export class Ruler extends Brush {

  updatePath(newX: number, newY: number) {
    this.pathX[1] = newX;
    this.pathY[1] = newY;
  }
}