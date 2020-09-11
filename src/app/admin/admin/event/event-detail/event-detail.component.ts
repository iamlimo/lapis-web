import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  @Input() eventInfo: any;
  constructor() { }

  ngOnInit(): void {
  }

}
