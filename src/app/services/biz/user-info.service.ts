import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppApiService } from '..';
import { CommonObject } from '../../interfaces/common';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService extends AppApiService {
  constructor(protected http: HttpClient) {
    super(http);
  }

  getUserInfo(params?: CommonObject): Observable<any> {
    return this.post(this.getApiUrl(this.api.userInfo), params);
  }
}
