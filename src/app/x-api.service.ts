import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

import { XApi } from './x-api';

@Injectable()
export class XApiService {

  constructor(
    private api: ApiService
  ) {  }

  getAll() {
    return this.api.get('apis');
  }

  getById(id: string) {
    return this.api.get(`api/${id}`);
  }

  create(xApi: XApi) {
    return this.api.post('apis', xApi);
  }

  update(xApi: XApi) {
    return this.api.put(`api/${xApi.id}`, xApi);
  }

  delete(id: string) {
    return this.api.delete(`api/${id}`);
  }

}
