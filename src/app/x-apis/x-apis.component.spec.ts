import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XApisComponent } from './x-apis.component';

describe('XApisComponent', () => {
  let component: XApisComponent;
  let fixture: ComponentFixture<XApisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XApisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
