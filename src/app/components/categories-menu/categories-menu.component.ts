import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuModel } from '../../models/menu.model';
import { CategoriesMenuService } from '../../services/categories-menu.service';

@Component({
  selector: 'app-categories-menu',
  styleUrls: ['./categories-menu.component.scss'],
  templateUrl: './categories-menu.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesMenuComponent {
  readonly list$: Observable<MenuModel[]> = this._categoriesMenuService.getAll();

  constructor(private _categoriesMenuService: CategoriesMenuService) {
  }
}
