import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from 'app/providers/event.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  events: any;

  constructor(config: NgbCarouselConfig,private _eventService: EventService) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  ngOnInit() {
    this._eventService.getAllevents().subscribe(data => {
      this.events = data['data'];
      console.log(this.events);
    })
  }
  
 scrollMe(){
   
   var elem = document.getElementById("welcome"); 
    elem.scrollIntoView(); 
 }

}
