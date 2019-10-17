import { Component, OnInit } from '@angular/core';
import { LiffService } from './service/liff/liff.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'e7client';

  constructor(
    private liffService: LiffService,
  ) { }
  ngOnInit() {
    this.liffService.LIFFinit();
  }
}
