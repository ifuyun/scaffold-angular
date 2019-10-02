import { Component } from '@angular/core';
import { BaseBizComponent } from '../../../core/base-biz.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less']
})
export class DemoComponent extends BaseBizComponent {
  title = 'page-demo';

  protected init(): void {
    console.log(this.title);
  }

  protected initAction(): void {
  }
}
