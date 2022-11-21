import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckboxModel } from '../../models/checkbox.model';
import { CheckboxService } from '../../services/checkbox.service';

@Component({
  selector: 'app-checkbox-categories',
  styleUrls: ['./checkbox-categories.component.scss'],
  templateUrl: './checkbox-categories.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxCategoriesComponent {
  readonly list$: Observable<CheckboxModel[]> = this._checkboxService.getAll();

  constructor(private _checkboxService: CheckboxService) {
  }
}
