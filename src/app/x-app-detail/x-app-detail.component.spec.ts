import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XAppDetailComponent } from './x-app-detail.component';

describe('XAppDetailComponent', () => {
  let component: XAppDetailComponent;
  let fixture: ComponentFixture<XAppDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XAppDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XAppDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
