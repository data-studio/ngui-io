import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

import { User } from './user';

@Injectable()
export class UserService {

  constructor(
    private api: ApiService
  ) {  }

  getAll() {
    return this.api.get('users');
  }

  getById(id: string) {
    return this.api.get(`user/${id}`);
  }

  create(user: User) {
    return this.api.post('users', user);
  }

  update(user: User) {
    return this.api.put(`user/${user.id}`, user);
  }

  delete(id: string) {
    return this.api.delete(`user/${id}`);
  }

}
