import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  submissionDate: Date = new Date();
  vendorCompany: string = 'Microsoft';
  emailId: string = 'email';
  phoneNumber: string = '123-456-3456';
  implementationClient: string = 'Microsoft';
  clientName: string = 'Google';
  payRate: number = 10.0;
  isSubmitted: boolean = false;
  typeOwnRecruiter: string = '';
  submissionStatus: string = '';
  leadName: string = 'Lead';
  sub_Details = [
    {
      fn: "Mark",
      ln: "Otto",
      gn: "Mark",
      tn: "Mark",
      cn: "Mark",
      kn: "Gp"
    },
    {
      fn: "Mark",
      ln: "Otto",
      gn: "Mark",
      tn: "Mark",
      cn: "Mark",
      kn: "Gp"
    }, {
      fn: "Mark",
      ln: "Otto",
      gn: "Mark",
      tn: "Mark",
      cn: "Mark",
      kn: "Gp"
    }
  ];
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  panelOpenState = false;
  constructor() { }

  ngOnInit() {
  }
  submissionHandler() {

    // this.sub_Details.unshift(submisson);
  }
}
