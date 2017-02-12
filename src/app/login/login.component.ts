import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'user': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  onSubmit(formValue: any): void {
    console.log(formValue);
    if (this.authService.login(formValue.username, formValue.password)) {
      this.router.navigate(['home']);
    }
  }

}
