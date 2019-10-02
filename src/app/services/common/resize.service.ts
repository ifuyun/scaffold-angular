import { Injectable } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { debounce } from 'lodash';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {
  private resizeSubject: Subject<Window>;

  constructor(private em: EventManager) {
    this.resizeSubject = new Subject();
    this.em.addGlobalEventListener('window', 'resize', debounce(this.onResize.bind(this), 300));
  }

  get onResize$(): Observable<Window> {
    return this.resizeSubject.asObservable();
  }

  private onResize(event: UIEvent) {
    this.resizeSubject.next(event.target as Window);
  }
}
