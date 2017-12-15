import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XAppsComponent } from './x-apps.component';

describe('XAppsComponent', () => {
  let component: XAppsComponent;
  let fixture: ComponentFixture<XAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
