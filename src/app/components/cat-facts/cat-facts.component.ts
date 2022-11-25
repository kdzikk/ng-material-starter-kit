import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CatFactsModel } from '../../models/cat-facts.model';
import { CatFactsService } from '../../services/cat-facts.service';

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatFactsComponent {
  readonly fact$: Observable<CatFactsModel> = this._catFactsService.getAll();

  constructor(private _catFactsService: CatFactsService) {
  }
}
