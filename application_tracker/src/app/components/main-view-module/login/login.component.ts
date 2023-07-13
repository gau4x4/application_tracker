import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: any;
  constructor(private router: Router) {

  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onLogin(event: any): void {
    this.router.navigate(['/home']);
  }
  getErrorMessage() {
    if (this.loginForm?.get('email').hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginForm?.get('email').hasError('email') ? 'Not a valid email' : '';
  }
}
