import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image, [app-image]',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() src = '';
  @Input() alt = '';

  constructor() { }

  ngOnInit(): void {
  }

}
