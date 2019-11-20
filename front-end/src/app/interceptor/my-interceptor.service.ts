import { Injectable } from '@angular/core';
import { tap } from "rxjs/operators";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Profile } from '../model/Profile';

@Injectable()
export class MyInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if ((req.url.includes('go/user/new/') && (req.method == 'POST'))
          || (req.url.includes('go/login') && (req.method == 'POST'))
          || (req.url.includes('go/profile/get') && (req.method == 'GET'))
          || (req.url.includes('go/logout') && (req.method == 'GET'))) {

      return new Observable(observer => {

        observer.next(new HttpResponse<Profile>(
        {
          body:
          {
            prefLines: [],
            username: 'somebody'
          }, 
          status: 200
        }));

        observer.complete();
      });
 
    }

    if (req.url.includes('go/profile/get') && (req.method == 'GET')) {

      return new Observable(observer => {

        observer.next(new HttpResponse<Profile>(
        {
          body:
          {
            prefLines: [],
            username: 'somebody'
          }, 
          status: 200
        }));

        observer.complete();
      });
 
    }
      
    // pass through other requests.
    return next.handle(req);
  }

}
