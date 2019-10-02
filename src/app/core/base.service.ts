import { OnInit } from '@angular/core';

export abstract class BaseService implements OnInit {
  ngOnInit(): void {
    this.init();
  }

  protected abstract init(): void;
}
