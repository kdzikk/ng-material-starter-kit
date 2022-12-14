import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { EmployeesMasterComponent } from './employees-master.component';

@NgModule({
  imports: [MatGridListModule, MatListModule, CommonModule],
  declarations: [EmployeesMasterComponent],
  providers: [],
  exports: [EmployeesMasterComponent]
})
export class EmployeesMasterComponentModule {
}
