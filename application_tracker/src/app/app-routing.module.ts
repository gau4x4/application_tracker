import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/main-view-module/login/login.component';
import { SignupComponent } from './components/main-view-module/signup/signup.component';
import { PivotComponent } from './components/main-view-module/pivot/pivot.component';
import { VendorComponent } from './components/dashboard-module/vendor/vendor.component';
import { RecruiterComponent } from './components/dashboard-module/recruiter/recruiter.component';
import { StudentComponent } from './components/dashboard-module/student/student.component';
import { LeadsComponent } from './components/dashboard-module/leads/leads.component';
import { DashboardComponent } from './components/dashboard-module/dashboard/dashboard.component';
import { AdminComponent } from './components/admin-module/admin/admin.component';
import { ProfileComponent } from './components/main-view-module/profile/profile.component';
import { OperationsComponent } from './components/operation-module/operations/operations.component';
import { SubmissionComponent } from './components/submission-module/submission/submission.component';
import { AddUserComponent } from './components/admin-module/add-user/add-user.component';
import { ManageUsersComponent } from './components/admin-module/manage-users/manage-users.component';
import { AdminAddSubmissionsComponent } from './components/admin-module/admin-add-submissions/admin-add-submissions.component';
import { AdminSubmissonsCenterComponent } from './components/admin-module/admin-submissons-center/admin-submissons-center.component';
import { StudentSubmissionComponent } from './components/dashboard-module/student-submission/student-submission.component';
import { StudentViewSubmissionComponent } from './components/dashboard-module/student-view-submission/student-view-submission.component';
import { SubmissionAddMainComponent } from './components/submission-module/submission-add-main/submission-add-main.component';
import { SubmissionMainCenterComponent } from './components/submission-module/submission-main-center/submission-main-center.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  {
    path: 'home', component: PivotComponent, children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          {
            path: 'lead',
            component: LeadsComponent,
          },
          {
            path: 'student',
            component: StudentComponent,
            children: [
              {
                path: 'profile',
                component: ProfileComponent,
              },
              {
                path: 'addsubmissions', component: StudentSubmissionComponent
              },
              {
                path: 'submitioncenter', component: StudentViewSubmissionComponent
              }
            ]
          },
          {
            path: 'recruiter',
            component: RecruiterComponent,
          },
          {
            path: 'vendor',
            component: VendorComponent,
          }
        ]
      },
      {
        path: 'submission',
        component: SubmissionComponent,
        children: [
          {
            path: 'addsubmissions', component: SubmissionAddMainComponent
          },
          {
            path: 'submitioncenter', component: SubmissionMainCenterComponent
          }
        ]
      },
      {
        path: 'admin',
        component: AdminComponent, children: [
          {
            path: 'profile', component: ProfileComponent
          },
          {
            path: 'adduser', component: AddUserComponent
          },
          {
            path: 'manageuser', component: ManageUsersComponent
          },
          {
            path: 'addsubmissions', component: AdminAddSubmissionsComponent
          },
          {
            path: 'submitioncenter', component: AdminSubmissonsCenterComponent
          }
        ]
      },
      {
        path: 'operation', component: OperationsComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
