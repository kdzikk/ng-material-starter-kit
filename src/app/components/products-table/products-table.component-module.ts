import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ProductsTableComponent } from './products-table.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule],
  declarations: [ProductsTableComponent],
  providers: [],
  exports: [ProductsTableComponent]
})
export class ProductsTableComponentModule {
}
