import { Component, OnInit } from '@angular/core';
import { Characteristic} from '../../../model/characteristic';
import { CharacterProviderService } from 
'../../../model/character-provider.service';

@Component({
	selector: 'app-page1',
	templateUrl: './page1.component.html',
	styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
	title = 'Step 1: Generate Characteristics';

	characteristics: Characteristic[];
	

	roll(){
		this.characteristics = this.provider.getCharacteristics();	
	}
	constructor(private provider:CharacterProviderService) { }

	ngOnInit() {
	}

}
