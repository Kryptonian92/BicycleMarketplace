import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {ListingService} from "../listing.service";

@Component({
	selector: 'app-listing',
	templateUrl: './listing.component.html',
	styleUrls: ['./listing.component.css']
})

export class ListingComponent implements OnInit {
	@Input() listing;
	@Output() emitter = new EventEmitter();
	private uid:any;

	constructor(private ls:ListingService){}

	ngOnInit(){
		console.log(localStorage.getItem("uid"));

		if(localStorage.getItem("uid") == "undefined"){

		}else{
			this.uid = localStorage.getItem("uid");
		}
	}

	destroy(){
		this.ls.destroy(this.listing,(data)=>{
			this.emitter.emit(data);
		});
	}

	contact(){
		alert(
			"Name: "+this.listing.user.first+"\n"+
			"Email: "+this.listing.user.email
		);
	}
}
