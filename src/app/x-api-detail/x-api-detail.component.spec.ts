import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XApiDetailComponent } from './x-api-detail.component';

describe('XApiDetailComponent', () => {
  let component: XApiDetailComponent;
  let fixture: ComponentFixture<XApiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XApiDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XApiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
