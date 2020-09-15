import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/providers/event.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { ViewResourceComponent } from './view-resource/view-resource.component';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

  results: any;

  constructor(private modalService: NgbModal, private _teachingsService: EventService) { }

  ngOnInit(): void {
    this._teachingsService.getBooks().subscribe((data: any) => {
      this.results = data['data'];
      console.log(this.results);
    })
  }
  open() {
    const modalRef = this.modalService.open(AddResourceComponent);
    modalRef.componentInstance.name = 'World';
 }
// View resource
    viewResource(data) {
      const modalRef  = this.modalService.open(ViewResourceComponent);
      modalRef.componentInstance.detail = data;
    }
}
