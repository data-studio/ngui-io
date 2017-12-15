import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

import { XHost } from './x-host';

@Injectable()
export class XHostService {

  constructor(
    private api: ApiService
  ) {  }

  getAll() {
    return this.api.get('hosts');
  }

  getById(id: string) {
    return this.api.get(`host/${id}`);
  }

  create(xHost: XHost) {
    return this.api.post('hosts', xHost);
  }

  update(xHost: XHost) {
    return this.api.put(`host/${xHost.Id}`, xHost);
  }

  delete(id: string) {
    return this.api.delete(`host/${id}`);
  }

}
