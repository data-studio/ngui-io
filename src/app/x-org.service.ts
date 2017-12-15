import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

import { XOrg } from './x-org';

@Injectable()
export class XOrgService {

  constructor(
    private api: ApiService
  ) {  }

  getAll() {
    return this.api.get('orgs');
  }

  getById(id: string) {
    return this.api.get(`org/${id}`);
  }

  create(xOrg: XOrg) {
    return this.api.post('orgs', xOrg);
  }

  update(xOrg: XOrg) {
    return this.api.put(`org/${xOrg.id}`, xOrg);
  }

  delete(id: string) {
    return this.api.delete(`org/${id}`);
  }

}
