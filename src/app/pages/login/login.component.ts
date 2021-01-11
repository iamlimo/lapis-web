import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/providers/auth.service';
import { authModel } from 'app/models/model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  loginForm: FormGroup = this.formBuilder.group({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    password: new FormControl('', Validators.compose([
      Validators.minLength(5),
      Validators.required
    ])),
  });
  errorMessage: string;
  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };
  errMessage: any;
  
 
  constructor( 
              private formBuilder: FormBuilder,
              private _router: Router,
              private _authService: AuthService,
              private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {

  }
  // showSpinner() {
  //   this.spinner.show();
  //   setTimeout(() => {
  //     this.spinner.hide();
  //   }, 3000);
  // }
  loginUser(form: authModel) {
    console.log(form);
    this._authService.login(form)
    .subscribe(data => {
             this._authService.setToken(data['data']); 
             this._authService.getUserInfo().subscribe(userinfo => { 
               console.log(userinfo);
               // tslint:disable-next-line: max-line-length
                if( userinfo['data'].role === "user" ) {
                  this._router.navigate(['/user']);
                    setTimeout(() => {
                      window.location.reload();
                    }, 1000)
                
                } else  if ( userinfo['data'].role === "admin") {
                  this._router.navigate(['/admin']);
                  setTimeout(() => {
                    window.location.reload();
                  }, 1000)
                }             
               
      });
    },
    // tslint:disable-next-line:no-shadowed-variable
    err => {
      this.errMessage = err.error.error;
      this.errorMessage = 'Check Your Internet Connection';
      if (err.status === 0 || err.statusText === 'Unknown Error'){
       } else if (err.status === 400 || err.statusText === 'Bad Request') {
       }
    });
  }
}
