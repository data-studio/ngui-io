import { Component, OnInit } from '@angular/core';

import { XApp } from '../x-app';
import { XAppService } from '../x-app.service';

@Component({
  selector: 'app-x-apps',
  templateUrl: './x-apps.component.html',
  styleUrls: ['./x-apps.component.css']
})
export class XAppsComponent implements OnInit {

  apps: XApp[];

  constructor(private xAppService: XAppService) { }

  ngOnInit() {
    this.getApps();
  }

  getApps(): void {
    this.xAppService.getAll()
      .subscribe(apps => this.apps = apps);
  }

}
