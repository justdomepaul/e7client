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
    return this.liffService.LIFFinit();
  }
}
