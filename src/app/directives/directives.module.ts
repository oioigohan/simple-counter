import { NgModule } from '@angular/core';
import { NoTagDirective } from './no-tag.directive';

const directives = [
  NoTagDirective,
];

@NgModule({
  declarations: [directives],
  imports: [],
  exports: [directives],
})
export class DirectivesModule { }
