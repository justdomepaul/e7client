import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  qrcode = '';
  constructor(
  ) { }

  ngOnInit() {

  }

  scanCode() {
    liff.scanCode().then(result => {
      this.qrcode = result;
    });
  }

}
