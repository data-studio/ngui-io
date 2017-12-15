import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Token } from './token';

const TOKEN_STORAGE_KEY = '_SESS';

@Injectable()
export class SessionService {

  constructor(
    private token: Token
  ) { }

  getAuthorizationHeader(): string {
    return this.token.Key || 'foobarsnacks';
  }

  setToken(token: Token) {
    this.token = token;
  }

  getToken(): Token {
    return this.token;
  }

}
