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

  tool: IPaintTool;
  currToolName: string;

  constructor(baseCtx: CanvasRenderingContext2D) {
    this.baseCtx = baseCtx;
    this.baseCtx.lineCap = 'round';
    this.baseCtx.lineJoin = 'round';
    this.tool = new Brush(this.baseCtx)
      .setCtx(baseCtx);
    this.currToolName = 'BRUSH';
  }

  setUpperLayer(ctx: CanvasRenderingContext2D) {
    this.topCtx = ctx;
    this.topCtx.lineCap = 'round';
    this.topCtx.lineJoin = 'round';
    this.tool.setCtx(ctx);
    return this;
  }

  startAction() {
    this.tool.setColor(this.rgba);
    this.tool.setSize(this.size);
    this.tool.onActivate(this.x, this.y);
    return this;
  }

  endAction() {
    if (this.tool.isActivated()) {
      this.tool.onDeactivate();
    }
    return this;
  }

  moveTo(x: number, y: number) {
    this.x = x;
    this.y = y;
    if (this.tool.isActivated()) {
      this.tool.onMoveWhileActivated(x, y)
    }
    return this;
  }

  hasOngoingAction() {
    return this.tool.isActivated();
  }

  getActionData() {
    return this.tool.getActionData();
  }

  setTool(currTool: string) {
    if (currTool === this.currToolName) { return this; }
    if (currTool !== 'BRUSH' && currTool !== 'ERASER' && currTool !== 'RULER') { return this; }
    this.currToolName = currTool;
    const newTool = PaintCursor.getToolCreator(currTool);
    this.tool = new newTool(this.baseCtx);
   
    this.tool
      .setCtx(this.topCtx || this.baseCtx)
      .setColor(this.rgba)
      .setSize(this.size);
    return this;
  }

  setColor(rgba: any[]) {
    this.rgba = rgba;
    this.tool.setColor(rgba)
    return this;
  }

  setSize(size: number) {
    this.size = size;
    this.tool.setSize(size);
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