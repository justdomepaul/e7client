import { Component, OnInit } from '@angular/core';
declare let VConsole: any;
@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.scss']
})
export class ClientLayoutComponent implements OnInit {
  showCount = 0;
  constructor() { }

  ngOnInit() {
  }

  showVConsole() {
    const vConsole = new VConsole();
  }
}
