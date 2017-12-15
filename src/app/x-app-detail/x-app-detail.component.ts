import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { XAppService } from '../x-app.service';
import { XApp } from '../x-app';

@Component({
  selector: 'app-x-app-detail',
  templateUrl: './x-app-detail.component.html',
  styleUrls: ['./x-app-detail.component.css']
})
export class XAppDetailComponent implements OnInit {

  @Input() app: Object;

  constructor(
    private route: ActivatedRoute,
    private xAppService: XAppService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getApp();
  }

  getApp(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.xAppService.getById(id)
      .subscribe(app => this.app = app);
  }

  goBack(): void {
    this.location.back();
  }

}
