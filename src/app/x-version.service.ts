import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

import { XVersion } from './x-version';

@Injectable()
export class XVersionService {

  constructor(
    private api: ApiService
  ) {  }

  getAll() {
    return this.api.get('versions');
  }

  getById(id: string) {
    return this.api.get(`version/${id}`);
  }

  create(xVersion: XVersion) {
    return this.api.post('versions', xVersion);
  }

  update(xVersion: XVersion) {
    return this.api.put(`version/${xVersion.Id}`, xVersion);
  }

  delete(id: string) {
    return this.api.delete(`version/${id}`);
  }

}
