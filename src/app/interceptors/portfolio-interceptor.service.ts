import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../servicios/loader.service';
import { TokenService } from '../servicios/token.service';

@Injectable({
  providedIn: 'root'
})
export default class PortfolioInterceptorService implements HttpInterceptor {

  private totalRequests = 0;

  constructor(private tokenService: TokenService, private loadingService: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let intReq = req;
    this.totalRequests++;
    this.loadingService.setLoading(true);
    const token = this.tokenService.getToken();
    if(token) {
      intReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + token)});
    }

    return next.handle(intReq).pipe(
      finalize(() => {
        this.totalRequests--;
        if(this.totalRequests == 0) {
          this.loadingService.setLoading(false);
        }
      })
    );
  }
}

export const interceptorProvider = [{provide: HTTP_INTERCEPTORS, useClass: PortfolioInterceptorService, multi: true}];
