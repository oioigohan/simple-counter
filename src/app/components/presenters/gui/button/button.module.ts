import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { YellowButtonComponent } from './styled/yellow-button/yellow-button.component';
import { WhiteButtonComponent } from './styled/white-button/white-button.component';

const components = [
  ButtonComponent,
  YellowButtonComponent,
  WhiteButtonComponent,
];

@NgModule({
  declarations: [components],
  imports: [CommonModule],
  exports: [components],
})
export class ButtonModule { }
