import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/providers/event.service';
import { NotificationService } from 'app/providers/notification.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: any;

  constructor(private _eventService: EventService, private notification: NotificationService) { }

  ngOnInit(): void {
    this._eventService.getAllevents().subscribe(data => {
      this.events = data['data'];
      console.log(this.events);
    })
  }
 attend() {
   
 }
}
