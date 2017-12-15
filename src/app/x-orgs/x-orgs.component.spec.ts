import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XOrgsComponent } from './x-orgs.component';

describe('XOrgsComponent', () => {
  let component: XOrgsComponent;
  let fixture: ComponentFixture<XOrgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XOrgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XOrgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
