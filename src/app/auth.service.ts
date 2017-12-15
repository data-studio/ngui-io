import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { AuthAttempt } from './auth-attempt';
import { ApiService } from './api.service';
import { SessionService } from './session.service';

const TOKEN_STORAGE_KEY = '_SESS';

@Injectable()
export class AuthService {

  constructor(
    private api: ApiService,
    private session: SessionService
  ) { }

  getAuthorizationHeader() {
    return 'foobar';
  }

  login(username: string, password: string): Observable<any> {
    let authAttempt = {
      Login: username,
      Password: password
    };

    return this.api.post('auth/attempts', authAttempt)
      .pipe(
        tap(data => {
          let authAttempt = <AuthAttempt>data;
          if (authAttempt && authAttempt.Token) {
            let token = JSON.stringify(authAttempt.Token);
            this.session.setToken(authAttempt.Token);
            localStorage.setItem(TOKEN_STORAGE_KEY, token);
          }

          return authAttempt;
        }),
        catchError(this.handleError('login', []))
      );
  }

  logout() {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
