import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-yellow-button, [app-yellow-button]',
  templateUrl: './yellow-button.component.html',
  styleUrls: ['./yellow-button.component.scss']
})
export class YellowButtonComponent extends ButtonComponent implements OnInit {

  constructor() { super(); }

  ngOnInit(): void {
  }

}
