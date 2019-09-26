import { Component, OnInit } from '@angular/core';
import { MotcService } from 'src/app/service/motc/motc.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bus-route',
  templateUrl: './bus-route.component.html',
  styleUrls: ['./bus-route.component.scss']
})
export class BusRouteComponent implements OnInit {

  constructor(
    public motcService: MotcService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (v) => {
        if (v.City !== undefined && v.RouteName !== undefined) {
          this.motcService.BusEstimatedTimeOfArrivalCity(v.City, v.RouteName);
        } else {
          this.motcService.BusEstimatedTimeOfArrivalCity('Kaohsiung', '8041C');
        }
      },
    );
  }

  scroll() {
    const target = document.getElementsByClassName('grey');
    const el = target[target.length - 2];
    el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}
