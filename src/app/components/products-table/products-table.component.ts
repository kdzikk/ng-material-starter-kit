import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductTableModel } from '../../models/product-table.model';
import { ProductTableService } from '../../services/product-table.service';

@Component({
  selector: 'app-products-table',
  styleUrls: ['./products-table.component.scss'],
  templateUrl: './products-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsTableComponent {
  readonly list$: Observable<ProductTableModel[]> = this._productTableService.getAll();

  constructor(private _productTableService: ProductTableService) {
  }
}
