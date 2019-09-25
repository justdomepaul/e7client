import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RailStationComponent } from './rail/rail-station/rail-station.component';

const routes: Routes = [
  { path: 'rail/railStation', component: RailStationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
