import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  ) { }
  ngOnInit() {
    this.route.queryParams.subscribe(
      (v) => {
        console.log(v);
        if (v.page !== undefined) {
          this.router.navigateByUrl(v.page);
        }
      }
    );
  }
}
