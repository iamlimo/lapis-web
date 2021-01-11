import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from 'app/providers/event.service';
import { teachingsModel } from 'app/models/model';

@Component({
  selector: 'app-add-teaching',
  templateUrl: './add-teaching.component.html',
  styleUrls: ['./add-teaching.component.css']
})
export class AddTeachingComponent implements OnInit {
  focus;
  teachingForm: FormGroup;
  photo: string;
  errMessage: any;
  errorMessage: string;
  constructor(
    public activeModal: NgbActiveModal,
    // private notifyService: NotificationService,
    private _fb: FormBuilder,
    private _teachingsService: EventService) { }

  ngOnInit(): void {
    this.teachingForm = this._fb.group({
      title: ['', [Validators.required ]],
      link: ['', [Validators.required ]],
    })
  }

  createTeaching() {
    console.log(this.teachingForm.value);
    this._teachingsService.postTeachings(this.teachingForm.value)
    .subscribe(data => {
      console.log(data)
            //  this._authService.setToken(data['data']); 
      //        this._authService.getUserInfo().subscribe(userinfo => { 
      //          console.log(userinfo);
      //          // tslint:disable-next-line: max-line-length
      //           if( userinfo['data'].role === "user" ) {
      //             this._router.navigate(['/user']);
      //               setTimeout(() => {
      //                 window.location.reload();
      //               }, 1000)
                
      //           } else  if ( userinfo['data'].role === "admin") {
      //             this._router.navigate(['/admin']);
      //             setTimeout(() => {
      //               window.location.reload();
      //             }, 1000)
      //           }             
               
      // });
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
