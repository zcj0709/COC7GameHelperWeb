import { Component, OnInit } from '@angular/core';
import { Characteristic} from '../../../model/characteristic';
import { CharacterProviderService } from 
'../../../model/character-provider.service'
import { Router, ActivatedRoute } from '@angular/router';;


@Component({
	selector: 'app-page2',
	templateUrl: './page2.component.html',
	styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
	investigator = {
				name:'',
				gender:'',
				occupation:'',
				age:'',
				residence:'',
				hometown:'',
				era:'',
			};
	characteristic:Characteristic;
	id:number;
	show = false;
	
	constructor(private route: ActivatedRoute,
		private router: Router,
		private provider: CharacterProviderService) { 
		let key = JSON.parse(window.localStorage.getItem("NewInvestigator"));
		if (key != null){
			this.investigator = key;
		}
		else {
			this.investigator = {
				name:'',
				gender:'',
				occupation:'',
				age:'',
				residence:'',
				hometown:'',
				era:'',
			};
		}
	}

	submitPage2(){
		if (this.investigator.name == '' || this.investigator.gender == ''|| this.investigator.age == ''){
			this.show = true;
		}
		else{
			window.localStorage.setItem("NewInvestigator", JSON.stringify(this.investigator));
			window.localStorage.setItem("Characteristic", JSON.stringify(this.characteristic));
			this.router.navigate(['/page3']);
		}
	}

	clear(){
		this.investigator = {
			name:'',
			gender:'',
			occupation:'',
			age:'',
			residence:'',
			hometown:'',
			era:'',
		};
		window.localStorage.setItem("NewInvestigator", JSON.stringify(this.investigator));

	}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.characteristic = this.provider.getCharacteristic(this.route.snapshot.params['id']);
			console.log(this.characteristic);
		});
	}

	

}
