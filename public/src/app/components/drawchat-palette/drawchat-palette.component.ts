import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MouseposService } from 'src/app/services/mousepos.service';
import { DrawchatBrushService } from '../../services/drawchat-brush.service';

@Component({
  selector: 'app-drawchat-palette',
  templateUrl: './drawchat-palette.component.html',
  styleUrls: ['./drawchat-palette.component.css'],
  providers: [MouseposService]
})
export class DrawchatPaletteComponent implements OnInit {

  @ViewChild('palette') paletteRef;

  palCtx: CanvasRenderingContext2D;
  trackMouse;

  constructor(
    private mouse: MouseposService,
    private brush: DrawchatBrushService
  ) { }

  ngOnInit() {
    const canvas = this.paletteRef.nativeElement as HTMLCanvasElement;
    this.trackMouse = this.mouse.getMousePosTracker(canvas);
    this.palCtx = canvas.getContext('2d');
    const img = new Image();
    img.src = 'assets/palette.png';
    img.onload = () => {
      this.palCtx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  }

  onMouseDownOrMove(e: MouseEvent) {
    if (e.buttons == 1) {
      const mousepos = this.trackMouse(e);
      this.getColorFromPalette(mousepos);
    }
  }

  getColorFromPalette({ x, y }) {
    const {data} = this.palCtx.getImageData(x, y, 1, 1);
    this.brush.changeColor([data[0], data[1], data[2]]);
  }

}
