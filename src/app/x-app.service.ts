import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { ApiService } from './api.service';

import { XApp } from './x-app';

@Injectable()
export class XAppService {

  constructor(
    private api: ApiService
  ) {  }

  getAll(): Observable<any> {
    return this.api.get('apps/all')
      .pipe(
        tap(data => {
          console.log('get all apps success', data);
          let apps = <XApp[]>data;
          return apps;
        }),
        catchError(this.handleError('getAllApps', []))
      );
  }

  getById(id: string) {
    return this.api.get(`app/${id}`);
  }

  create(xApp: XApp) {
    return this.api.post('apps', xApp);
  }

  update(xApp: XApp) {
    return this.api.put(`app/${xApp.Id}`, xApp);
  }

  delete(id: string) {
    return this.api.delete(`app/${id}`);
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
