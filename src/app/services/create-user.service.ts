import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateUserModel } from '../models/create-user.model';

@Injectable()
export class CreateUserService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(id: string): Observable<CreateUserModel> {
    return this._httpClient.get<CreateUserModel>('https://fakestoreapi.com/users/' + id);
  }
}
