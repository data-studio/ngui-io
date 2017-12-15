import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

import { XApp } from './x-app';

@Injectable()
export class XAppService {

  constructor(
    private api: ApiService
  ) {  }

  getAll() {
    return this.api.get('apps');
  }

  getById(id: string) {
    return this.api.get(`app/${id}`);
  }

  create(xApp: XApp) {
    return this.api.post('apps', xApp);
  }

  update(xApp: XApp) {
    return this.api.put(`app/${xApp.id}`, xApp);
  }

  delete(id: string) {
    return this.api.delete(`app/${id}`);
  }

}
