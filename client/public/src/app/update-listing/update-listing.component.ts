import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {ListingService} from "../listing.service";


@Component({
	selector: 'app-update-listing',
	templateUrl: './update-listing.component.html',
	styleUrls: ['./update-listing.component.css']
})

export class UpdateListingComponent implements OnInit {
	@Input() listing;
	@Output() emitter = new EventEmitter();

	constructor(private ls:ListingService){}

	ngOnInit(){
	}

	update(){
		this.ls.update(this.listing,(data)=>{
			this.listing = data;
			console.log(data);
		});
	}

	destroy(){
		this.ls.destroy(this.listing,(data)=>{
			this.emitter.emit(data);
		});
	}
}
