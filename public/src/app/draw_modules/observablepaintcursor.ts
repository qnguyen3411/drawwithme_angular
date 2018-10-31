import { PaintCursor } from './paintcursor';
import { Subject } from 'rxjs';
// A wrapper around paintcursor where action events are subcribable
export class ObservablePaintCursor extends PaintCursor {
  onStart: Subject<{ tool: string, rgba: any[] }> = new Subject<{ tool: string, rgba: any[] }>();
  onMove: Subject<{ x: number, y: number }> = new Subject<{ x: number, y: number }>();
  onEnd: Subject<any> = new Subject<any>();

  startAction() {
    this.onStart.next({ tool: this.currToolName, rgba: this.rgba });
    return super.startAction();
  }

  moveTo(x, y) {
    this.onMove.next({ x, y });
    return super.moveTo(x, y);
  }

  endAction() {
    this.onEnd.next();
    return super.endAction()
  }
}