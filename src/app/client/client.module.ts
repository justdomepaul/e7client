import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { RailStationComponent } from './rail/rail-station/rail-station.component';
import { MaterialModule } from '../module/material/material.module';
import { BusRouteComponent } from './bus/bus-route/bus-route.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';

@NgModule({
  declarations: [RailStationComponent, BusRouteComponent, ClientLayoutComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule,
  ]
})
export class ClientModule { }
