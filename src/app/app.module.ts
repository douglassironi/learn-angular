import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,MatSliderModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchProductComponent } from './search-product/search-product.component';
import {RouterModule} from "@angular/router";
import {MatSidenavModule} from "@angular/material/sidenav";
import {SESSION_STORAGE, StorageServiceModule} from "angular-webstorage-service";
import {StoredDataService} from "./stored-data.service";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import { ProductCartComponent } from './product-cart/product-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SearchProductComponent,
    ProductCartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    BrowserAnimationsModule,
    StorageServiceModule,
    ReactiveFormsModule,
    MatDialogModule,
    RouterModule.forRoot([
      {path: '', component: ProductListComponent},
      {path: 'search/', component: SearchProductComponent},
    ]),
    MatSidenavModule
  ],
  providers: [{provide:StoredDataService,useExisting:SESSION_STORAGE}],
  bootstrap: [AppComponent],
  entryComponents: [ProductCartComponent]
})
export class AppModule { }
