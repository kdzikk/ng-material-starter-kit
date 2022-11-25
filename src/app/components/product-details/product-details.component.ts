import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, switchMap} from 'rxjs';
import {ProductDetailsModel} from '../../models/product-details.model';
import {ProductDetailsService} from '../../services/product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent {
  readonly details$: Observable<ProductDetailsModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._productDetailsService.getOne(data['id'])));

  constructor(private _productDetailsService: ProductDetailsService, private _activatedRoute: ActivatedRoute) {
  }
}
