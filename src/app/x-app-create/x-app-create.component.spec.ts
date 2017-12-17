import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XAppCreateComponent } from './x-app-create.component';

describe('XAppCreateComponent', () => {
  let component: XAppCreateComponent;
  let fixture: ComponentFixture<XAppCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XAppCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XAppCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
