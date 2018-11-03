interface StrokeData {
  rgba: any[],
  size: number,
  x: number[],
  y: number[]
}


interface IPaintTool {
  rgba: any[];
  size: number;

  setColor(color: any[])
  setSize(size: number)
  setCtx(ctx: CanvasRenderingContext2D)
  setBase(ctx: CanvasRenderingContext2D)

  onActivate(x: number, y: number)
  onMoveWhileActivated(x: number, y: number)
  onDeactivate()
  isActivated()
  getActionData(): StrokeData
}

export class Brush implements IPaintTool {

  static default = {
    rgba: [1, 1, 1, 1],
    size: 1,
  }

  rgba: number[];
  size: number;
  ctx: CanvasRenderingContext2D;
  baseCtx: CanvasRenderingContext2D;

  pathX: number[] = [];
  pathY: number[] = [];

  private minX: number;
  private minY: number;
  private maxX: number;
  private maxY: number;


  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.baseCtx = ctx;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.rgba = Brush.default.rgba;
    this.size = Brush.default.size;

  }

  setCtx(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    return this;
  }
  setBase(ctx: CanvasRenderingContext2D) {
    this.baseCtx = ctx;
    return this;
  }

  onActivate(x: number, y: number) {
    return this.startAt(x, y);
  }

  onMoveWhileActivated(x: number, y: number) {
    return this.drawTo(x, y);
  }

  onDeactivate() {
    return this.setOn(this.baseCtx).reset();
  }

  isActivated() {
    return this.isDrawing();
  }

  getActionData(): StrokeData {
    return this.getData();
  }

  startAt(x: number, y: number) {
    this.setInitialPoint(x, y);
    this.draw(this.ctx);
    return this;
  }

  private setInitialPoint(x: number, y: number) {
    this.pathX = [x];
    this.pathY = [y];
    this.minX = x;
    this.minY = y;
    this.maxX = x;
    this.maxY = y;
  }

  drawTo(newX: number, newY: number) {
    this.updateBoundingRectPoints(newX, newY);

    this.updatePath(newX, newY);
    this.clearStroke();

    this.draw(this.ctx);
    return this;
  }

  alphaModeIsOn() {
    return this.rgba[3] !== 1;
  }

  updatePath(newX: number, newY: number) {
    this.pathX.push(newX);
    this.pathY.push(newY);
  }

  setOn(baseCtx: CanvasRenderingContext2D) {
    this.clearStroke()

    const saved = this.saveCtxSettings(baseCtx);
    const keys = Object.keys(saved);
    keys.forEach(key => {
      baseCtx[key] = this.ctx[key];
    });
    this.draw(baseCtx);
    this.restoreCtxSettings(baseCtx, saved);
    return this;
  }

  private saveCtxSettings(ctx) {
    return {
      lineWidth: ctx.lineWidth,
      lineCap: ctx.lineCap,
      lineJoin: ctx.lineJoin,
      fillStyle: ctx.fillStyle,
      strokeStyle: ctx.strokeStyle
    }
  }

  private restoreCtxSettings(ctx, saved) {
    Object.keys(saved).forEach(key => {
      ctx[key] = saved[key];
    });
  }

  private clearStroke() {
    const [minX, minY, maxX, maxY] = this.getBoundingRectPoints();
    this.ctx.clearRect(minX, minY, maxX, maxY);
  }

  private updateBoundingRectPoints(newX: number, newY: number) {
    if (this.minX > newX) { this.minX = newX }
    else if (this.maxX < newX) { this.maxX = newX };
    if (this.minY > newY) { this.minY = newY }
    else if (this.maxY < newY) { this.maxY = newY };
  }

  private getBoundingRectPoints() {
    const { width, height } = this.ctx.canvas;
    const radius = this.size / 2;
    return [
      Math.max(this.minX - radius, 0),
      Math.max(this.minY - radius - 5, 0), // Magic number- box ceiling is slightly too low without it
      Math.min(this.maxX + radius, width),
      Math.min(this.maxY + radius, height),
    ]
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.pathX.length === 1) {
      this.drawDot(ctx);
    } else {
      this.drawPath(ctx);
    }
    return this;
  }


  private drawPath(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    const len = this.pathX.length;
    ctx.moveTo(this.pathX[0], this.pathY[0]);
    for (let i = 1; i < len; i++) {
      ctx.lineTo(this.pathX[i], this.pathY[i]);
    }
    ctx.stroke();
  }

  private drawDot(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.arc(this.pathX[0], this.pathY[0], this.size / 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.lineWidth = this.size;
  }

  setColor(rgba: any[]) {
    this.setRgba(rgba)
    this.setCtxStyle();
    return this;
  }

  setRgba(rgba: any[]) {
    const r = parseInt(rgba[0]);
    const g = parseInt(rgba[1]);
    const b = parseInt(rgba[2]);
    const a = parseFloat(rgba[3]);
    this.rgba = [r, g, b, a];
  }

  setCtxStyle() {
    const cssString = `rgba(${this.rgba.join(', ')})`;
    this.ctx.strokeStyle = cssString;
    this.ctx.fillStyle = cssString;
    return this;
  }

  setSize(size: number) {
    this.size = size;
    this.ctx.lineWidth = size;
    return this;
  }

  reset() {
    this.rgba = Brush.default.rgba;
    this.size = Brush.default.size;
    this.pathX = [];
    this.pathY = [];
    [this.minX, this.minY, this.maxX, this.maxY] = [null, null, null, null];
    return this;
  }

  isDrawing(): boolean {
    return this.pathX.length !== 0;
  }

  setData(data: StrokeData) {
    this.rgba = data.rgba;
    this.size = data.size;
    this.pathX = data.x;
    this.pathY = data.y;
  }

  getData(): StrokeData {
    return {
      rgba: this.rgba,
      size: this.size,
      x: this.pathX,
      y: this.pathY
    }
  }
}
