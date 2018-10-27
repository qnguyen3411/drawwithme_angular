import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MouseposService {

  // Given a mouse event and element, find the mouse position relative to the element's
  // top left corner
 getMousePos(event: MouseEvent, elem: HTMLElement) {
    const rect = elem.getBoundingClientRect();
    const zoom = parseFloat(elem.style.zoom || '1');
    return {
      x: Math.round(event.clientX / zoom - rect.left),
      y: Math.round(event.clientY / zoom - rect.top)
    };
  };

  constructor() { }
}
