import { Brush } from './brush'
export class Eraser extends Brush {

  constructor(ctx: CanvasRenderingContext2D) {
    super(ctx);
    this.rgba = [255,255,255,1];
    this.size = Brush.default.size;
  }

  setRgba(rgba: any[]) {
    this.rgba = [255,255,255,1];
    return this;
  }
}