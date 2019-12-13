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
  StationID = { A: '', B: '' };
  RailStations: { [key: string]: RailStation[] } = {
    A: [],
    B: [],
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
    const dialogRef = this.dialog.open(RailTrainTimeTableDialogComponent, {
      width: '80%',
      height: '80%',
      data: this.StationID,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  cityChange(city, RailStations) {
    this.motcService.RailTRAStation(city).then((result) => {
      this.RailStations[RailStations] = this.motcService.RailStations;
      this.StationID[RailStations] = this.motcService.RailStations[0].StationID;
    }).catch((err) => {

    });
  }
}
