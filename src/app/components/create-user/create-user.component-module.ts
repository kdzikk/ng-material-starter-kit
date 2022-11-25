import { NgModule } from '@angular/core';
import { CreateUserComponent } from './create-user.component';
import {MatCardModule} from "@angular/material/card";
import {AsyncPipe, NgIf} from "@angular/common";

@NgModule({
  imports: [
    MatCardModule,
    AsyncPipe,
    NgIf
  ],
  declarations: [CreateUserComponent],
  providers: [],
  exports: [CreateUserComponent]
})
export class CreateUserComponentModule {
}
