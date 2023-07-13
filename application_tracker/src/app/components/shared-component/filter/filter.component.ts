import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit() {
  }
  submissionHandler() {

    // this.sub_Details.unshift(submisson);
  }
}
