import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'search'
})

export class SearchPipe implements PipeTransform {
	transform(listings,text){
		if(!text){return listings;}
		text = text.toLowerCase();

		let stuff = [];

		for(let i=0;i<listings.length;i++){
			let l = listings[i];

			if(l.title.toLowerCase().includes(text) ||
				l.description.toLowerCase().includes(text) ||
				l.price.toString().toLowerCase().includes(text) ||
				l.location.toLowerCase().includes(text)
			){
				stuff.push(l);
			}
		}

		return stuff;
	}
}
