import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SharedComponentModule } from '../shared-component/shared.component.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeadsComponent } from './leads/leads.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { StudentSubmissionComponent } from './student-submission/student-submission.component';
import { StudentViewSubmissionComponent } from './student-view-submission/student-view-submission.component';
import { StudentComponent } from './student/student.component';
import { VendorComponent } from './vendor/vendor.component';

@NgModule({
  declarations: [
    DashboardComponent,
    StudentComponent,
    LeadsComponent,
    RecruiterComponent,
    StudentSubmissionComponent,
    StudentViewSubmissionComponent,
    VendorComponent

  ],
  imports: [
    MaterialModule,
    RouterModule,
    SharedComponentModule
  ],
  exports: [

  ]
})
export class DashboardModule { }
