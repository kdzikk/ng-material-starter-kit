import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { CryptosServiceModule } from './services/cryptos.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'cryptos', component: CryptoListComponent }]), ProductListComponentModule, ProductsServiceModule, CryptoListComponentModule, CryptosServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
