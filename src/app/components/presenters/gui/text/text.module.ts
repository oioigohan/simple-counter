import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text/text.component';

const components = [
  TextComponent,
];

@NgModule({
  declarations: [components],
  imports: [CommonModule],
  exports: [components],
})
export class TextModule { }
