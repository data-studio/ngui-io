import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { SessionService } from './session.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private session: SessionService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);

    // Get the auth header from the service.
    const authHeader = this.session.getAuthorizationHeader();
    // Clone the request to add the new header.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authHeader),
    });
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }

}
