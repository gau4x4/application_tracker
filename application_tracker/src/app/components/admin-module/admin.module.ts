import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SharedComponentModule } from '../shared-component/shared.component.module';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminAddSubmissionsComponent } from './admin-add-submissions/admin-add-submissions.component';
import { AdminSubmissonsCenterComponent } from './admin-submissons-center/admin-submissons-center.component';
import { AdminComponent } from './admin/admin.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

@NgModule({
  declarations: [
    AdminComponent,
    AddUserComponent,
    ManageUsersComponent,
    AdminAddSubmissionsComponent,
    AdminSubmissonsCenterComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    SharedComponentModule
  ],
  exports: [

  ]
})
export class AdminModule { }
