import { Brush } from './brush'
export class Eraser extends Brush {

  constructor(ctx: CanvasRenderingContext2D) {
    super(ctx);
    this.rgba = [255,255,255,1];
    this.size = Brush.default.size;
  }

  setColor(rgba: any[]) {
    return this;
  }
}