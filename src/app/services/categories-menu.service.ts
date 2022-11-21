import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuModel } from '../models/menu.model';

@Injectable()
export class CategoriesMenuService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<MenuModel[]> {
    return this._httpClient.get<MenuModel[]>('https://fakestoreapi.com/products/categories' );
  }
}
