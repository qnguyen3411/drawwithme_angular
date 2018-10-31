import { Component, OnInit } from '@angular/core';
import { SocketsService } from '../../services/sockets.service';
import { DrawchatBrushService } from '../../services/drawchat-brush.service';
import { DrawchatColorService } from '../../services/drawchat-color.service';

@Component({
  selector: 'app-drawchat-sliders',
  templateUrl: './drawchat-sliders.component.html',
  styleUrls: ['./drawchat-sliders.component.css'],
  providers: [DrawchatColorService]
})
export class DrawchatSlidersComponent implements OnInit {

  currMode = 'rgb';
  colorSlider1Val: number;
  colorSlider2Val: number;
  colorSlider3Val: number;

  alphaSliderVal: number;
  sizeSliderVal: number;

  constructor(
    private _socket: SocketsService,
    private brush: DrawchatBrushService,
    private color: DrawchatColorService
    ) {
    this.colorSlider1Val = 1;
    this.colorSlider2Val = 1;
    this.colorSlider3Val = 1;
    this.alphaSliderVal = 1;
    this.sizeSliderVal = 1;
   }

  ngOnInit() { 
    this.subscribeToColorChanges();
  }

  subscribeToColorChanges() {
    this.brush.colorChanged.subscribe(colorInRgb => {
      this.color.set({rgbOrHsl: 'rgb', vals: colorInRgb})
      this.setColorSliderVals(this.color.get(this.currMode));
    })
  }

  updateColor() {
    this.color.set(
      {rgbOrHsl: this.currMode, vals: this.getColorSliderVals()});

    this.brush.changeColorAndAlpha(
      [...this.color.get('rgb'), this.alphaSliderVal]);
  }

  updateSize() {
    this.brush.changeSize(this.sizeSliderVal);
    this._socket.drawModule.emitCursorSizeUpdate(this.brush.size);
  }

  changeMode(newMode:string) {
    if (newMode !== 'rgb' && newMode !== 'hsl') { return ;}
    if (this.currMode === newMode) { return; }

    this.setColorSliderVals(this.color.get(newMode));
    this.currMode = newMode;
  }

  private setColorSliderVals([val1, val2, val3]: number[]) {
    this.colorSlider1Val = val1;
    this.colorSlider2Val = val2;
    this.colorSlider3Val = val3;
  }

  private getColorSliderVals() {
    return [
      this.colorSlider1Val,
      this.colorSlider2Val,
      this.colorSlider3Val,
    ]
  }

  solidColorCssString() {
    if (this.currMode === 'rgb') {
      return `rgb(${this.getColorSliderVals().join(',')})`;
    } else if (this.currMode === 'hsl') {
      return `hsl(${this.colorSlider1Val}, ${this.colorSlider2Val}%, ${this.colorSlider3Val}%)`;
    }
  }

}
