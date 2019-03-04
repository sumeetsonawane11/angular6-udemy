import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { take, switchMap } from 'rxjs/operators';

import { Injectable } from "@angular/core";
import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/store/auth.reducers';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  constructor(
    //private authService: AuthService, 
    private store: Store<fromApp.AppState>) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', req)
    return this.store.select('auth')
      .pipe(
        take(1),
        //SwitchMap should be used instead of map, otherwise it will wrap the return new value in an Observable
        switchMap((authState: fromAuth.State) => {
          //Original request cant be modified. However if want to modify/append, clone the req and set the properties like [params, headers , ]
          const cloneRequest = req.clone({ params: req.params.set('auth', authState.token) })
          return next.handle(cloneRequest); // This will let any req to continue its journey
        })
      )
  }
}