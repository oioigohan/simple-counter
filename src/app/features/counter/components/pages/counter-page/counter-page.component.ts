import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../../services/counter.service';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.scss']
})
export class CounterPageComponent implements OnInit {

  count$ = this.counterService.count$;

  constructor(
    private readonly counterService: CounterService,
  ) { }

  ngOnInit(): void {
  }

  countUp(): void {
    this.counterService.countUp();
  }

  clear(): void {
    this.counterService.clear();
  }

}
