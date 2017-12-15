import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ApiService } from './api.service';

import { XVersion } from './x-version';

@Injectable()
export class XVersionService {

  constructor(
    private api: ApiService
  ) {  }

  getAll(): Observable<any> {
    return this.api.get('versions');
  }

  getById(id: string): Observable<any> {
    return this.api.get(`version/${id}`);
  }

  create(xVersion: XVersion): Observable<any> {
    return this.api.post('versions', xVersion);
  }

  update(xVersion: XVersion): Observable<any> {
    return this.api.put(`version/${xVersion.Id}`, xVersion);
  }

  delete(id: string): Observable<any> {
    return this.api.delete(`version/${id}`);
  }

}
