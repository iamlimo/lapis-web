import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'app/providers/auth.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NotificationService } from 'app/providers/notification.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  focus;
  eventForm: FormGroup;
  photo: string;
  constructor(
    public activeModal: NgbActiveModal,
    private http: HttpClient,
    private notifyService: NotificationService,
    private _fb: FormBuilder,
    private _authService: AuthService) { }

  ngOnInit(): void {
    this.eventForm = this._fb.group({
      title: ['', [Validators.required ]],
      banner: ['', [Validators.required ]],
      description: ['', [Validators.required ]],
      details: ['', [Validators.required ]],
      event_date: ['', [Validators.required]]
    })
  }

  create() {
    let data = this.eventForm.value;

   const myFormData = new FormData();
   const  httpOptions  = {
       headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this._authService.getToken()
        })
       }
   // Section to append basic product detail
   myFormData.append('banner', data.banner);
   myFormData.append('title', data.title);
   myFormData.append('description', data.description) ;
   myFormData.append('details', data.details);
   myFormData.append('event_date', data.event_date);
   this.http.post('https://lapisapi.herokuapp.com/api/event', myFormData , httpOptions )
       .subscribe((data: any) => {
         this.notifyService.showSuccess(data['data'].message, 'Success Message')
         this.activeModal.dismiss();
         setTimeout(() => {
          window.location.reload();
        }, 1000)
       },
       err => {
        console.log(err);
       });
  }
   // Function to get image file brand logo
   onFileChange(event: any) {
     const reader = new FileReader();
     if (event.target.files.length > 0) {
       const file = event.target.files[0];
 
       this.eventForm.get('banner').setValue(file);
 
       reader.readAsDataURL(file);
 
       reader.onload = () => {
 
         this.photo = reader.result as string;
 
         this.eventForm.patchValue({
           fileSource: reader.result
         });
 
       };
     }
   }
}
