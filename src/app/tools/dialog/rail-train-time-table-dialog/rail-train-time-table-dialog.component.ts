import { Component, OnInit, Inject } from '@angular/core';
import { MotcService } from 'src/app/service/motc/motc.service';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-rail-train-time-table-dialog',
  templateUrl: './rail-train-time-table-dialog.component.html',
  styleUrls: ['./rail-train-time-table-dialog.component.scss']
})
export class RailTrainTimeTableDialogComponent implements OnInit {

  constructor(
    public motcService: MotcService,
    @Inject(MAT_DIALOG_DATA) public data: { A: '', B: '' },
  ) { }

  ngOnInit() {
  }

}
