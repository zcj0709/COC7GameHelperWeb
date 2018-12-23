import { Component, OnInit } from '@angular/core';
import { Skill} from '../../model/characteristic';
import { Characteristic} from '../../model/characteristic';
import { Investigator} from '../../model/characteristic';
import { CharacterProviderService } from 
'../../model/character-provider.service'
import { Router, ActivatedRoute } from '@angular/router';;


@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
	title = 'Existing Investigators';
	investigators: Investigator[];

	constructor(private route: ActivatedRoute,
		private router: Router,
		private provider: CharacterProviderService) { }

	download(index:number){
		this.provider.downloadInvestigator(index);
	}

	delete(index:number){
		this.provider.deleteInvestigator(index);
		this.investigators = this.provider.getInvestigators();
	}



	ngOnInit() {
		this.investigators = this.provider.getInvestigators();
	}

}
