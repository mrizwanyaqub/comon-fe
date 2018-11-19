import {Inject, Injectable} from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AtConfigs } from '../services';

@Injectable()
export class authInterceptor implements HttpInterceptor {
  constructor(@Inject(AtConfigs) private configs) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header
    request = request.clone({
      setHeaders: {
        "X-Partner-Name": this.configs.name
      }
    });
    return next.handle(request);
  }
}
