import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawchatCanvasDataCacheService {

  constructor() {
    setTimeout(this.resetCache, 20000); 
  }

  setCache(cacheData, roomId) {
    localStorage.setItem('canvasCacheRoomId', roomId);
    localStorage.setItem('canvasCache', cacheData);
    setTimeout(this.resetCache, 20000);
  }

  resetCache() {
    localStorage.removeItem('canvasCacheRoomId');
    localStorage.removeItem('canvasCache');
  }

  getCachedData(roomId) {
    if(localStorage.getItem('canvasCacheRoomId') === roomId) {
      return localStorage.getItem('canvasCache');
    } else { 
      return null ;
    }
  } 

}
