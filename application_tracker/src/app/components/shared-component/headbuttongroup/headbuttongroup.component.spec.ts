/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeadbuttongroupComponent } from './headbuttongroup.component';

describe('HeadbuttongroupComponent', () => {
  let component: HeadbuttongroupComponent;
  let fixture: ComponentFixture<HeadbuttongroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadbuttongroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadbuttongroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
