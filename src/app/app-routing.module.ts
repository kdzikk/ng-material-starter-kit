import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { HolidaysSelectComponent } from './components/holidays-select/holidays-select.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { CryptosServiceModule } from './services/cryptos.service-module';
import { HolidaysSelectComponentModule } from './components/holidays-select/holidays-select.component-module';
import { HolidaysServiceModule } from './services/holidays.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'categories', component: ProductListComponent }, { path: 'crypto', component: CryptoListComponent }, { path: 'public-holidays', component: HolidaysSelectComponent }]), ProductListComponentModule, ProductsServiceModule, CryptoListComponentModule, CryptosServiceModule, HolidaysSelectComponentModule, HolidaysServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
