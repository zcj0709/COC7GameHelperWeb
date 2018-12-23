import { Component, OnInit } from '@angular/core';
import { Skill} from '../../../model/characteristic';
import { Characteristic} from '../../../model/characteristic';
import { CharacterProviderService } from 
'../../../model/character-provider.service'
import { Router, ActivatedRoute } from '@angular/router';;

@Component({
	selector: 'app-page3',
	templateUrl: './page3.component.html',
	styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
	title = 'Step 3: Decide Skills and allocate Skill Points';
	crpt1:number = 0;
	itpt1:number = 0;
	crpt2:number = 0;
	itpt2:number = 0;
	crpt3:number = 0;
	itpt3:number = 0;
	skills1:Skill[] = [];
	skills2:Skill[] = [];
	skills3:Skill[] = [];
	show = false;
	constructor(private route: ActivatedRoute,
		private router: Router,
		private provider: CharacterProviderService) {
		this.setSkills();
		
	}
	checkP():boolean {
		if (isNaN(this.crpt1) || isNaN(this.crpt2)||isNaN(this.crpt3)||isNaN(this.itpt1) || isNaN(this.itpt2)||isNaN(this.itpt3)) 
			return false;
		else return true;
	}
	setAlert(){
		this.show = !this.checkP();
	}
	changeCareer1(index:number){
		this.crpt1 = 0;
		for (var i = 0; i < this.skills1.length; i++) {
			this.crpt1+=Number.parseInt(this.skills1[i].career.toString());
			
		}
		this.change1(index);
		
	}
	changeInterest1(index:number){
		this.itpt1 = 0;
		for (var i = 0; i < this.skills1.length; i++) {
			this.itpt1+=Number.parseInt(this.skills1[i].interest.toString());
		}
		this.change1(index);
	}
	changeCareer2(index:number){
		this.crpt2 = 0;
		for (var i = 0; i < this.skills2.length; i++) {
			this.crpt2+=Number.parseInt(this.skills2[i].career.toString());
		}
		this.change2(index);
	}
	changeInterest2(index:number){
		this.itpt2 = 0;
		for (var i = 0; i < this.skills2.length; i++) {
			this.itpt2+=Number.parseInt(this.skills2[i].interest.toString());
		}
		this.change2(index);
	}
	changeCareer3(index:number){
		this.crpt3 = 0;
		for (var i = 0; i < this.skills3.length; i++) {
			this.crpt3+=Number.parseInt(this.skills3[i].career.toString());
		}
		this.change3(index);
	}
	changeInterest3(index:number){
		this.itpt3 = 0;
		for (var i = 0; i < this.skills3.length; i++) {
			this.itpt3+=Number.parseInt(this.skills3[i].interest.toString());
		}
		this.change3(index);
	}

	change1(index:number){
		this.setAlert();
		this.skills1[index].update();
	}
	change3(index:number){
		this.setAlert();
		this.skills3[index].update();
	}

	change2(index:number){
		this.setAlert();
		this.skills2[index].update();
	}

	setSkills(){
		this.skills1.push(new Skill("Accounting",5,0,0,5));
		this.skills1.push(new Skill("Anthropology",1,0,0,1));
		this.skills1.push(new Skill("Appraise",1,0,0,1));
		this.skills1.push(new Skill("Archaeology",1,0,0,1));
		this.skills1.push(new Skill("Art and Craft",5,0,0,5));
		this.skills1.push(new Skill("Charm",15,0,0,15));
		this.skills1.push(new Skill("Climb",20,0,0,20));
		this.skills1.push(new Skill("Computer Use",5,0,0,5));
		this.skills1.push(new Skill("Credit Rating",0,0,0,0));
		this.skills1.push(new Skill("Cthulhu Mythos",0,0,0,0));
		this.skills1.push(new Skill("Disguise",5,0,0,5));
		this.skills1.push(new Skill("Dodge",0,0,0,0));
		this.skills1.push(new Skill("Drive Auto",20,0,0,20));
		this.skills1.push(new Skill("Electrical Repair",10,0,0,10));
		this.skills1.push(new Skill("Electronics",1,0,0,1));
		this.skills1.push(new Skill("Fast Talk",5,0,0,5));  
		this.skills1.push(new Skill("Fighting",25,0,0,25));
		this.skills1.push(new Skill("Firearms",20,0,0,20));
		this.skills2.push(new Skill("First Aid",30,0,0,30));
		this.skills2.push(new Skill("History",5,0,0,5));
		this.skills2.push(new Skill("Intimidate",5,0,0,5));
		this.skills2.push(new Skill("Jump",20,0,0,20));
		this.skills2.push(new Skill("Language",1,0,0,1));
		this.skills2.push(new Skill("Law",5,0,0,5));
		this.skills2.push(new Skill("Library Use",20,0,0,20));
		this.skills2.push(new Skill("Listen",20,0,0,20));
		this.skills2.push(new Skill("Locksmith",1,0,0,1));
		this.skills2.push(new Skill("Mechanical Repair",10,0,0,10));
		this.skills2.push(new Skill("Medicine",1,0,0,1));
		this.skills2.push(new Skill("Natural World",10,0,0,10));
		this.skills2.push(new Skill("Navigate",10,0,0,10));
		this.skills2.push(new Skill("Occult",5,0,0,5));
		this.skills2.push(new Skill("Operate Heavy Machinery",1,0,0,1));
		this.skills2.push(new Skill("Persuade",10,0,0,10));
		this.skills2.push(new Skill("Pilot",1,0,0,1));
		this.skills3.push(new Skill("Psychoanalysis",1,0,0,1));
		this.skills3.push(new Skill("Psychology",10,0,0,10));
		this.skills3.push(new Skill("Ride",5,0,0,5));
		this.skills3.push(new Skill("Science",1,0,0,1));
		this.skills3.push(new Skill("Sleight of Hand",10,0,0,10));
		this.skills3.push(new Skill("Spot Hidden",25,0,0,25));
		this.skills3.push(new Skill("Stealth",20,0,0,20));
		this.skills3.push(new Skill("Survival",10,0,0,10));
		this.skills3.push(new Skill("Swim",20,0,0,20));
		this.skills3.push(new Skill("Throw",20,0,0,20));
		this.skills3.push(new Skill("Track",10,0,0,10));
		this.skills3.push(new Skill("Beast Trainning*",5,0,0,5));
		this.skills3.push(new Skill("Diving*",1,0,0,1));
		this.skills3.push(new Skill("Demolitions*",1,0,0,1));
		this.skills3.push(new Skill("Read Lips",1,0,0,1));
		this.skills3.push(new Skill("Hypnosis*",1,0,0,1));
		this.skills3.push(new Skill("Artillery*",1,0,0,1));
		this.skills3.push(new Skill("Knowledge*",0,0,0,0));
	}

	ngOnInit() {

	}
	submitPage3(){
		if (this.checkP()){
			window.localStorage.setItem("Skill1", JSON.stringify(this.skills1));
			window.localStorage.setItem("Skill2", JSON.stringify(this.skills2));
			window.localStorage.setItem("Skill3", JSON.stringify(this.skills3));
			this.router.navigate(['/page4']);
		}
		else{
			this.setAlert();
		}
		
	}

}
