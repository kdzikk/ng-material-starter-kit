import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {delay, Observable} from 'rxjs';
import { BoredModel } from '../models/bored.model';

@Injectable()
export class BoredService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<BoredModel> {
    return this._httpClient.get<BoredModel>('https://www.boredapi.com/api/activity').pipe(delay(500));
  }
}
