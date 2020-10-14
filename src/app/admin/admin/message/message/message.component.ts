import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/providers/event.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private _contactService:EventService) { }

  ngOnInit(): void {
    this._contactService.getContact().subscribe((data:any)=>{
      this.contacts = data['data'];
   })
  }
  delete (id:any) {
    this._contactService.deleteContact(id).subscribe(data){
      console.log(data);
   }
  }
}
