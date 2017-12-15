import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XOrgDetailComponent } from './x-org-detail.component';

describe('XOrgDetailComponent', () => {
  let component: XOrgDetailComponent;
  let fixture: ComponentFixture<XOrgDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XOrgDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XOrgDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
