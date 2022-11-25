import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { HolidaysSelectComponent } from './components/holidays-select/holidays-select.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CheckboxCategoriesComponent } from './components/checkbox-categories/checkbox-categories.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { CatFactsComponent } from './components/cat-facts/cat-facts.component';
import { AgePredictionComponent } from './components/age-prediction/age-prediction.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
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
import { CreateEmployeeComponentModule } from './components/create-employee/create-employee.component-module';
import { CreateEmployeeServiceModule } from './services/create-employee.service-module';
import { LoginComponentModule } from './components/login/login.component-module';
import { LoginServiceModule } from './services/login.service-module';
import { RegisterFormComponentModule } from './components/register-form/register-form.component-module';
import { RegisterServiceModule } from './services/register.service-module';
import { ProductsTableComponentModule } from './components/products-table/products-table.component-module';
import { ProductTableServiceModule } from './services/product-table.service-module';
import { CatFactsComponentModule } from './components/cat-facts/cat-facts.component-module';
import { CatFactsServiceModule } from './services/cat-facts.service-module';
import { AgePredictionComponentModule } from './components/age-prediction/age-prediction.component-module';
import { AgePredictionServiceModule } from './services/age-prediction.service-module';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';
import { ProductDetailsServiceModule } from './services/product-details.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'crypto', component: CryptoListComponent }, { path: 'public-holidays', component: HolidaysSelectComponent }, { path: 'categories', component: CategoriesListComponent }, { path: 'checkbox-categories', component: CheckboxCategoriesComponent }, { path: 'categories-menu', component: CategoriesMenuComponent }, { path: 'create-product', component: ProductFormComponent }, { path: 'create-employee', component: CreateEmployeeComponent }, { path: 'login', component: LoginComponent }, { path: 'register', component: RegisterFormComponent }, { path: 'product-search', component: ProductsTableComponent }, { path: 'cat-fact', component: CatFactsComponent }, { path: 'age/:name', component: AgePredictionComponent }, { path: 'product/:id', component: ProductDetailsComponent }]), ProductListComponentModule, ProductsServiceModule, CryptoListComponentModule, CryptosServiceModule, HolidaysSelectComponentModule, HolidaysServiceModule, CategoriesListComponentModule, CategoryServiceModule, CheckboxCategoriesComponentModule, CheckboxServiceModule, CategoriesMenuComponentModule, CategoriesMenuServiceModule, ProductFormComponentModule, ProductFormServiceModule, CreateEmployeeComponentModule, CreateEmployeeServiceModule, LoginComponentModule, LoginServiceModule, RegisterFormComponentModule, RegisterServiceModule, ProductsTableComponentModule, ProductTableServiceModule, CatFactsComponentModule, CatFactsServiceModule, AgePredictionComponentModule, AgePredictionServiceModule, ProductDetailsComponentModule, ProductDetailsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
