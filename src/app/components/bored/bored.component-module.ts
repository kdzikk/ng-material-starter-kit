import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BoredComponent } from './bored.component';

@NgModule({
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule],
  declarations: [BoredComponent],
  providers: [],
  exports: [BoredComponent]
})
export class BoredComponentModule {
}
