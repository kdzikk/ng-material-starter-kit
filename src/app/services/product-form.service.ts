import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductFormModel } from '../models/product-form.model';
import {CheckboxModel} from "../models/checkbox.model";

@Injectable()
export class ProductFormService {
  constructor(private _httpClient: HttpClient) {
  }

  create(product: Omit<ProductFormModel, any>): Observable<ProductFormModel> {
    return this._httpClient.post<ProductFormModel>('https://fakestoreapi.com/products',product );
  }

}
