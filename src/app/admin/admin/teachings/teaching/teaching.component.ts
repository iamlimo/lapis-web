import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/providers/event.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddTeachingComponent } from '../add-teaching/add-teaching.component';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent implements OnInit {
  results: any;

  constructor(private modalService: NgbModal,private _teachingsService: EventService) { }

  ngOnInit(): void {
    this._teachingsService.getTeachings().subscribe((data: any) => {
      this.results = data['data'];
    })
  }
  open() {
    const modalRef = this.modalService.open(AddTeachingComponent);
    modalRef.componentInstance.name = 'World';
 }
}
