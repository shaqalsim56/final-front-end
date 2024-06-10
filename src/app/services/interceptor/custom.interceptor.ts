import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor(private authService: AuthServiceService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.authService.isLoggedIn()){
      let newRequest = request.clone({
        setHeaders: {
          Authorization:  `Bearer ${this.authService.getToken()}`
        }
      });
      return next.handle(newRequest)
    }else{
      console.log('Not Logged In')
    }
    return next.handle(request);
  }
}
