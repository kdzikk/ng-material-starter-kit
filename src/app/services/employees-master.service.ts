import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeesModel } from '../models/employees.model';
import { ApiResponse } from './api.response';
import { EmployeeResponse } from './employee.response';

@Injectable()
export class EmployeesMasterService {
  constructor(private _httpClient: HttpClient) {
  }


  getAll(): Observable<EmployeesModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>('https://dummy.restapiexample.com/api/v1/employees')
      .pipe(map(employees => {
        return employees.data.map((employee: EmployeeResponse) => (
          {
            id: employee.id,
            name: employee.employee_name,
            salary: employee.employee_salary,
          }
        ))
      }));
  }

  // getOne(id: string): Observable<EmployeesModel> {
  //   return this._httpClient.get<EmployeesModel>('https://dummy.restapiexample.com/api/v1/employee/' + id);
  // }
}
