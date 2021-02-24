import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { GuiModule } from '../../components/presenters/gui/gui.module';
import { MaterialModule } from '../../components/material/material.module';
import { DirectivesModule } from '../../directives/directives.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CounterRoutingModule,
    GuiModule,
    MaterialModule,
    DirectivesModule,
  ]
})
export class CounterModule { }
