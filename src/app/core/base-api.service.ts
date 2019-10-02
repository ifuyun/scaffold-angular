import { Observable } from 'rxjs';
import { API } from '../services/config/api';
import { BaseService } from './base.service';
import { CommonObject } from '../interfaces/common';

export abstract class BaseApiService extends BaseService {
  protected baseApiUrl: string;
  protected api: typeof API;

  protected getApiUrl(path: string): string {
    return this.baseApiUrl + path;
  }

  protected abstract get<T>(url: string, params?: CommonObject, getRaw?: boolean): Observable<any>;

  protected abstract post<T>(url: string, body?: CommonObject | FormData, getRaw?: boolean): Observable<any>;
}
