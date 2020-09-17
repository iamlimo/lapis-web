import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotificationService } from 'app/providers/notification.service';
import { AuthService } from 'app/providers/auth.service';

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.css']
})
export class AddResourceComponent implements OnInit {
  resourceForm: FormGroup;
  photo: string;
  constructor(
    public activeModal: NgbActiveModal,
    private http: HttpClient,
    private notifyService: NotificationService,
    private _fb: FormBuilder,
    private _authService: AuthService) { }

  ngOnInit(): void {
    this.resourceForm = this._fb.group({
      title: ['', [Validators.required ]],
      image: ['', [Validators.required ]],
      description: ['', [Validators.required ]],
      summary:['', [Validators.required ]],
      year: ['', [Validators.required]],
      author: ['', [Validators.required]],
    })
  }

  create() {
   let data = this.resourceForm.value;
   console.log(data);
   const myFormData = new FormData();
   const  httpOptions  = {
       headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this._authService.getToken()
        })
       }
   // Section to append basic product detail
   myFormData.append('summary', data.summary);
   myFormData.append('title', data.title);
   myFormData.append('description', data.description) ;
   myFormData.append('year', data.year);
   myFormData.append('image', data.image);
   myFormData.append('author', data.author);
   this.http.post('https://lapisapi.herokuapp.com/api/book', myFormData , httpOptions )
       .subscribe((data: any) => {
         this.notifyService.showSuccess(data['data'].message, 'Success Message')
         console.log(data);
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
 
       this.resourceForm.get('image').setValue(file);
 
       reader.readAsDataURL(file);
 
       reader.onload = () => {
 
         this.photo = reader.result as string;
 
         this.resourceForm.patchValue({
           fileSource: reader.result
         });
 
       };
     }
   }

}
