import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-submission-form',
  templateUrl: './submission-form.component.html',
  styleUrls: ['./submission-form.component.css']
})
export class SubmissionFormComponent implements OnInit {
  submissionForm = new FormGroup({
    submissionDate: new FormControl(),
    vendorCompany: new FormControl(),
    emailId: new FormControl(),
    phoneNumber: new FormControl(),
    implementationClient: new FormControl(),
    clientName: new FormControl(),
    payRate: new FormControl(),
    isSubmitted: new FormControl(),
    typeOwnRecruiter: new FormControl(),
    submissionStatus: new FormControl(),
    leadName: new FormControl(),
  });

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  panelOpenState = false;

  ngAfterViewInit() {
  }
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    const formObj = this.submissionForm.getRawValue(); // {name: '', description: ''}
    const serializedForm = JSON.stringify(formObj);
  }

  ngOnInit() {

  }

  submissionHandler() {
  }
  addNewSubmission() {
    const formObj = this.submissionForm.getRawValue();
    const serializedForm = JSON.stringify(formObj);
    console.log(this.submissionForm.value);
  }
}