import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { CryptoDetailsComponent } from './crypto-details.component';

@NgModule({
  imports: [MatGridListModule, MatListModule, CommonModule],
  declarations: [CryptoDetailsComponent],
  providers: [],
  exports: [CryptoDetailsComponent]
})
export class CryptoDetailsComponentModule {
}
