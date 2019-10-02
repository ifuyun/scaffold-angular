import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppApiService } from '..';

@Injectable({
  providedIn: 'root'
})
export class CommonService extends AppApiService {
  constructor(protected http: HttpClient) {
    super(http);
  }
}
