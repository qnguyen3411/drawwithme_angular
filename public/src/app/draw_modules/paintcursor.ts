import { Brush } from './brush'
import { Eraser } from './eraser';
import { Ruler } from './ruler';

// Can't export interfaces apparently
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


export class PaintCursor {

  private static getToolCreator(tool) {
    return {
      'BRUSH': Brush,
      'ERASER': Eraser,
      'RULER': Ruler
    }[tool];
  }
  
  x: number;
  y: number;
  rgba = Brush.default.rgba;
  size = Brush.default.size;

  topCtx: CanvasRenderingContext2D;
  baseCtx: CanvasRenderingContext2D;

  label = "";
  isVisible = true;

  currTool: IPaintTool;
  currToolName: string;

  constructor(baseCtx: CanvasRenderingContext2D) {
    this.baseCtx = baseCtx;
    this.baseCtx.lineCap = 'round';
    this.baseCtx.lineJoin = 'round';
    this.currTool = new Brush(this.baseCtx)
      .setCtx(baseCtx);
    this.currToolName = 'BRUSH';
  }

  setUpperLayer(ctx: CanvasRenderingContext2D) {
    this.topCtx = ctx;
    this.topCtx.lineCap = 'round';
    this.topCtx.lineJoin = 'round';
    this.currTool.setCtx(ctx);
    return this;
  }

  startAction() {
    this.currTool.setColor(this.rgba);
    this.currTool.setSize(this.size);
    this.currTool.onActivate(this.x, this.y);
    return this;
  }

  endAction() {
    //TODO: strokedata resets before we're able to get it
    if (this.currTool.isActivated()) {
      this.currTool.onDeactivate();
    }
    return this;
  }

  moveTo(x: number, y: number) {
    this.x = x;
    this.y = y;
    if (this.currTool.isActivated()) {
      this.currTool.onMoveWhileActivated(x, y)
    }
    return this;
  }

  hasOngoingAction() {
    return this.currTool.isActivated();
  }

  getActionData() {
    return this.currTool.getActionData();
  }

  setTool(tool: string) {
    if (tool === this.currToolName) { return this; }
    if (tool !== 'BRUSH' && tool !== 'ERASER' && tool !== 'RULER') { return this; }
    this.currToolName = tool;
    const newTool = PaintCursor.getToolCreator(tool);
    this.currTool = new newTool(this.baseCtx);
   
    this.currTool
      .setCtx(this.topCtx || this.baseCtx)
      .setColor(this.rgba)
      .setSize(this.size);
    return this;
  }

  setColor(rgba: any[]) {
    this.rgba = rgba;
    this.currTool.setColor(rgba)
    return this;
  }

  setSize(size: number) {
    this.size = size;
    this.currTool.setSize(size);
    return this;
  }

  setLabel(label: string) {
    this.label = label;
    return this;
  }

  show() {
    this.isVisible = true;
    return this;
  }

  hide() {
    this.isVisible = false;
    return this;
  }

}