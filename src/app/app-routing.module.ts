import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { HolidaysSelectComponent } from './components/holidays-select/holidays-select.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CheckboxCategoriesComponent } from './components/checkbox-categories/checkbox-categories.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { CryptosServiceModule } from './services/cryptos.service-module';
import { HolidaysSelectComponentModule } from './components/holidays-select/holidays-select.component-module';
import { HolidaysServiceModule } from './services/holidays.service-module';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { CheckboxCategoriesComponentModule } from './components/checkbox-categories/checkbox-categories.component-module';
import { CheckboxServiceModule } from './services/checkbox.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'crypto', component: CryptoListComponent }, { path: 'public-holidays', component: HolidaysSelectComponent }, { path: 'categories', component: CategoriesListComponent }, { path: 'checkbox-categories', component: CheckboxCategoriesComponent }]), ProductListComponentModule, ProductsServiceModule, CryptoListComponentModule, CryptosServiceModule, HolidaysSelectComponentModule, HolidaysServiceModule, CategoriesListComponentModule, CategoryServiceModule, CheckboxCategoriesComponentModule, CheckboxServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
