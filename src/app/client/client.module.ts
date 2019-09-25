import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { RailStationComponent } from './rail/rail-station/rail-station.component';
import { MaterialModule } from '../module/material/material.module';

@NgModule({
  declarations: [RailStationComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule,
  ]
})
export class ClientModule { }
