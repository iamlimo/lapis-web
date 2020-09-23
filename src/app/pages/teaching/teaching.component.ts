import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/providers/event.service';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent implements OnInit {
  teachings: any;

  constructor(private _eventService: EventService) { }

  ngOnInit(): void {
    this._eventService.getTeachings().subscribe(data => {
      this.teachings = data['data'];
      console.log(data);
    })
  }

}
