import { Component, OnInit } from '@angular/core';
import { SocketsService } from '../../services/sockets.service';
import { DrawchatBrushService } from '../../services/drawchat-brush.service';

@Component({
  selector: 'app-drawchat-sliders',
  templateUrl: './drawchat-sliders.component.html',
  styleUrls: ['./drawchat-sliders.component.css'],
  providers: []
})
export class DrawchatSlidersComponent implements OnInit {
  
  currMode = 'rgba';
  colorSlider1Val: number;
  colorSlider2Val: number;
  colorSlider3Val: number;

  alphaSliderVal: number;
  sizeSliderVal: number;

  constructor(
    private _socket: SocketsService,
    private brush: DrawchatBrushService
    ) {
    this.colorSlider1Val = 128;
    this.colorSlider2Val = 128;
    this.colorSlider3Val = 128;
    this.alphaSliderVal = 1;
    this.sizeSliderVal = 1;
   }

  ngOnInit() { 
    this.subscribeToColorChanges();
  }

  subscribeToColorChanges() {
    this.brush.colorChanged.subscribe(color => {
      let newVals = color;
      if (this.currMode === 'hsla') {
        newVals = this.rgbToHsl(newVals);
      }
      this.setColorSliderVals(newVals);
    })
  }

  updateColor() {
    let newVals;
    if (this.currMode === 'rgba') {
      newVals = this.getColorSliderVals();
    } else {
      newVals = this.getAlternateModeVals();
    }
    this.brush.changeColorAndAlpha([...newVals, this.alphaSliderVal]);
  }

  updateSize() {
    this.brush.changeSize(this.sizeSliderVal);
    this._socket.drawModule.emitCursorSizeUpdate(this.brush.size);
  }

  changeMode(mode:string) {
    if (mode !== 'rgba' && mode !== 'hsla') { return ;}
    if (this.currMode === mode) { return; }

    const newVals = this.getAlternateModeVals()
    this.setColorSliderVals(newVals);
    this.currMode = mode;
  }

  private getAlternateModeVals() {
    const colorTransform = this.currMode === 'rgba' ? 
      this.rgbToHsl :
      this.hslToRgb;
    return colorTransform(this.getColorSliderVals());
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

  // TODO: implement solid color switch
  cssString() {
    return `rgba(${this.brush.rgba.join(',')})`
  }

  private hslToRgb([h, s, l]: number[]) {
    h /= 360, s /= 100, l /= 100;
    var r, g, b;

    if (s == 0) {
      r = g = b = l; // achromatic
    } else {
      var hue2rgb = function hue2rgb(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      }
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }

  private rgbToHsl([r, g, b]: number[]) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
  }

}
