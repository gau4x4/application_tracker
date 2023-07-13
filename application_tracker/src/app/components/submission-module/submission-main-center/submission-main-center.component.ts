import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Submission } from '../../models/submission';

@Component({
  selector: 'app-submission-main-center',
  templateUrl: './submission-main-center.component.html',
  styleUrls: ['./submission-main-center.component.css']
})
export class SubmissionMainCenterComponent implements OnInit {
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
}
