import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin-module/admin.module';
import { DashboardModule } from './dashboard-module/dashboard.module';
import { MainViewModule } from './main-view-module/mainview.module';
import { OperationModule } from './operation-module/operation.module';
import { SharedComponentModule } from './shared-component/shared.component.module';
import { SubmissionModule } from './submission-module/submission.module';

@NgModule({
  imports: [

  ],
  exports: [
    AdminModule,
    DashboardModule,
    SubmissionModule,
    OperationModule,
    MainViewModule,
  ]
})
export class MainModule { }
