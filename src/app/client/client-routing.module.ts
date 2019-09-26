import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RailStationComponent } from './rail/rail-station/rail-station.component';
import { BusRouteComponent } from './bus/bus-route/bus-route.component';

const routes: Routes = [
  { path: 'rail/railStation', component: RailStationComponent },
  { path: 'bus/busRoute', component: BusRouteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
