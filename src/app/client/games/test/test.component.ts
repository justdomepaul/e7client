import { Component, OnInit } from '@angular/core';
import { LiffService } from 'src/app/service/liff/liff.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  qrcode = '';
  constructor(
    private liffService: LiffService,
  ) { }

  ngOnInit() {
    this.liffService.LIFFinit().then((result) => {

    }).catch((err) => {

    });
  }

  scanCode() {
    liff.scanCode().then(result => {
      this.qrcode = result;
    });
  }

}
