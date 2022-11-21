import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { HolidaysSelectComponent } from './components/holidays-select/holidays-select.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CheckboxCategoriesComponent } from './components/checkbox-categories/checkbox-categories.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
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
import { CategoriesMenuComponentModule } from './components/categories-menu/categories-menu.component-module';
import { CategoriesMenuServiceModule } from './services/categories-menu.service-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { ProductFormServiceModule } from './services/product-form.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'crypto', component: CryptoListComponent }, { path: 'public-holidays', component: HolidaysSelectComponent }, { path: 'categories', component: CategoriesListComponent }, { path: 'checkbox-categories', component: CheckboxCategoriesComponent }, { path: 'categories-menu', component: CategoriesMenuComponent }, { path: 'create-product', component: ProductFormComponent }]), ProductListComponentModule, ProductsServiceModule, CryptoListComponentModule, CryptosServiceModule, HolidaysSelectComponentModule, HolidaysServiceModule, CategoriesListComponentModule, CategoryServiceModule, CheckboxCategoriesComponentModule, CheckboxServiceModule, CategoriesMenuComponentModule, CategoriesMenuServiceModule, ProductFormComponentModule, ProductFormServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
