import { Component, OnInit } from '@angular/core';
import { MotcService } from 'src/app/service/motc/motc.service';
import { RailStation } from 'src/app/interface/rail';
import { MatDialog } from '@angular/material';
// tslint:disable-next-line: max-line-length
import { RailTrainTimeTableDialogComponent } from 'src/app/tools/dialog/rail-train-time-table-dialog/rail-train-time-table-dialog.component';

@Component({
  selector: 'app-rail-daily-time-table',
  templateUrl: './rail-daily-time-table.component.html',
  styleUrls: ['./rail-daily-time-table.component.scss']
})
export class RailDailyTimeTableComponent implements OnInit {
  trainINFO: { stationID, city: any; railStations: { [key: string]: RailStation[] } } = {
    stationID: { A: '', B: '' },
    railStations: { A: [], B: [] },
    city: { A: '', B: '' },
  };

  constructor(
    public motcService: MotcService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    // this.motcService.DailyTimetable('4220', '5050', '2019-12-04');
  }

  openDialog(trainNo: string) {
    this.motcService.RailTRAGeneralTrainTimetableTrainNo(trainNo);
    this.dialog.open(RailTrainTimeTableDialogComponent, {
      width: '80%',
      height: '80%',
      data: this.trainINFO.stationID,
    });
  }


  cityChange(city, RailStations) {
    this.motcService.RailTRAStation(city).then((result) => {
      this.trainINFO.railStations[RailStations] = this.motcService.RailStations;
      this.trainINFO.stationID[RailStations] = this.motcService.RailStations[0].StationID;
    }).catch((err) => {

    });
  }

  switchStation() {
    // city
    this.trainINFO.city.C = this.trainINFO.city.A;
    this.trainINFO.city.A = this.trainINFO.city.B;
    this.trainINFO.city.B = this.trainINFO.city.C;
    // station
    this.trainINFO.railStations.C = this.trainINFO.railStations.A;
    this.trainINFO.railStations.A = this.trainINFO.railStations.B;
    this.trainINFO.railStations.B = this.trainINFO.railStations.C;
    // stationId
    this.trainINFO.stationID.C = this.trainINFO.stationID.A;
    this.trainINFO.stationID.A = this.trainINFO.stationID.B;
    this.trainINFO.stationID.B = this.trainINFO.stationID.C;
  }
}
