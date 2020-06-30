import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import { GraficoBarraHorizontalComponent } from "./grafico-barra-horizontal/graficoBarraHorizontalComponent";

import { RouterModule } from '@angular/router';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [NavbarComponent, GraficoBarraHorizontalComponent],
  exports:[ NavbarComponent, GraficoBarraHorizontalComponent ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ]
})
export class ComponentsModule { }
