import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEventComponent } from '../add-event/add-event.component';
import { EventService } from 'app/providers/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: any;
  eventId: any;
  eventInfo: any;

  constructor(private modalService: NgbModal, private eventService: EventService) { }

  ngOnInit(): void {
    this.getEvents();
  }
  open() {
    const modalRef = this.modalService.open(AddEventComponent);
    modalRef.componentInstance.name = 'World';
}
// Function to view event detail
view(data: any) {
   this.eventInfo = data;
}
// Function to get event
getEvents() {
  this.eventService.getAllevents().subscribe((data: any) => {
    this.events = data['data'];
    console.log(this.events);
  })
}
}
