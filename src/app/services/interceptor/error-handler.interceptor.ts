import { HttpErrorResponse, HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, delay, map, retryWhen, scan } from 'rxjs/operators';
import { RouterService } from '..';
import { CustomHttpError } from '../../lib/custom-http-error';
import { API_WHITE_LIST, RES_CODE_WHITE_LIST } from '../config/api';
import { HTTP_CODE } from '../config/constants';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private router: RouterService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retryWhen((res) => {
        return res.pipe(
          scan((retryCount: number, errRes: HttpErrorResponse) => {
            retryCount += 1;
            if (retryCount < 3) {
              return retryCount;
            }
            throw errRes;
          }, 0), delay(1000)
        );
      }),
      map((res: HttpEvent<any>) => this.handleResponse(res, req)),
      catchError((err) => {
        throw this.handleError(err);
      })
    );
  }

  private handleResponse(res: HttpEvent<any>, req: HttpRequest<any>) {
    if (res.type === HttpEventType.Response) {
      const body = res.body;
      if (body instanceof Blob) {
        return res;
      }
      if (body && body.code === HTTP_CODE.success) {
        return res;
      }
      for (const api of API_WHITE_LIST) {
        if (req.url.indexOf(api) >= 0) {
          return res;
        }
      }
      for (const api of RES_CODE_WHITE_LIST) {
        if (body && body.code === api) {
          return res;
        }
      }
      throw new CustomHttpError(res);
    }
    return res;
  }

  private handleError(res: HttpErrorResponse | CustomHttpError) {
    const err = res instanceof CustomHttpError ? res : new CustomHttpError(res);

    // todo
    if (HTTP_CODE.unLogin.includes(err.code)) {
      console.error(err.message);
      setTimeout(() => this.router.toLogin(), 3000);
      return;
    }
    console.error(err.message);
    return err;
  }
}
