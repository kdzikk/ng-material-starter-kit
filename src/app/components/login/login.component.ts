import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  readonly loginForm: FormGroup = new FormGroup(
    {
      username: new FormControl(),
      password: new FormControl()
    });

  constructor(private _loginService: LoginService) {
  }

  onLoginFormSubmitted(loginForm: FormGroup): void {this._loginService
    .create({
      username: loginForm.get('username')?.value,
      password: loginForm.get('password')?.value,

    })
    .subscribe();
  }
}
