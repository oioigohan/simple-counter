import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { ImageModule } from './image/image.module';
import { TextModule } from './text/text.module';

const modules = [
  ButtonModule,
  ImageModule,
  TextModule,
];

@NgModule({
  declarations: [],
  imports: [modules],
  exports: [modules],
})
export class GuiModule { }
