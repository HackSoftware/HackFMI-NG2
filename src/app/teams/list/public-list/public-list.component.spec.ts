/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PublicListComponent } from './public-list.component';

describe('PublicListComponent', () => {
  let component: PublicListComponent;
  let fixture: ComponentFixture<PublicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
