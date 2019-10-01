import { Component, OnInit } from '@angular/core';
import { MotcService } from 'src/app/service/motc/motc.service';

@Component({
  selector: 'app-rail-station',
  templateUrl: './rail-station.component.html',
  styleUrls: ['./rail-station.component.scss']
})
export class RailStationComponent implements OnInit {
  TRAStations = [];
  RailStationTimetables = [];
  nowTime = new Date().getHours() + ':' + new Date().getMinutes();
  constructor(
    public motcService: MotcService,
  ) { }

  ngOnInit() {
    this.motcService.RailTRAStation(this.motcService.defaultCity);
    this.motcService.RailTRADailyTimetableStation(this.motcService.defaultStationID);
  }

  cityChange(event) {
    const city = event.value;
    this.motcService.RailTRAStation(city);
  }

  stationChange(event) {
    const stationID = event.value;
    this.motcService.RailTRADailyTimetableStation(stationID);
  }

}
