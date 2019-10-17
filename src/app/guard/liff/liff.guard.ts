import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { LiffService } from 'src/app/service/liff/liff.service';

@Injectable({
  providedIn: 'root'
})
export class LiffGuard implements CanActivate {
  constructor(
    private liffService: LiffService,
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // if (document.getElementById('liffid') !== null) {
    //   return true;
    // }
    // const liffScript = document.createElement('script');
    // liffScript.onload = () => {
    //   return this.liffService.LIFFinit();
    // };
    // liffScript.src = 'https://static.line-scdn.net/liff/edge/2.1/sdk.js';
    // document.getElementsByTagName('head')[0].appendChild(liffScript);
    return this.liffService.LIFFinit();
  }
}
