import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { PivotComponent } from './pivot/pivot.component';
import { ProfileComponent } from './profile/profile.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    LoginComponent,
    PivotComponent,
    SignupComponent,
    SidenavComponent,
    ProfileComponent,
    FooterComponent,
    HeaderComponent,
    MainComponentComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MainComponentComponent
  ]
})
export class MainViewModule { }
