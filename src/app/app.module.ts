import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import {ProductListComponentModule} from "./components/product-list/product-list.component-module";
import {CryptoListComponentModule} from "./components/crypto-list/crypto-list.component-module";
import {HolidaysSelectComponentModule} from "./components/holidays-select/holidays-select.component-module";
import {CategoriesListComponentModule} from "./components/categories-list/categories-list.component-module";
import {CheckboxCategoriesComponentModule} from "./components/checkbox-categories/checkbox-categories.component-module";
import {ProductUpdateServiceModule} from "./services/product-update.service-module";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ProductListComponentModule,
    CryptoListComponentModule,
    HolidaysSelectComponentModule,
    CategoriesListComponentModule,
    CheckboxCategoriesComponentModule,
    ProductUpdateServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
