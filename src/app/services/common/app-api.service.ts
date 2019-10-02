import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseApiService } from '../../core/base-api.service';
import { CommonObject, ResponseResult } from '../../interfaces/common';
import { API } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class AppApiService extends BaseApiService {

  protected baseApiUrl = '/api';
  protected api = API;

  protected constructor(
    protected http: HttpClient
  ) {
    super();
  }

  private static handleError(error: HttpErrorResponse): never {
    throw error;
  }

  private static handleResponse<T extends ResponseResult>(response: HttpResponse<T>): T {
    const body = response.body;
    if (body === null) {
      return {} as T;
    }
    return (body.data || {}) as T;
  }

  private static handleRawResponse<T extends ResponseResult>(response: HttpResponse<T>): T {
    return (response.body || {}) as T;
  }

  protected init(): void {
  }

  protected get<T extends ResponseResult>(url: string, params?: CommonObject, getRaw: boolean = false): Observable<T> {
    params = params || {};
    return this.http.get<T>(url, {
      params: new HttpParams({
        fromObject: params as { [key: string]: string | string[] }
      }),
      observe: 'response'
    }).pipe(
      map((res) => getRaw ? AppApiService.handleRawResponse(res) : AppApiService.handleResponse(res)),
      catchError((err) => AppApiService.handleError(err))
    );
  }

  protected post<T extends ResponseResult>(url: string, body?: CommonObject | FormData, getRaw: boolean = false): Observable<T> {
    body = body || {};
    return this.http.post<T>(url, body, {
      observe: 'response'
    }).pipe(
      map((res) => getRaw ? AppApiService.handleRawResponse(res) : AppApiService.handleResponse(res)),
      catchError((err) => AppApiService.handleError(err))
    );
  }
}
