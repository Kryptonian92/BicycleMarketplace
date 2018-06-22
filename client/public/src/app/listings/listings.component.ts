import { Component, OnInit } from '@angular/core';
import {ListingService} from "../listing.service";

@Component({
	selector: 'app-listings',
	templateUrl: './listings.component.html',
	styleUrls: ['./listings.component.css']
})

export class ListingsComponent implements OnInit {
	private listings:any;
	private searchText:any;

	constructor(private ls:ListingService){}

	ngOnInit(){
		this.ls.all(data=>this.listings=data);
	}

	destroy(data){
		let index;

		for(let i=0; i<this.listings.length;i++){
			if(this.listings[i]._id == data._id){
				index = i;
			}
		}

		this.listings.splice(index,1);		
	}

	keyPress(){
		console.log(this.searchText);
	}
}
