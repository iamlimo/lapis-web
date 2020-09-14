import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'app/providers/auth.service';
import { Router } from '@angular/router';
import { authModel } from 'app/models/model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    errorMessage: string = '';
    successMessage: string ='';
  
    register_form: FormGroup = new FormGroup({
      email: new FormControl('', Validators.compose(
        [Validators.required, Validators.minLength(4), Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])+.(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")] 
      )),
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      username: new FormControl('', [Validators.required, Validators.minLength(5)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password_confirmation: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
    passwordMatch: boolean;
    validation_messages = {
      'name': [
        {type: 'required', message: 'Name is required'},
      ],
      'username': [
        {type: 'required', message: 'username is required'},
      ],
      'phone': [
        {type: 'required', message: 'phone number is required'},
      ],
      'email': [
        {type: 'required', message: 'Email is required'},
        {type: 'pattern', message: 'Enter a valid email'}
      ],
      'password': [
        { type: 'required', message: 'Password is required.' },
        { type: 'minlength', message: 'Password must be at least 5 characters long.' }
      ]
    };
    errMessage: any;
    spinner1 = 'sp1';
  
    constructor( 
      private authService: AuthService,
    //   private globals: GlobalsService,
    private spinner: NgxSpinnerService,
      private _router: Router
    ) { }
     ngOnInit() {
     }
     login() {
         console.log('Hello')
         this._router.navigate(['/login'])
     }
  showSpinner(name: string) {
      console.log(name);
    this.spinner.show(name);
  }
    register = (form: authModel) => {
    //   this.globals.showLoader({
    //     content: "Creating your account ..."
    //   })
      this.authService.register(form)
      .subscribe((res: any) => {
        // this.globals.closeLoader();
        this.successMessage = res.message;
        // this.globals.toastAlert(`${this.successMessage}`, {
        //   cssClass: 'toast-default'
        // });
        this._router.navigate(['/login']);
      },
      err => {
        // this.globals.closeLoader();
        this.errorMessage = err['error'];
        this.errorMessage = 'Check Your Internet Connection';
        if (err.status === 0 || err.statusText === 'Unknown Error'){
        //    this.globals.toastAlert(`${this.errorMessage}`, {
        //     cssClass: 'toast-default'
        //   });
         } else if (err.status === 400 || err.statusText === 'Bad Request') {
        //   this.globals.toastAlert(`${this.errMessage}`, {
        //     cssClass: 'toast-default'
        //   });
         }
      })
    }
    checkPassword() {
      this.passwordMatch = (this.register_form.controls.password.value === this.register_form.controls.password_confirmation.value)
        ? true
        : false;
    }
}
