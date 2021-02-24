import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { GuiModule } from '../../components/presenters/gui/gui.module';
import { MaterialModule } from '../../components/material/material.module';
import { DirectivesModule } from '../../directives/directives.module';
import { CounterPageComponent } from './components/pages/counter-page/counter-page.component';
import { HeaderLayoutComponent } from './components/layouts/header-layout/header-layout.component';
import { CounterLayoutComponent } from './components/layouts/counter-layout/counter-layout.component';


@NgModule({
  declarations: [
    CounterPageComponent,
    HeaderLayoutComponent,
    CounterLayoutComponent,
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    GuiModule,
    MaterialModule,
    DirectivesModule,
  ]
})
export class CounterModule { }
