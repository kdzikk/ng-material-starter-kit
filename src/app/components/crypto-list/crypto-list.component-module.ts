import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CryptoListComponent } from './crypto-list.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatCardModule, MatChipsModule],
  declarations: [CryptoListComponent],
  providers: [],
  exports: [CryptoListComponent]
})
export class CryptoListComponentModule {
}
