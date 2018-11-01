import { Observable, interval, Subject } from 'rxjs'; 
import { map } from 'rxjs/operators';

export class Timer {
  private startTime: number;
  private currTime: number;
  private restartTime: number;

  observable: Observable<string>;
  onTimeOut: Subject<boolean> = new Subject<boolean>();


  constructor(startTimeInMs: number) {
    this.startTime = startTimeInMs;
    this.restartTime = this.startTime;
    this.currTime = this.startTime;

    this.observable = interval(1000).pipe(
      map(this.updateCurrTime.bind(this)),
      map(this.formatTime.bind(this))
    )
  }

  private updateCurrTime() {
    this.currTime -= 1000;
    if (this.currTime <= 0) {
      this.onTimeOut.next(true);
      this.currTime = this.restartTime;
    }
    return this.currTime;
  }

  private formatTime(t: number) {
    const hours = Math.floor(t / (3600 * 1000))
    t -= hours * (3600 * 1000)
    const minutes = Math.floor(t / (60 * 1000)) % 60
    t -= minutes * (60 * 1000)
    const seconds = Math.floor(t / (1000)) % 1000;
    return [hours + 'h', minutes + 'm', seconds + 's'].join(' ')
  }

  setTime(timeInMs: number) {
    this.startTime = timeInMs;
    this.currTime = this.startTime;
  }

  setRestartTime(timeInMs: number) {
    this.restartTime = timeInMs;
  }

}