import { BaseComponent } from './base.component';
import { BaseBizService } from './base-biz.service';

export abstract class BaseBizComponent extends BaseComponent {
  protected bizService: BaseBizService;

  protected abstract init(): void;

  protected abstract initAction(): void;
}
