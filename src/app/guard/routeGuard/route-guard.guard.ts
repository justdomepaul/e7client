import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router,
  ActivatedRoute
} from '@angular/router';
import { Observable } from 'rxjs';
import { LiffService } from 'src/app/service/liff/liff.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardGuard implements CanActivate {
  constructor(
    private router: Router,
    private liffService: LiffService,
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const nowUrl = state.url.split('?')[0];
    if (next.queryParams.channelID !== undefined) {
      this.liffService.channelID = next.queryParams.channelID;
    }
    if (nowUrl === '/' && next.queryParams.page !== undefined) {
      this.router.navigate([next.queryParams.page], { queryParams: { ...next.queryParams } });
    }
    if (nowUrl === '/' && next.queryParams.page === undefined) {
      this.router.navigateByUrl('/client/rail/railStation');
    }
    return true;
  }
}
