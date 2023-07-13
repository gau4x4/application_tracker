import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SharedComponentModule } from '../shared-component/shared.component.module';
import { SubmissionAddMainComponent } from './submission-add-main/submission-add-main.component';
import { SubmissionMainCenterComponent } from './submission-main-center/submission-main-center.component';
import { SubmissionComponent } from './submission/submission.component';

@NgModule({
  declarations: [
    SubmissionComponent,
    SubmissionAddMainComponent,
    SubmissionMainCenterComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    SharedComponentModule,
  ],
  exports: [

  ]
})
export class SubmissionModule { }
