import { OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

export abstract class BaseComponent implements OnDestroy, OnInit {
  protected readonly unsubscribe$ = new Subject();

  ngOnInit(): void {
    this.init();
    this.initAction();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }

  protected abstract init(): void;

  protected abstract initAction(): void;
}
