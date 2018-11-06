import { PaintCursor } from './paintcursor';
import { Subject } from 'rxjs';
// A wrapper around paintcursor where action events are subcribable
interface StrokeData {
  rgba: any[],
  size: number,
  x: number[],
  y: number[]
}

export class ObservablePaintCursor extends PaintCursor {
  onStart: Subject<{ tool: string, rgba: any[] }> = new Subject<{ tool: string, rgba: any[] }>();
  onMove: Subject<{ x: number, y: number }> = new Subject<{ x: number, y: number }>();
  onEnd: Subject<StrokeData> = new Subject<StrokeData>();

  startAction() {
    this.onStart.next({ tool: this.currToolName, rgba: this.rgba });
    return super.startAction();
  }

  moveTo(x, y) {
    this.onMove.next({ x, y });
    return super.moveTo(x, y);
  }

  endAction() {
    if (this.tool.isActivated()) {
      const strokeData = this.tool.getActionData();
      this.onEnd.next(strokeData);
      this.tool.onDeactivate();
    }
    return this;
  }
}