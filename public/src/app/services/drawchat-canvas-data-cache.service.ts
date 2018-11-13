import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawchatCanvasDataCacheService {

  constructor() {
    setTimeout(this.resetCache, 20000); 
  }

  setCache(cacheData, roomId) {
    sessionStorage.setItem('canvasCacheRoomId', roomId);
    sessionStorage.setItem('canvasCache', cacheData);
    setTimeout(this.resetCache, 20000);
  }

  resetCache() {
    sessionStorage.removeItem('canvasCacheRoomId');
    sessionStorage.removeItem('canvasCache');
  }

  getCachedData(roomId) {
    if(sessionStorage.getItem('canvasCacheRoomId') === roomId) {
      
      return sessionStorage.getItem('canvasCache');
    } else { 
      return null ;
    }
  } 

}
