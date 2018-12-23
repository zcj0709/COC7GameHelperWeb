import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dice',
	templateUrl: './dice.component.html',
	styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {
	diceresult = [];
	constructor() {}

	dice(dice:number):number{

		return Math.floor(Math.random() * dice) + 1;
	}
	// updateScroll(){
 //    	var element = document.getElementById("list");
 //    	element.scrollTop = element.scrollHeight;
	// }
	roll(dice:number,st:string){
		var random = this.dice(dice);
		var str = "You choose D"+dice+": "+random;
		var one = {style:st,result:str}
		this.diceresult.splice(0,0,one);
	}

	ngOnInit() {

	}

}