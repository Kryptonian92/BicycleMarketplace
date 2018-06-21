import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ListingsComponent } from './listings/listings.component';
import { ListingComponent } from './listing/listing.component';
import { NewListingComponent } from './new-listing/new-listing.component';
import { UserListingsComponent } from './user-listings/user-listings.component';
import { UpdateListingComponent } from './update-listing/update-listing.component';

import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import {UserService} from "./user.service";
import {ListingService} from "./listing.service";
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ListingsComponent,
    ListingComponent,
    NewListingComponent,
    UserListingsComponent,
    UpdateListingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    ListingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
