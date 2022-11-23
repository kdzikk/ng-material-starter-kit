import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CheckboxModel } from '../../models/checkbox.model';
import { ProductFormService } from '../../services/product-form.service';
import { ProductUpdateService } from '../../services/product-update.service';

@Component({
  selector: 'app-product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {
  readonly productForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    image: new FormControl(),
    category: new FormControl(),
  });
  readonly list$: Observable<CheckboxModel[]> = this._productUpdateService.getAll();

  constructor(private _productFormService: ProductFormService, private _productUpdateService: ProductUpdateService) {
  }

  onProductFormSubmitted(productForm: FormGroup): void {
    this._productFormService.create({
      title: productForm.get('title')?.value,
      price: productForm.get('price')?.value,
      description: productForm.get('description')?.value,
      image: productForm.get('image')?.value,
      category: productForm.get('category')?.value,
    }).subscribe();

  }
}
