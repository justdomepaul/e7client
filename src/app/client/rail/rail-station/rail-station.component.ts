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
    this.motcService.RailTRAStation(this.motcService.defaultCity).then((result) => {
      this.motcService.RailTRADailyTimetableStation(this.motcService.defaultStationID);
    }).catch((err) => {

    });
  }

  stationChange(event) {
    const stationID = event.value;
    this.motcService.RailTRADailyTimetableStation(stationID);
  }

}
