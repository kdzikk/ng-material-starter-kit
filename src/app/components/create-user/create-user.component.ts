import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {CreateUserService} from '../../services/create-user.service';
import {CreateUserModel} from "../../models/create-user.model";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateUserComponent {
  readonly details$: Observable<CreateUserModel> = this._activatedRoute.params.pipe(switchMap
  (data => this._createUserService.getOne(data['id'])));

  constructor(private _createUserService: CreateUserService, private _activatedRoute: ActivatedRoute) {
  }
}
