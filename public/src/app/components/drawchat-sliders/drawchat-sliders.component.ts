import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-drawchat-sliders',
  templateUrl: './drawchat-sliders.component.html',
  styleUrls: ['./drawchat-sliders.component.css']
})
export class DrawchatSlidersComponent implements OnInit, OnChanges {
  
  @Input() brushSettings;

  currMode = 'rgba';
  colorSlider1Val: number;
  colorSlider2Val: number;
  colorSlider3Val: number;

  alphaSliderVal: number;
  sizeSliderVal: number;

  constructor() {
    this.colorSlider1Val = 128;
    this.colorSlider2Val = 128;
    this.colorSlider3Val = 128;
    this.alphaSliderVal = 1;
    this.sizeSliderVal = 1;
   }

  ngOnInit() { }

  ngOnChanges(change: SimpleChanges) {
    let newVals = this.brushSettings.rgba;
    if (this.currMode === 'hsla') {
      newVals = this.rgbToHsl(newVals);
    }
    this.setColorSliderVals(newVals);
  }

  updateBrushSettings() {
    let newVals;
    if (this.currMode === 'rgba') {
      newVals = this.getColorSliderVals();
    } else {
      newVals = this.getAlternateModeVals();
    }

    this.brushSettings['rgba'] = [...newVals, this.alphaSliderVal];
    this.brushSettings['size'] = this.sizeSliderVal;
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

  cssString() {
    return `rgba(${this.brushSettings.rgba.join(',')})`
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
