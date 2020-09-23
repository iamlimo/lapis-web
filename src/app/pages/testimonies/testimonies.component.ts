import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/providers/event.service';

@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.css']
})
export class TestimoniesComponent implements OnInit {
  testimonies: any;

  constructor(private _eventService: EventService) { }

  ngOnInit(): void {
    this._eventService.getAlltestimony().subscribe(data => {
      this.testimonies = data['data'];
      console.log(data);
    })
  }

}
