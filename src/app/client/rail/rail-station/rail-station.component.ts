import { Component, OnInit } from '@angular/core';
import { MotcService } from 'src/app/service/motc/motc.service';

@Component({
  selector: 'app-rail-station',
  templateUrl: './rail-station.component.html',
  styleUrls: ['./rail-station.component.scss']
})
export class RailStationComponent implements OnInit {
  city = '';
  TRAStations = [];
  constructor(
    public motcService: MotcService,
  ) { }

  ngOnInit() {

  }

  cityChange(event) {
    console.log('event', event);
    const city = event.value;
    this.motcService.RailTRAStation(city).subscribe(
      (v: any[]) => {
        console.log('v', v);
        this.TRAStations = v;
      }
    );
  }

}
