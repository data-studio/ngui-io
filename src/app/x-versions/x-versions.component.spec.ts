import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XVersionsComponent } from './x-versions.component';

describe('XVersionsComponent', () => {
  let component: XVersionsComponent;
  let fixture: ComponentFixture<XVersionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XVersionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XVersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
