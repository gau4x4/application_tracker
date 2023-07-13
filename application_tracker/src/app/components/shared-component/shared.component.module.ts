import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { FilterComponent } from './filter/filter.component';
import { HeadbuttongroupComponent } from './headbuttongroup/headbuttongroup.component';
import { SubmissionFormComponent } from './submission-form/submission-form.component';
import { SubmissiontableComponent } from './submissiontable/submissiontable.component';
import { UserTableComponent } from './user-table/user-table.component';

@NgModule({
  declarations: [
    FilterComponent,
    SubmissiontableComponent,
    HeadbuttongroupComponent,
    SubmissionFormComponent,
    UserTableComponent
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    FilterComponent,
    SubmissiontableComponent,
    HeadbuttongroupComponent,
    SubmissionFormComponent,
    UserTableComponent
  ]
})
export class SharedComponentModule { }
