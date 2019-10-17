import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardGuard } from './guard/routeGuard/route-guard.guard';
import { LiffGuard } from './guard/liff/liff.guard';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'client/rail/railStation' },
  {
    path: '', canActivate: [RouteGuardGuard], children: [
      { path: 'user', canActivate: [LiffGuard], loadChildren: './user/user.module#UserModule' },
      { path: 'client', loadChildren: './client/client.module#ClientModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
