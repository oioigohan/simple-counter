import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  count = 0;
  count$ = new BehaviorSubject<number>(0);

  constructor() { }

  countUp(): void {
    this.count++;
    this.count$.next(this.count);
  }

  clear(): void {
    this.count = 0;
    this.count$.next(this.count);
  }

}
