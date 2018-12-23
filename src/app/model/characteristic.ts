export class Characteristic{
	id:number;
	str: number;
	con: number;
	siz: number;
	dex: number;
	app: number;
	int: number;
	pow: number;
	edu: number;
	luck: number;
	total:number;
}

export class Investigator{
	id:number;
	name:string;
	gender:string;
	occupation:string;
	age: number;
	residence:string;
	hometown:string;
	era:string;
	characteristic:Characteristic;
	skill1:any;
	skill2:any;
	skill3:any;
	backstory:any;
}

export class Skill{
	name:string;
	initial: number;
	career:number;
	interest:number;
	total:number;

	constructor(nam:string,ini:number,car:number,int:number,tot:number){
		this.name = nam;
		this.initial = ini;
		this.career = car;
		this.interest = int;
		this.total = tot;
	}

	update(){
		this.total = Number.parseInt(this.interest.toString()) + Number.parseInt(this.career.toString())+ Number.parseInt(this.initial.toString());
	}

}