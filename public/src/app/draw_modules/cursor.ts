

export class Cursor {
  x = 0;
  y = 0;

  size = 1;
  label = "";
  isVisible = true;

  constructor() { }

  moveTo(x: number, y: number) {
    this.x = x;
    this.y = y;
    return this;
  }

  setLabel(text:string) {
    this.label = text;
    return this;
  }

  setSize(size:number) {
    this.size = size;
    return this;
  }

  hide() {
    this.isVisible = false;
    return this;
  }

  show() {
    this.isVisible = true;
    return this;
  }
}