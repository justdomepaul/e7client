import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'client/rail/railStation' },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: 'client', loadChildren: './client/client.module#ClientModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
