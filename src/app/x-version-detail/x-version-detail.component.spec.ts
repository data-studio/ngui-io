import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XVersionDetailComponent } from './x-version-detail.component';

describe('XVersionDetailComponent', () => {
  let component: XVersionDetailComponent;
  let fixture: ComponentFixture<XVersionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XVersionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XVersionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
