import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Submission } from '../../models/submission';


@Component({
  selector: 'app-Submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit, OnChanges {
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
  submissionDTO: Submission[] = new Array<Submission>();

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  panelOpenState = false;
  displayedColumns: string[] = ['submissionForm', 'vendorCompany', 'emailId', 'phoneNumber', 'implementationClient', 'clientName', 'payRate', 'isSubmitted', 'typeOwnRecruiter', 'submissionStatus', 'leadName'];
  dataSource = new MatTableDataSource<Submission>(this.submissionDTO);

  @ViewChild(MatPaginator) paginator = null;
  constructor() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnChanges(changes: SimpleChanges): void {
    const formObj = this.submissionForm.getRawValue(); // {name: '', description: ''}
    const serializedForm = JSON.stringify(formObj);
    this.submissionDTO.push(JSON.parse(serializedForm));
  }

  ngOnInit() {
    this.submissionDTO.push({
      clientName: "",
      emailId: 'null',
      implementationClient: 'null',
      isSubmitted: true,
      leadName: 'null',
      payRate: 20,
      phoneNumber: 'null',
      submissionDate: new Date(),
      submissionStatus: 'null',
      typeOwnRecruiter: 'null',
      vendorCompany: 'null'
    });
    this.submissionDTO.push({
      clientName: "",
      emailId: 'null',
      implementationClient: 'null',
      isSubmitted: true,
      leadName: 'null',
      payRate: 20,
      phoneNumber: 'null',
      submissionDate: new Date(),
      submissionStatus: 'null',
      typeOwnRecruiter: 'null',
      vendorCompany: 'null'
    }); this.submissionDTO.push({
      clientName: "",
      emailId: 'null',
      implementationClient: 'null',
      isSubmitted: true,
      leadName: 'null',
      payRate: 20,
      phoneNumber: 'null',
      submissionDate: new Date(),
      submissionStatus: 'null',
      typeOwnRecruiter: 'null',
      vendorCompany: 'null'
    }); this.submissionDTO.push({
      clientName: "",
      emailId: 'null',
      implementationClient: 'null',
      isSubmitted: true,
      leadName: 'null',
      payRate: 20,
      phoneNumber: 'null',
      submissionDate: new Date(),
      submissionStatus: 'null',
      typeOwnRecruiter: 'null',
      vendorCompany: 'null'
    }); this.submissionDTO.push({
      clientName: "",
      emailId: 'null',
      implementationClient: 'null',
      isSubmitted: true,
      leadName: 'null',
      payRate: 20,
      phoneNumber: 'null',
      submissionDate: new Date(),
      submissionStatus: 'null',
      typeOwnRecruiter: 'null',
      vendorCompany: 'null'
    }); this.submissionDTO.push({
      clientName: "",
      emailId: 'null',
      implementationClient: 'null',
      isSubmitted: true,
      leadName: 'null',
      payRate: 20,
      phoneNumber: 'null',
      submissionDate: new Date(),
      submissionStatus: 'null',
      typeOwnRecruiter: 'null',
      vendorCompany: 'null'
    }); this.submissionDTO.push({
      clientName: "",
      emailId: 'null',
      implementationClient: 'null',
      isSubmitted: true,
      leadName: 'null',
      payRate: 20,
      phoneNumber: 'null',
      submissionDate: new Date(),
      submissionStatus: 'null',
      typeOwnRecruiter: 'null',
      vendorCompany: 'null'
    }); this.submissionDTO.push({
      clientName: "",
      emailId: 'null',
      implementationClient: 'null',
      isSubmitted: true,
      leadName: 'null',
      payRate: 20,
      phoneNumber: 'null',
      submissionDate: new Date(),
      submissionStatus: 'null',
      typeOwnRecruiter: 'null',
      vendorCompany: 'null'
    }); this.submissionDTO.push({
      clientName: "",
      emailId: 'null',
      implementationClient: 'null',
      isSubmitted: true,
      leadName: 'null',
      payRate: 20,
      phoneNumber: 'null',
      submissionDate: new Date(),
      submissionStatus: 'null',
      typeOwnRecruiter: 'null',
      vendorCompany: 'null'
    }); this.submissionDTO.push({
      clientName: "",
      emailId: 'null',
      implementationClient: 'null',
      isSubmitted: true,
      leadName: 'null',
      payRate: 20,
      phoneNumber: 'null',
      submissionDate: new Date(),
      submissionStatus: 'null',
      typeOwnRecruiter: 'null',
      vendorCompany: 'null'
    }); this.submissionDTO.push({
      clientName: "",
      emailId: 'null',
      implementationClient: 'null',
      isSubmitted: true,
      leadName: 'null',
      payRate: 20,
      phoneNumber: 'null',
      submissionDate: new Date(),
      submissionStatus: 'null',
      typeOwnRecruiter: 'null',
      vendorCompany: 'null'
    }); this.submissionDTO.push({
      clientName: "",
      emailId: 'null',
      implementationClient: 'null',
      isSubmitted: true,
      leadName: 'null',
      payRate: 20,
      phoneNumber: 'null',
      submissionDate: new Date(),
      submissionStatus: 'null',
      typeOwnRecruiter: 'null',
      vendorCompany: 'null'
    });

  }
  // { submissionDate: null, vendorCompany: null, emailId: null, phoneNumber: null, implementationClient: null, … }

  submissionHandler() {

    // this.sub_Details.unshift(submisson);
  }
  addNewSubmission() {
    const formObj = this.submissionForm.getRawValue(); // {name: '', description: ''}
    const serializedForm = JSON.stringify(formObj);
    this.submissionDTO.push(JSON.parse(serializedForm));
    console.log(this.submissionForm.value);
    console.log(this.submissionDTO);

  }
}
