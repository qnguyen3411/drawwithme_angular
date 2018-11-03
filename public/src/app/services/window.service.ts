import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor() {
  }

  onWindowUnload() {
    return Observable.create((observer) => {
      window.onunload = () => { observer.next(); }
    });
  }

}
