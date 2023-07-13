import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Submission } from '../../models/submission';

@Component({
  selector: 'app-submissiontable',
  templateUrl: './submissiontable.component.html',
  styleUrls: ['./submissiontable.component.css']
})
export class SubmissiontableComponent implements OnInit {
  submissionDTO: Submission[] = new Array<Submission>();
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
}
