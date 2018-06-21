import { Component, OnInit } from '@angular/core';
import {ListingService} from "../listing.service";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
	selector: 'app-new-listing',
	templateUrl: './new-listing.component.html',
	styleUrls: ['./new-listing.component.css']
})

export class NewListingComponent implements OnInit {
	private listing;
	private listings;
	private uid;

	constructor(private ls:ListingService,private us:UserService,private router:Router){
		this.listing = {
			title:"",
			description:"",
			price:"",
			location:"",
			img:""
		};
		this.listings = [];
	}

	ngOnInit(){
		if(localStorage.getItem("uid") == "undefined"){
			this.router.navigateByUrl("/");
		}else{
			this.us.findById(localStorage.getItem("uid"),(data)=>{
				this.listings = data.listings;
			});
		}
	}

	create(){
		this.ls.create(this.listing,(data)=>{
			this.listings.push(data);
		});
	}
}
