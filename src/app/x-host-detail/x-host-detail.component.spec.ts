import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XHostDetailComponent } from './x-host-detail.component';

describe('XHostDetailComponent', () => {
  let component: XHostDetailComponent;
  let fixture: ComponentFixture<XHostDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XHostDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XHostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
