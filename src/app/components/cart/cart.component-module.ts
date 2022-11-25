import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [MatCardModule, CommonModule, MatButtonToggleModule],
  declarations: [CartComponent],
  providers: [],
  exports: [CartComponent]
})
export class CartComponentModule {
}
