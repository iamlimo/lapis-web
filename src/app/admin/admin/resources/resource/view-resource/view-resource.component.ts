import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-resource',
  templateUrl: './view-resource.component.html',
  styleUrls: ['./view-resource.component.css']
})
export class ViewResourceComponent implements OnInit {
  @Input() public detail;
  constructor() { }

  ngOnInit(): void {
    console.log(this.detail);
  }

}
