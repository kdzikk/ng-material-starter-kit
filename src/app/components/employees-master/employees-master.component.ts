import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EmployeesModel } from '../../models/employees.model';
import { EmployeesMasterService } from '../../services/employees-master.service';
import {EmployeeResponse} from "../../services/employee.response";

@Component({
  selector: 'app-employees-master',
  templateUrl: './employees-master.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesMasterComponent {
  readonly list$: Observable<EmployeesModel[]> = this._employeesMasterService.getAll();


  private _detailsSubject: Subject<EmployeesModel> = new Subject<EmployeesModel>();
  public details$: Observable<EmployeesModel> = this._detailsSubject.asObservable();


  constructor(private _employeesMasterService: EmployeesMasterService) {
  }

  selectEmployee(employee: EmployeesModel): void {
    this._detailsSubject.next(employee)
  }
}
