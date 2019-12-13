import { Component, OnInit } from '@angular/core';
import { MotcService } from 'src/app/service/motc/motc.service';
import { RailStation } from 'src/app/interface/rail';

@Component({
  selector: 'app-rail-daily-time-table',
  templateUrl: './rail-daily-time-table.component.html',
  styleUrls: ['./rail-daily-time-table.component.scss']
})
export class RailDailyTimeTableComponent implements OnInit {
  StationID = { A: '' };
  RailStations: { [key: string]: RailStation[] } = {
    A: [],
    B: [],
  };
  constructor(
    public motcService: MotcService,
  ) { }

  ngOnInit() {
    // this.motcService.DailyTimetable('4220', '5050', '2019-12-04');
  }

  tt(e) {
    console.log('ttI', e);
  }

  cityChange(city, RailStations) {
    this.motcService.RailTRAStation(city).then((result) => {
      this.RailStations[RailStations] = this.motcService.RailStations;
      this.StationID[RailStations] = this.motcService.RailStations[0].StationID;
    }).catch((err) => {

    });
  }
}
