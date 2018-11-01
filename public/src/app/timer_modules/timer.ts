import { Observable, interval, Subject } from 'rxjs'; 
import { map, takeWhile, finalize } from 'rxjs/operators';

export class Timer {
  private startTime: number;
  private currTime: number;

  observable: Observable<string>;
  onTimeOut: Subject<boolean> = new Subject<boolean>();


  constructor(startTimeInMs: number) {
    this.startTime = startTimeInMs;
    this.currTime = this.startTime;

    this.observable = interval(1000).pipe(
      map(val => {
        this.currTime = this.startTime - val * 1000;
        return this.currTime;
      }),
      map(timeInMs => {
        if (timeInMs <= 0) {
          this.onTimeOut.next(true);
          this.currTime = this.startTime;
        }
        return timeInMs;
      }),
      map(timeInMs => this.formatTime(timeInMs)))
  }

  setTime(timeInMs: number) {
    this.startTime = timeInMs;
  }
  
  addTime(timeInMs: number) {
    this.startTime += timeInMs;
  }


  private formatTime(t: number) {
    const hours = Math.floor(t / (3600 * 1000))
    t -= hours * (3600 * 1000)
    const minutes = Math.floor(t / (60 * 1000)) % 60
    t -= minutes * (60 * 1000)
    const seconds = Math.floor(t / (1000)) % 1000;
    return [hours + 'h', minutes + 'm', seconds + 's'].join(' ')
  }
}