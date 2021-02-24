import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-counter-layout, [app-counter-layout]',
  templateUrl: './counter-layout.component.html',
  styleUrls: ['./counter-layout.component.scss']
})
export class CounterLayoutComponent implements OnInit {

  @Input() count = 0;
  @Output() countUp = new EventEmitter();
  @Output() clear = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
