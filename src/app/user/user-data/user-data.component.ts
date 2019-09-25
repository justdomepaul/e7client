import { Component, OnInit } from '@angular/core';
import { LiffService } from 'src/app/service/liff/liff.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  constructor(
    public liffService: LiffService,
  ) { }

  ngOnInit() {
    this.liffService.liffInit();
  }

}
