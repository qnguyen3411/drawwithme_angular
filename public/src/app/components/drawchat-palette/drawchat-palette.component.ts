import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MouseposService } from 'src/app/services/mousepos.service';

@Component({
  selector: 'app-drawchat-palette',
  templateUrl: './drawchat-palette.component.html',
  styleUrls: ['./drawchat-palette.component.css'],
  providers: [MouseposService]
})
export class DrawchatPaletteComponent implements OnInit {

  @Output() colorPicked = new EventEmitter<number[]>();
  @ViewChild('palette') paletteRef;

  palCtx: CanvasRenderingContext2D;

  constructor(
    private mouse: MouseposService
  ) { }

  ngOnInit() {
    const canvas = this.paletteRef.nativeElement as HTMLCanvasElement;
    this.palCtx = canvas.getContext('2d');

    const img = new Image();
    img.src = 'assets/palette.png';
    img.onload = () => {
      this.palCtx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  }

  onMouseDownOrMove(e: MouseEvent) {
    if (e.buttons == 1) {
      const mousepos = this.mouse.getMousePos(e, this.palCtx.canvas);
      this.getColorFromPalette(mousepos);
    }
  }

  getColorFromPalette({ x, y }) {
    const {data} = this.palCtx.getImageData(x, y, 1, 1);
    this.palCtx.beginPath()
    this.colorPicked.emit([data[0], data[1], data[2]])
  }

}
