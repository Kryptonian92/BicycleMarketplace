import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {ListingsComponent} from "./listings/listings.component";
import {NewListingComponent} from "./new-listing/new-listing.component";

const routes: Routes = [
	{ path: '', pathMatch: 'full', component: RegisterComponent},
	{path:'browse',component:ListingsComponent},
	{path:"listings",component:NewListingComponent}
	// { path: '**', redirectTo:"/alpha" }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }