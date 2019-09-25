import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LiffService } from './service/liff/liff.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'e7client';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private liffService: LiffService,
  ) { }
  ngOnInit() {
    this.route.queryParams.subscribe(
      (v) => {
        console.log('queryParams', v);
        if (v.channelID !== undefined) {
          this.liffService.channelID = v.channelID;
        }
        if (v.page !== undefined) {
          this.router.navigate([v.page], { queryParams: { ...v } });
        }
      }
    );
  }
}
