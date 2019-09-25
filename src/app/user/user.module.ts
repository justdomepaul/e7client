import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDataComponent } from './user-data/user-data.component';

@NgModule({
  declarations: [UserDataComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
