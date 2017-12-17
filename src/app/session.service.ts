import { Injectable } from '@angular/core';

import { Token } from './token';

const TOKEN_STORAGE_KEY = '_SESS';

@Injectable()
export class SessionService {

  token: Token;

  constructor() { }

  getAuthorizationHeader(): string {
    return this.token && this.token.Key || 'foobarsnacks';
  }

  setToken(token: Token) {
    console.log('set token', token);
    this.token = token;
  }

  getToken(): Token {
    return this.token;
  }

  hasToken(): boolean {
    return !!this.getToken();
  }

}
