import { HttpErrorResponse, HttpResponse, HttpResponseBase } from '@angular/common/http';

export class CustomHttpError {
  status: number;
  code: number;
  message: string;

  constructor(private response: HttpResponseBase | CustomHttpError) {
    this.status = response.status;
    if (response instanceof HttpErrorResponse || response instanceof CustomHttpError) {
      this.code = response.status;
      this.message = response.message;
    } else if (response instanceof HttpResponse) {
      this.code = response.body && response.body.code || '500';
      this.message = response.body && response.body.message || '网络错误，请稍后重试。';
    }
  }
}
