import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Brush } from '../draw_modules/brush'
// Keeps track of state for brush - color and size
@Injectable({
  providedIn: 'root'
})
export class DrawchatBrushService {
  rgba: any[] = Brush.default.rgba;
  size: number = Brush.default.size;

  colorChanged: Subject<any[]> = new Subject<any[]>();
  sizeChanged: Subject<number> = new Subject<number>();

  constructor() { }

  changeSize(size: number) {
    this.size = size;
    this.sizeChanged.next(size);
  }

  changeColor(rgb: any[]) {
    try {
      const r = parseInt(rgb[0]);
      const g = parseInt(rgb[1]);
      const b = parseInt(rgb[2]);
      this.rgba = [r, g, b, this.rgba[3]]
    } catch { return; }
    this.colorChanged.next(this.rgba);
  }

  changeAlpha(a: number) {
    this.rgba[3] = a;
    this.colorChanged.next(this.rgba);
  }

  changeColorAndAlpha(rgba: any[]) {
    try {
    const r = parseInt(rgba[0]);
    const g = parseInt(rgba[1]);
    const b = parseInt(rgba[2]);
    const a =  parseFloat(rgba[3]);
    this.rgba = [r, g, b, a]
    } catch { return; }
    this.colorChanged.next(this.rgba);
  } 
}
