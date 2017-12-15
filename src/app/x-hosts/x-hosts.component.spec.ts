import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XHostsComponent } from './x-hosts.component';

describe('XHostsComponent', () => {
  let component: XHostsComponent;
  let fixture: ComponentFixture<XHostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XHostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XHostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
