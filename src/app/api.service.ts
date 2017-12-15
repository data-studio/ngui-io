import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) {  }

  resource(path: string) {
    return `${environment.apiBase}${path}`;
  }

  get(route: string) {
    return this.http.get(this.resource(route));
  }

  post(route: string, data: object) {
    return this.http.post(this.resource(route), data);
  }

  put(route: string, data: object) {
    return this.http.put(this.resource(route), data);
  }

  delete(route: string) {
    return this.http.get(this.resource(route));
  }

}
