import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-white-button, [app-white-button]',
  templateUrl: './white-button.component.html',
  styleUrls: ['./white-button.component.scss']
})
export class WhiteButtonComponent extends ButtonComponent implements OnInit {

  constructor() { super(); }

  ngOnInit(): void {
  }

}
