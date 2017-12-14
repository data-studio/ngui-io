import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) {  }

  get(route: string) {
    return this.http.get(`/api/${route}`);
  }

  post(route: string, data: object) {
    return this.http.post(`/api/${route}`, data);
  }

  put(route: string, data: object) {
    return this.http.put(`/api/${route}`, data);
  }

  delete(route: string) {
    return this.http.get(`/api/${route}`);
  }

}
