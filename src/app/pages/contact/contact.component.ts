import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { contactModel } from 'app/models/model';
import { EventService } from 'app/providers/event.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact_form: FormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(5)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(5)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.minLength(5)]),
    message: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });
  errorMessage: any;
  successMessage: any;
  constructor(private _contactService: EventService) { }

  ngOnInit(): void {
  }
  createContact = (form: contactModel) => {
    this._contactService.contact(form)
    .subscribe((res: any) => {
      this.successMessage = res.message;
      console.log(res);
    },
    err => {
      // this.globals.closeLoader();
      this.errorMessage = err['error'];
      this.errorMessage = 'Check Your Internet Connection';
      if (err.status === 0 || err.statusText === 'Unknown Error'){
       } else if (err.status === 400 || err.statusText === 'Bad Request') {
       }
    })
  }
  }
